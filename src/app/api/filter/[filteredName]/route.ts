export const revalidate = 0;

import { AllDestinationsReturnType } from "@/types/returnTypes";
import { prisma } from "../../../../../prisma/db";

/**
 * API route to fetch destinations based on a comma-separated list of tags.
 * Filters destinations that have at least one tag matching the input tags.
 * Returns a JSON response containing an array of unique destination objects.
 *
 * @param {Request} request - The incoming request object.
 * @param {object} params - The route parameters.
 * @param {string} params.filteredName - A comma-separated string of tags to filter by.
 *
 * @returns {Response} - A JSON response containing an array of unique destination objects
 *                     that match the specified tags.  Each destination object includes its tags.
 */
export async function GET(
  request: Request,
  { params }: { params: { filteredName: string } }
) {
  const filteredKeyArray = params.filteredName
    .split(",")
    .map((data) => data.trim());
  const totalFiltered = filteredKeyArray.length;
  const filteredData: AllDestinationsReturnType = [];

  for (let i = 0; i < totalFiltered; i++) {
    const data = await prisma.destination.findMany({
      where: {
        tags: {
          some: { tag: { contains: filteredKeyArray[i].toLowerCase() } },
        },
      },
      include: { tags: true },
    });

    if (data) {
      data.map((d) =>
        filteredData.push({
          description: d.description,
          id: d.id,
          image_url: d.image_url,
          name: d.name,
          tags: [{ tag: d.tags.map((e) => e.tag).toString() }], // Combines tags into a single string. Consider returning an array of tags.
        })
      );
    }
  }

  // Removes duplicate destinations from the results.
  const uniqueFilteredData = filteredData.filter(
    (value, index, array) => index === array.findIndex((u) => u.id === value.id)
  );

  return Response.json(uniqueFilteredData);
}
