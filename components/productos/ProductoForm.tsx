import { prisma } from "@/src/lib/prisma";
import ImagenesUpload from "./ImagenesUpload";

async function obtenerCategorias() {
  return await prisma.categoria.findMany();
}

export default async function ProductoForm() {
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
        >
          <option value="">-- Seleccione --</option>

          {categorias.map((categoria) => (
            <option key={categoria.id} value={categoria.id}>
              {categoria.nombre}
            </option>
          ))}
        </select>
      </div>

      <ImagenesUpload />
    </>
  );
}
