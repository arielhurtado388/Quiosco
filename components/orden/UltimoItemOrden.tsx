import { OrdenConProductos } from "@/src/types";

type UltimoItemOrdenProps = {
  orden: OrdenConProductos;
};
export default function UltimoItemOrden({ orden }: UltimoItemOrdenProps) {
  return (
    <div className="bg-white shadow p-5 space-y-5 rounded-lg">
      <p className="text-xl font-bold text-slate-600">
        Cliente: {orden.nombre}
      </p>

      <ul
        className="divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-gray-500"
        role="list"
      >
        {orden.productosOrden.map((producto) => (
          <li className="flex py-6 text-lg" key={producto.id}>
            <p>
              <span className="font-bold">({producto.cantidad}) </span>
              {producto.producto.nombre}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
