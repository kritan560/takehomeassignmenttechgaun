import { prisma } from "../../../../prisma/db";

export async function GET() {
  const allDestinations = await prisma.destination.findMany({
    include: { tags: true },
  });

  return Response.json(allDestinations);
}
