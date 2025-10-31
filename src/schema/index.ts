import z from "zod";

export const OrdenSchema = z.object({
  nombre: z.string().min(1, "Tu nombre es obligatorio"),
  total: z.number().min(1, "Hay errores en la orden"),
  orden: z.array(
    z.object({
      id: z.number(),
      nombre: z.string(),
      precio: z.number(),
      cantidad: z.number(),
      subtotal: z.number(),
    })
  ),
});
