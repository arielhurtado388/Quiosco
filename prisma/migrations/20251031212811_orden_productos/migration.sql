-- CreateTable
CREATE TABLE "Orden" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "estado" BOOLEAN NOT NULL DEFAULT false,
    "ordenListaAt" TIMESTAMP(3),

    CONSTRAINT "Orden_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProductosOrden" (
    "id" SERIAL NOT NULL,
    "idOrden" INTEGER NOT NULL,
    "idProducto" INTEGER NOT NULL,

    CONSTRAINT "ProductosOrden_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProductosOrden" ADD CONSTRAINT "ProductosOrden_idOrden_fkey" FOREIGN KEY ("idOrden") REFERENCES "Orden"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductosOrden" ADD CONSTRAINT "ProductosOrden_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
