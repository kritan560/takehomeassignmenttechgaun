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
    await prisma.destination.create({
      data: {
        description: data.destinationDescription,
        image_url: data.destinationImage,
        name: data.destination,
        tags: { create: { tag: data.destinationTag } },
      },
    });
    return Response.json("created", { status: 201 }); // Include a status code
  } catch (error) {
    console.error("Error creating destination:", error);
    return Response.json("Failed to create destination", { status: 500 }); // Handle errors and return a 500 status code
  }
}