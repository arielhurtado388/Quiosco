import ProductoCard from "@/components/productos/ProductoCard";
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
      <h1 className="text-lg my-10">Elige y personaliza tu pedido</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 items-start">
        {productos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </div>
    </>
  );
}
