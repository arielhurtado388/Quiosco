"use server";

import { prisma } from "@/src/lib/prisma";
import { OrdenIdSchema } from "@/src/schema";
import { revalidatePath } from "next/cache";

export async function completarOrden(datosFormulario: FormData) {
  const data = {
    idOrden: datosFormulario.get("id_orden"),
  };

  const resultado = OrdenIdSchema.safeParse(data);

  if (resultado.success) {
    try {
      await prisma.orden.update({
        where: {
          id: resultado.data.idOrden,
        },
        data: {
          estado: true,
          ordenListaAt: new Date(Date.now()),
        },
      });
      revalidatePath("/admin/ordenes");
    } catch (error) {
      console.log(error);
    }
  }
}
