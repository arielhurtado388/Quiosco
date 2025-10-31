import { Producto } from "@/app/generated/prisma/client";

export type ItemOrden = Pick<Producto, "id" | "nombre" | "precio"> & {
  cantidad: number;
  subtotal: number;
};
