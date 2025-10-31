/*
  Warnings:

  - Added the required column `cantidad` to the `ProductosOrden` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProductosOrden" ADD COLUMN     "cantidad" INTEGER NOT NULL;
