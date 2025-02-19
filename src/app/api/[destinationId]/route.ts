import { prisma } from "../../../../prisma/db";

export async function GET(
  request: Request,
  { params }: { params: { destinationId: string } }
) {
  const destination = await prisma.destination.findUnique({
    where: { id: params.destinationId },
    include: { tags: true },
  });

  return Response.json(destination);
}
