import { prisma } from "@/src/lib/prisma";
import ImagenesUpload from "./ImagenesUpload";
import { Producto } from "@/app/generated/prisma/client";

async function obtenerCategorias() {
  return await prisma.categoria.findMany();
}

type ProductoFormProps = {
  producto?: Producto;
};

export default async function ProductoForm({ producto }: ProductoFormProps) {
  const categorias = await obtenerCategorias();

  return (
    <>
      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="nombre">
          Nombre
        </label>
        <input
          id="nombre"
          type="text"
          name="nombre"
          className="block w-full p-3 bg-slate-100"
          placeholder="Nombre del producto"
          defaultValue={producto?.nombre}
        />
      </div>

      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="precio">
          Precio
        </label>
        <input
          id="precio"
          name="precio"
          type="number"
          className="block w-full p-3 bg-slate-100"
          placeholder="Precio del producto"
          defaultValue={producto?.precio}
        />
      </div>

      <div className="space-y-2">
        <label className="text-slate-800" htmlFor="idCategoria">
          Categoría
        </label>
        <select
          className="block w-full p-3 bg-slate-100"
          id="idCategoria"
          name="idCategoria"
          defaultValue={producto?.idCategoria}
        >
          <option value="">-- Seleccione --</option>

          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nombre}
            </option>
          ))}
        </select>
      </div>

      <ImagenesUpload imagen={producto?.imagen} />
    </>
  );
}
