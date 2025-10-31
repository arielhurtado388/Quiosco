import { Producto } from "@/app/generated/prisma/client";
import { formatearDinero } from "@/src/utils";
import Image from "next/image";
import AgregarProductoButton from "./AgregarProductoButton";

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
        <AgregarProductoButton producto={producto} />
      </div>
    </div>
  );
}
