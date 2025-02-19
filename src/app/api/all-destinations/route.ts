import { prisma } from "../../../../prisma/db";

/**
 * API route to fetch all destinations from the database, including their tags.
 *
 * @returns {Response} - A JSON response containing an array of destination objects.
 *                    Each destination object includes its associated tags.
 */
export async function GET() {
  const allDestinations = await prisma.destination.findMany({
    include: { tags: true },
  });

  return Response.json(allDestinations);
}