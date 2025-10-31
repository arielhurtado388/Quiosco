"use client";

import { Categoria } from "@/app/generated/prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

type CategoriaIconProps = {
  categoria: Categoria;
};

export default function CategoriaIcon({ categoria }: CategoriaIconProps) {
  const params = useParams<{
    categoria: string;
  }>();

  return (
    <div
      className={`flex items-center gap-4 w-full border-t border-gray-200 p-3 last-of-type:border-b ${
        categoria.slug === params.categoria ? "bg-amber-400" : ""
      }`}
    >
      <div className="w-16 h-16 relative">
        <Image
          fill
          src={`/icon_${categoria.slug}.svg`}
          alt="Imagen categoría"
        />
      </div>

      <Link className="text-lg font-bold" href={`/orden/${categoria.slug}`}>
        {categoria.nombre}
      </Link>
    </div>
  );
}
