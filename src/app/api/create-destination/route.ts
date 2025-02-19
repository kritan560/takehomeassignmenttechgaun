export const revalidate = 0;

import { prisma } from "../../../../prisma/db";

/**
 * API route to create a new destination.
 * Requires `destination`, `destinationImage`, and `destinationTag` in the request body.
 *
 * @param {Request} request - The incoming request object.  The request body should contain
 *                            the data for the new destination.
 *
 * @returns {Response} - A JSON response indicating the creation status.  Returns "created"
 *                     on success, or an error message if required data is missing.
 */
export async function POST(request: Request) {
  const data = await request.json();
  
  if (!data.destination || !data.destinationImage || !data.destinationTag) {
    return Response.json("Please Provide the data", { status: 400 }); // Include a status code
  }

  try {
    const newDestination = await prisma.destination.create({
      data: {
        description: data.destinationDescription,
        image_url: data.destinationImage,
        name: data.destination,
        tags: { create: { tag: data.destinationTag } },
      },
      include: { tags: true },
    });
    
    return Response.json(newDestination); // Include a status code
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return Response.json("Failed to create destination", { status: 500 }); // Handle errors and return a 500 status code
  }
}
