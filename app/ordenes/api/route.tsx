import { prisma } from "@/src/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  const ordenenes = await prisma.orden.findMany({
    take: 5,
    where: {
      ordenListaAt: {
        not: null,
      },
    },
    orderBy: {
      ordenListaAt: "desc",
    },
    include: {
      productosOrden: {
        include: {
          producto: true,
        },
      },
    },
  });

  return Response.json(ordenenes);
}
