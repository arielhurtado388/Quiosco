"use client";

import { Producto } from "@/app/generated/prisma/client";
import { useStore } from "@/src/store";
import { useMemo } from "react";

type AgregarProductoButtonProps = {
  producto: Producto;
};

export default function AgregarProductoButton({
  producto,
}: AgregarProductoButtonProps) {
  const agregarAOrden = useStore((state) => state.agregarAOrden);

  return (
    <button
      className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
      type="button"
      onClick={() => agregarAOrden(producto)}
    >
      Agregar
    </button>
  );
}
