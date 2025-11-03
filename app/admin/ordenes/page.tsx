"use client";

import useSWR from "swr";
import OrdenCard from "@/components/orden/OrdenCard";
import Heading from "@/components/ui/Heading";
import { OrdenConProductos } from "@/src/types";

export default function OrdenesPage() {
  const url = "/admin/ordenes/api";
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
        <Heading>Administrar órdenes</Heading>

        {data.length ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5 mt-5">
            {data.map((orden) => (
              <OrdenCard key={orden.id} orden={orden} />
            ))}
          </div>
        ) : (
          <p className="text-center">No hay órdenes aquí</p>
        )}
      </>
    );
}
