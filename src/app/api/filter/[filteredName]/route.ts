import { AllDestinationsReturnType } from "@/types/returnTypes";
import { prisma } from "../../../../../prisma/db";

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
      where: { tags: { some: { tag: { contains: filteredKeyArray[i] } } } },
      include: { tags: true },
    });

    if (data) {
      data.map((d) =>
        filteredData.push({
          description: d.description,
          id: d.id,
          image_url: d.image_url,
          name: d.name,
          tags: [{ tag: d.tags.map((e) => e.tag).toString() }],
        })
      );
    }
  }

  // sometimes the data will be duplicated when you search through many tags this will eliminate any duplicated data.
  const uniqueFilteredData = filteredData.filter(
    (value, index, array) => index === array.findIndex((u) => u.id === value.id)
  );

  return Response.json(uniqueFilteredData);
}
