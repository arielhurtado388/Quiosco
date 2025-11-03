"use client";

import UltimoItemOrden from "@/components/orden/UltimoItemOrden";
import Logo from "@/components/ui/Logo";
import { OrdenConProductos } from "@/src/types";
import useSWR from "swr";

export default function OrdenesPage() {
  const url = "/ordenes/api";
  const fetcher = () =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => data);

  const { data, isLoading } = useSWR<OrdenConProductos[]>(url, fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false,
  });

  if (isLoading) return <p>Cargando...</p>;

  if (data)
    return (
      <>
        <h1 className="text-center mt-20 text-3xl font-black">
          Ordenes listas
        </h1>

        <Logo />

        {data.length ? (
          <div className="grid grid-cols-2 gap-5 max-w-5xl mx-auto my-10">
            {data.map((orden) => (
              <UltimoItemOrden key={orden.id} orden={orden} />
            ))}
          </div>
        ) : (
          <p className="text-center my-10">No hay órdenes listas</p>
        )}
      </>
    );
}
