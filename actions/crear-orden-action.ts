"use server";

import { prisma } from "@/src/lib/prisma";
import { OrdenSchema } from "@/src/schema";

export async function crearOrden(data: unknown) {
  const resultado = OrdenSchema.safeParse(data);

  if (!resultado.success) {
    return {
      errores: resultado.error.issues,
    };
  }

  try {
    await prisma.orden.create({
      data: {
        nombre: resultado.data.nombre,
        total: resultado.data.total,
        productosOrden: {
          create: resultado.data.orden.map((producto) => ({
            idProducto: producto.id,
            cantidad: producto.cantidad,
          })),
        },
      },
    });
  } catch (error) {
    console.log(error);
  }
}
