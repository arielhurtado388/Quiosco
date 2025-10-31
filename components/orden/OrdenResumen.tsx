"use client";

import { useStore } from "@/src/store";
import ProductoDetalles from "./ProductoDetalles";
import { useMemo } from "react";
import { formatearDinero } from "@/src/utils";

export default function OrdenResumen() {
  const orden = useStore((state) => state.orden);
  const total = useMemo(
    () => orden.reduce((total, item) => total + item.cantidad * item.precio, 0),
    [orden]
  );

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-3xl text-center font-black">Mi pedido</h1>

      {orden.length === 0 ? (
        <p className="text-center my-10">El carrito está vacío</p>
      ) : (
        <div className="mt-5">
          {orden.map((item) => (
            <ProductoDetalles key={item.id} item={item} />
          ))}

          <p className="text-lg mt-20 text-center">
            Total a pagar:{" "}
            <span className="font-bold">{formatearDinero(total)}</span>
          </p>
        </div>
      )}
    </aside>
  );
}
