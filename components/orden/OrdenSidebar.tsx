import { prisma } from "@/src/lib/prisma";

async function obtenerCategorias() {
  return await prisma.categoria.findMany();
}

export default async function OrdenSidebar() {
  const categorias = await obtenerCategorias();
  return (
    <aside className="md:w-72 md:h-screen bg-white">
      OrdenSidebar
      {}
    </aside>
  );
}
