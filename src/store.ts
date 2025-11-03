import { create } from "zustand";
import { ItemOrden } from "./types";
import { Producto } from "@/app/generated/prisma/client";

interface Store {
  orden: ItemOrden[];
  agregarAOrden: (producto: Producto) => void;
  incrementar: (id: Producto["id"]) => void;
  decrementar: (id: Producto["id"]) => void;
  eliminarDeOrden: (id: Producto["id"]) => void;
  limpiarOrden: () => void;
}

export const useStore = create<Store>((set, get) => ({
  orden: [],
  agregarAOrden: (producto) => {
    const { ...data } = producto;
    let orden: ItemOrden[] = [];

    const existeItem = get().orden.find((item) => item.id === producto.id);

    if (existeItem) {
      if (existeItem.cantidad < 5) {
        orden = get().orden.map((item) =>
          item.id === producto.id
            ? {
                ...item,
                cantidad: item.cantidad + 1,
                subtotal: item.precio * (item.cantidad + 1),
              }
            : item
        );
      } else {
        return;
      }
    } else {
      orden = [
        ...get().orden,
        {
          ...data,
          cantidad: 1,
          subtotal: 1 * producto.precio,
        },
      ];
    }

    set(() => ({
      orden,
    }));
  },

  incrementar: (id) => {
    set((state) => ({
      orden: state.orden.map((item) =>
        item.id === id
          ? {
              ...item,
              cantidad: item.cantidad + 1,
              subtotal: item.precio * (item.cantidad + 1),
            }
          : item
      ),
    }));
  },
  decrementar: (id) => {
    const orden = get().orden.map((item) =>
      item.id === id
        ? {
            ...item,
            cantidad: item.cantidad - 1,
            subtotal: item.precio * (item.cantidad - 1),
          }
        : item
    );

    set(() => ({
      orden,
    }));
  },

  eliminarDeOrden: (id) => {
    set((state) => ({
      orden: state.orden.filter((item) => item.id !== id),
    }));
  },

  limpiarOrden: () => {
    set(() => ({
      orden: [],
    }));
  },
}));
