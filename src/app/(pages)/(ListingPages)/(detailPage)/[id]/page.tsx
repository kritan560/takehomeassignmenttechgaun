"use client";

import { SingleDestinationReturnType } from "@/types/returnTypes";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ListOfDestinations from "../../../../../components/ListOfDestinations";
import { RiFolderWarningFill } from "react-icons/ri";

type DetailPageProps = {
  params: { id: string };
};

const DetailPage = (props: DetailPageProps) => {
  const {
    params: { id },
  } = props;
  const [destination, setDestination] = useState<SingleDestinationReturnType>({
    description: "",
    id: "",
    image_url: "",
    name: "",
    tags: [{ id: "", tag: "" }],
  });

  useEffect(() => {
    getSpecificDestination(id);
  }, [id]);

  async function getSpecificDestination(id: string) {
    try {
      const res = await fetch(`/api/${id}`);
      const data = await res.json();
      setDestination(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.error("Something went wrong");
    }
  }

  return (
    <div className="px-6 py-3">
      <p className="font-semibold text-2xl">{destination.name}</p>
      <Image
        className="rounded-xl aspect-video object-cover"
        priority
        src={
          destination.image_url ||
          "https://images.pexels.com/photos/695644/pexels-photo-695644.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        alt={destination.name || ""}
        width={550}
        height={550}
      />
      <p className="font-semibold text-stone-600 mt-2">
        Tags: {destination.tags.map((tag) => tag.tag)}
      </p>
      {destination.description && destination.description.length > 0 ? (
        <p className="text-stone-600">
          <span className="font-semibold">Description: </span>
          {destination.description}
        </p>
      ) : (
        <div className="text-stone-600 flex gap-x-2 items-center">
          <div className="p-2 bg-red-100 w-fit h-fit rounded-full">
            <RiFolderWarningFill className="text-red-500" />
          </div>
          <p className="text-red-500">No Description found</p>
        </div>
      )}

      <div className="mt-9">
        <h2 className="text-center text-stone-600 font-medium text-2xl mb-4">
          See Other Beautiful Places
        </h2>
        <ListOfDestinations id={id} />
      </div>
    </div>
  );
};

export default DetailPage;
