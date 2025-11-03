import EditarProductoForm from "@/components/productos/EditarProductoForm";
import ProductoForm from "@/components/productos/ProductoForm";
import GoBackButton from "@/components/ui/GoBackButton";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

async function obtenerProductoPorId(id: number) {
  const producto = await prisma.producto.findUnique({
    where: {
      id,
    },
  });

  if (!producto) {
    notFound();
  }

  return producto;
}

export default async function EditarProductoPage({
  params,
}: {
  params: { id: string };
}) {
  const producto = await obtenerProductoPorId(+params.id);
  return (
    <>
      <Heading>Editar producto</Heading>

      <GoBackButton />

      <EditarProductoForm>
        <ProductoForm producto={producto} />
      </EditarProductoForm>
    </>
  );
}
