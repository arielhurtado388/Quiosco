import Link from "next/link";
import React from "react";

type PaginacionProps = {
  pagina: number;
  totalPaginas: number;
};

export default function Paginacion({ pagina, totalPaginas }: PaginacionProps) {
  const numeroPaginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center py-10">
      {pagina > 1 && (
        <Link
          className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-offset-gray-300 focus:z-20 focus:outline-offset-0"
          href={`/admin/productos?pagina=${pagina - 1}`}
        >
          &laquo;
        </Link>
      )}

      {numeroPaginas.map((paginaActual) => (
        <Link
          key={paginaActual}
          className={`${
            paginaActual === pagina ? "font-bold bg-amber-400" : "bg-white"
          } px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-offset-gray-300 focus:z-20 focus:outline-offset-0`}
          href={`/admin/productos?pagina=${paginaActual}`}
        >
          {paginaActual}
        </Link>
      ))}

      {pagina < totalPaginas && (
        <Link
          className="bg-white px-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-offset-gray-300 focus:z-20 focus:outline-offset-0"
          href={`/admin/productos?pagina=${pagina + 1}`}
        >
          &raquo;
        </Link>
      )}
    </nav>
  );
}
