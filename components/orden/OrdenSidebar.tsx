import { prisma } from "@/src/lib/prisma";
import CategoriaIcon from "../ui/CategoriaIcon";

async function obtenerCategorias() {
  return await prisma.categoria.findMany();
}

export default async function OrdenSidebar() {
  const categorias = await obtenerCategorias();
  return (
    <aside className="md:w-72 md:h-screen bg-white">
      <nav className="mt-10">
        {categorias.map((categoria) => (
          <CategoriaIcon key={categoria.id} categoria={categoria} />
        ))}
      </nav>
    </aside>
  );
}
