import OrdenCard from "@/components/orden/OrdenCard";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function obtenerOrdenesPendientes() {
  const ordenes = await prisma.orden.findMany({
    where: {
      estado: false,
    },
    include: {
      productosOrden: {
        include: {
          producto: true,
        },
      },
    },
  });

  return ordenes;
}

export default async function OrdenesPage() {
  const ordenes = await obtenerOrdenesPendientes();

  return (
    <>
      <Heading>Administrar órdenes</Heading>

      {ordenes.length ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
          {ordenes.map((orden) => (
            <OrdenCard key={orden.id} orden={orden} />
          ))}
        </div>
      ) : (
        <p className="text-center">No hay órdenes aquí</p>
      )}
    </>
  );
}
