import AgregarProductoForm from "@/components/productos/AgregarProductoForm";
import ProductoForm from "@/components/productos/ProductoForm";
import Heading from "@/components/ui/Heading";

export default function CrearPage() {
  return (
    <>
      <Heading>Nuevo producto</Heading>
      <AgregarProductoForm>
        <ProductoForm />
      </AgregarProductoForm>
    </>
  );
}
