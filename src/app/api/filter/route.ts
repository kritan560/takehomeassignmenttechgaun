export const revalidate = 0;

import { prisma } from "../../../../prisma/db";

/**
 * API route to fetch all destinations from the database.
 * Includes the associated tags for each destination.
 *
 * @returns {Response} - A JSON response containing an array of destination objects.
 *                    Each destination object includes its tags.
 */
export async function GET() {
  const data = await prisma.destination.findMany({ include: { tags: true } });
  return Response.json(data);
}
