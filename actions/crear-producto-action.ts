"use server";

import { prisma } from "@/src/lib/prisma";
import { ProductoSchema } from "@/src/schema";

export async function crearProducto(data: unknown) {
  const resultado = ProductoSchema.safeParse(data);

  if (!resultado.success) {
    return {
      errores: resultado.error.issues,
    };
  }

  await prisma.producto.create({
    data: resultado.data,
  });
}
