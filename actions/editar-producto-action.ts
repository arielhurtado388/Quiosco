"use server";

import { prisma } from "@/src/lib/prisma";
import { ProductoSchema } from "@/src/schema";
import { revalidatePath } from "next/cache";

export async function actualizarProducto(data: unknown, id: number) {
  const resultado = ProductoSchema.safeParse(data);

  if (!resultado.success) {
    return {
      errores: resultado.error.issues,
    };
  }

  await prisma.producto.update({
    where: {
      id,
    },
    data: resultado.data,
  });

  revalidatePath("/admin/productos");
}
