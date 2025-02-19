import { prisma } from "../../../../prisma/db";

export async function POST(request: Request) {
  const data = await request.json();
  if (!data.destination || !data.destinationImage || !data.destinationTag) {
    return Response.json("Please Provide the data");
  }

  await prisma.destination.create({
    data: {
      description: data.destinationDescription,
      image_url: data.destinationImage,
      name: data.destination,
      tags: { create: { tag: data.destinationTag } },
    },
  });
  return Response.json("created");
}
