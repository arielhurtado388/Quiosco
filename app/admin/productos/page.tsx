import BuscadorProducto from "@/components/productos/BuscadorProducto";
import Paginacion from "@/components/productos/Paginacion";
import TablaProductos from "@/components/productos/TablaProductos";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import { redirect } from "next/navigation";

async function contadorProductos() {
  return await prisma.producto.count();
}

async function obtenerProductos(pagina: number, pageSize: number) {
  const skip = (pagina - 1) * pageSize;

  const productos = await prisma.producto.findMany({
    take: pageSize,
    skip,
    include: {
      categoria: true,
    },
  });

  return productos;
}

export type ProductosConCategoria = Awaited<
  ReturnType<typeof obtenerProductos>
>;

export default async function ProductosPage({
  searchParams,
}: {
  searchParams: { pagina: string };
}) {
  const pagina = +searchParams.pagina || 1;
  const pageSize = 10;

  if (pagina < 0) redirect("/admin/productos");

  const productosData = obtenerProductos(pagina, pageSize);
  const totalProductosData = contadorProductos();

  const [productos, totalProductos] = await Promise.all([
    productosData,
    totalProductosData,
  ]);

  const totalPaginas = Math.ceil(totalProductos / pageSize);

  if (pagina > totalPaginas) redirect("/admin/productos");

  return (
    <>
      <Heading>Administrar productos</Heading>

      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
        <Link
          className="w-full bg-amber-400 text-center font-bold cursor-pointer lg:w-auto text-lg px-10 py-3"
          href={"/admin/productos/crear"}
        >
          Crear producto
        </Link>

        <BuscadorProducto />
      </div>

      <TablaProductos productos={productos} />
      <Paginacion pagina={pagina} totalPaginas={totalPaginas} />
    </>
  );
}
