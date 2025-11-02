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

export const OrdenIdSchema = z.object({
  idOrden: z
    .string()
    .transform((value) => parseInt(value))
    .refine((value) => value > 0, { message: "Hay errores" }),
});

export const BuscadorSchema = z.object({
  buscador: z
    .string()
    .trim()
    .min(1, { message: "La búsqueda no puede ir vacía" }),
});
