import ProductoCard from "@/components/productos/ProductoCard";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";

async function obtenerProductos(categoria: string) {
  const productos = await prisma.producto.findMany({
    where: {
      categoria: {
        slug: categoria,
      },
    },
  });

  return productos;
}

export default async function OrdenPage({
  params,
}: {
  params: { categoria: string };
}) {
  const productos = await obtenerProductos(params.categoria);

  return (
    <>
      <Heading>Elige y personaliza tu pedido</Heading>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4 items-start">
        {productos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
}
