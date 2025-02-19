export const revalidate = 0;

import { prisma } from "../../../../prisma/db";

/**
 * API route to fetch a single destination by its ID, including its tags.
 *
 * @param {Request} request - The incoming request object.
 * @param {object} params - The route parameters.
 * @param {string} params.destinationId - The ID of the destination to retrieve.
 *
 * @returns {Response} - A JSON response containing the destination object, or null if not found.
 *                     The destination object includes its associated tags.
 */
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
