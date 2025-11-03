import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center">
      <Heading>Producto no encontrado</Heading>
      <Link
        className="bg-amber-400 text-black px-10 py-3 text-lg text-center font-bold cursor-pointer w-full lg:w-auto"
        href={"/admin/productos"}
      >
        Ir a productos
      </Link>
    </div>
  );
}
