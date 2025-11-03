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

export const ProductoSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(1, { message: "El nombre del producto es obligatorio" }),
  precio: z
    .string()
    .trim()
    .transform((value) => parseFloat(value))
    .or(z.number())
    .refine((value) => value > 0, { message: "El precio debe ser mayor a 0" }),
  idCategoria: z
    .string()
    .trim()
    .transform((value) => parseInt(value))
    .or(z.number())
    .refine((value) => value > 0, { message: "La categoría es obligatoria" }),
  imagen: z.string().min(1, { message: "La imagen es obligatoria" }),
});
