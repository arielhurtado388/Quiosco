"use client";

import { BuscadorSchema } from "@/src/schema";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function BuscadorProducto() {
  const router = useRouter();

  const handleBuscadorForm = (datosFormulario: FormData) => {
    const data = {
      buscador: datosFormulario.get("buscador"),
    };
    const resultado = BuscadorSchema.safeParse(data);
    if (!resultado.success) {
      resultado.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }
    router.push(
      `/admin/productos/buscador?buscador=${resultado.data.buscador}`
    );
  };

  return (
    <form className="flex items-center" action={handleBuscadorForm}>
      <input
        className="p-2 placeholder-bg-gray-400 w-full"
        type="text"
        placeholder="Buscar producto"
        name="buscador"
      />

      <input
        className="bg-indigo-600 p-2 uppercase text-white cursor-pointer"
        type="submit"
        value={"Buscar"}
      />
    </form>
  );
}
