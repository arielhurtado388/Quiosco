import { Producto } from "@/app/generated/prisma/client";
import { formatearDinero } from "@/src/utils";
import Image from "next/image";

type ProductoCardProps = {
  producto: Producto;
};

export default function ProductoCard({ producto }: ProductoCardProps) {
  return (
    <div className="border bg-white">
      <Image
        width={400}
        height={500}
        src={`/productos/${producto.imagen}.jpg`}
        alt={`Imagen plato ${producto.nombre}`}
      />

      <div className="p-5">
        <h3 className="text-lg font-bold">{producto.nombre}</h3>
        <p className="mt-5 font-black text-3xl text-amber-500">
          {formatearDinero(producto.precio)}
        </p>
        <button
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          type="button"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
