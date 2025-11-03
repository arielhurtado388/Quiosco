"use client";

import { ProductoSchema } from "@/src/schema";
import { toast } from "react-toastify";
import { crearProducto } from "@/actions/crear-producto-action";
import { useParams, useRouter } from "next/navigation";
import { actualizarProducto } from "@/actions/editar-producto-action";

export default function EditarProductoForm({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const params = useParams();
  const id = +params.id!;

  const handleSubmit = async (datosFormulario: FormData) => {
    const data = {
      nombre: datosFormulario.get("nombre"),
      precio: datosFormulario.get("precio"),
      idCategoria: datosFormulario.get("idCategoria"),
      imagen: datosFormulario.get("imagen"),
    };
    const resultado = ProductoSchema.safeParse(data);

    if (!resultado.success) {
      resultado.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    const respuesta = await actualizarProducto(resultado.data, id);

    if (respuesta?.errores) {
      respuesta.errores.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    toast.success("Producto actualizado correctamente");
    router.push("/admin/productos");
  };

  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto">
      <form className="space-y-5" action={handleSubmit}>
        {children}
        <input
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          type="submit"
          value={"Guardar cambios"}
        />
      </form>
    </div>
  );
}
