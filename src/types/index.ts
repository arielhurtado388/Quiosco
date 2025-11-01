import { Orden, Producto, ProductosOrden } from "@/app/generated/prisma/client";

export type ItemOrden = Pick<Producto, "id" | "nombre" | "precio"> & {
  cantidad: number;
  subtotal: number;
};

export type OrdenConProductos = Orden & {
  productosOrden: (ProductosOrden & {
    producto: Producto;
  })[];
};
