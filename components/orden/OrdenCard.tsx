import { completarOrden } from "@/actions/completar-orden-action";
import { OrdenConProductos } from "@/src/types";
import { formatearDinero } from "@/src/utils";

type OrdenCardProps = {
  orden: OrdenConProductos;
};

export default function OrdenCard({ orden }: OrdenCardProps) {
  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6  lg:mt-0 lg:p-8 space-y-4"
    >
      <p className="text-lg font-medium text-gray-900">
        Cliente: {orden.nombre}{" "}
      </p>
      <p className="text-lg font-medium text-gray-900">Lo que pidió:</p>
      <dl className="mt-6 space-y-4">
        {orden.productosOrden.map((producto) => (
          <div
            className="flex items-center gap-2 border-t border-gray-200 pt-4"
            key={producto.idProducto}
          >
            <dt className="flex items-center text-sm text-gray-600">
              <span className="font-black">({producto.cantidad})</span>
            </dt>
            <dd className="text-sm font-medium text-gray-900">
              {producto.producto.nombre}
            </dd>
          </div>
        ))}

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">
            Total a Pagar:
          </dt>
          <dd className="text-base font-medium text-gray-900">
            {formatearDinero(orden.total)}
          </dd>
        </div>
      </dl>

      <form action={completarOrden}>
        <input type="hidden" value={orden.id} name="id_orden" />
        <input
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          value="Marcar Orden Completada"
        />
      </form>
    </section>
  );
}
