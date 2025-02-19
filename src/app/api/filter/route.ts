import { prisma } from "../../../../prisma/db";

export async function GET() {
  const data = await prisma.destination.findMany({ include: { tags: true } });
  return Response.json(data);
}
