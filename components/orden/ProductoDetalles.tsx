import { useStore } from "@/src/store";
import { ItemOrden } from "@/src/types";
import { formatearDinero } from "@/src/utils";
import { MinusIcon, PlusIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useMemo } from "react";

type ProductoDetallesProps = {
  item: ItemOrden;
};
const MIN_ITEMS = 1;
const MAX_ITEMS = 5;

export default function ProductoDetalles({ item }: ProductoDetallesProps) {
  const incrementar = useStore((state) => state.incrementar);
  const decrementar = useStore((state) => state.decrementar);
  const eliminarDeOrden = useStore((state) => state.eliminarDeOrden);

  const desactivarButtonDecrementar = useMemo(
    () => item.cantidad === MIN_ITEMS,
    [item]
  );

  const desactivarButtonIncrementar = useMemo(
    () => item.cantidad === MAX_ITEMS,
    [item]
  );

  return (
    <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <p className="text-lg font-bold">{item.nombre} </p>

          <button type="button" onClick={() => eliminarDeOrden(item.id)}>
            <XCircleIcon className="text-red-600 h-8 w-8" />
          </button>
        </div>
        <p className="text-lg text-amber-500 font-black">
          {formatearDinero(item.precio)}
        </p>
        <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
          <button
            className="disabled:opacity-20"
            type="button"
            onClick={() => decrementar(item.id)}
            disabled={desactivarButtonDecrementar}
          >
            <MinusIcon className="h-6 w-6" />
          </button>

          <p className="font-black ">{item.cantidad}</p>

          <button
            className="disabled:opacity-20"
            type="button"
            onClick={() => incrementar(item.id)}
            disabled={desactivarButtonIncrementar}
          >
            <PlusIcon className="h-6 w-6" />
          </button>
        </div>
        <p className="font-black text-gray-700">
          Subtotal: {""}
          <span className="font-normal">{formatearDinero(item.subtotal)}</span>
        </p>
      </div>
    </div>
  );
}
