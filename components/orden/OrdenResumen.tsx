"use client";

import { useStore } from "@/src/store";
import ProductoDetalles from "./ProductoDetalles";
import { useMemo } from "react";
import { formatearDinero } from "@/src/utils";
import { crearOrden } from "@/actions/crear-orden-action";
import { OrdenSchema } from "@/src/schema";
import { toast } from "react-toastify";

export default function OrdenResumen() {
  const orden = useStore((state) => state.orden);
  const total = useMemo(
    () => orden.reduce((total, item) => total + item.cantidad * item.precio, 0),
    [orden]
  );
  const limpiarOrden = useStore((state) => state.limpiarOrden);

  const handleCrearOrden = async (datosFormulario: FormData) => {
    const data = {
      nombre: datosFormulario.get("nombre"),
      total,
      orden,
    };

    const resultado = OrdenSchema.safeParse(data);

    if (!resultado.success) {
      resultado.error.issues.forEach((issue) => {
        toast.error(issue.message);
      });
      return;
    }

    const respuesta = await crearOrden(data);
    if (respuesta?.errores) {
      respuesta.errores.forEach((issue) => {
        toast.error(issue.message);
      });
    }

    toast.success("Pedido realizado correctamente");
    limpiarOrden();
  };

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-3xl text-center font-black">Mi pedido</h1>

      {orden.length === 0 ? (
        <p className="text-center my-10">El pedido está vacío</p>
      ) : (
        <div className="mt-5">
          {orden.map((item) => (
            <ProductoDetalles key={item.id} item={item} />
          ))}

          <p className="text-lg mt-20 text-center">
            Total a pagar:{" "}
            <span className="font-bold">{formatearDinero(total)}</span>
          </p>

          <form className="space-y-5 w-full mt-10" action={handleCrearOrden}>
            <input
              className="bg-white border border-gray-100 p-2 w-full"
              type="text"
              placeholder="Tu nombre"
              name="nombre"
            />
            <input
              className="py-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer font-bold"
              type="submit"
              value={"Confirmar pedido"}
            />
          </form>
        </div>
      )}
    </aside>
  );
}
