import BuscadorProducto from "@/components/productos/BuscadorProducto";
import TablaProductos from "@/components/productos/TablaProductos";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function buscarProductos(terminoBusqueda: string) {
  const productos = await prisma.producto.findMany({
    where: {
      nombre: {
        contains: terminoBusqueda,
        mode: "insensitive",
      },
    },
    include: {
      categoria: true,
    },
  });

  return productos;
}

export default async function BuscadorPage({
  searchParams,
}: {
  searchParams: { buscador: string };
}) {
  const productos = await buscarProductos(searchParams.buscador);
  return (
    <>
      <Heading>Resultados de búsqueda: {searchParams.buscador}</Heading>

      <div className="flex flex-col gap-5 lg:flex-row lg:justify-end">
        <BuscadorProducto />
      </div>
      {productos.length ? (
        <TablaProductos productos={productos} />
      ) : (
        <p className="text-center text-lg mt-10">No hay resultados</p>
      )}
    </>
  );
}
