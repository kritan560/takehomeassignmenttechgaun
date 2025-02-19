"use client";

import { blurDataURL } from "@/const";
import { useHomepageStore } from "@/store/HomepageStore";
import { AllDestinationsReturnType } from "@/types/returnTypes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";
import { useEffect } from "react";
import { IoMdWarning } from "react-icons/io";

type ListOfDestinationsProps = {
  id?: string;
};

/**
 * Component to display a list of destinations.
 * Fetches destination data from the API and renders it in a grid layout.
 * Supports filtering destinations based on an optional ID prop.
 *
 * @param {ListOfDestinationsProps} props - The component's props.
 * @param {string} [props.id] - Optional ID of a destination to exclude from the list.
 */
const ListOfDestinations = (props: ListOfDestinationsProps) => {
  const { id } = props;
  const { openAddDestinationDialog, allDestinations, setAllDestinations } =
    useHomepageStore();
  const router = useRouter();

  useEffect(() => {
    getListOfDestinations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openAddDestinationDialog]);

  /**
   * Fetches the list of destinations from the API.
   * Filters the destinations if an ID is provided in the props.
   */
  async function getListOfDestinations() {
    try {
      const res = await fetch("/api/all-destinations", { method: "GET" });
      const data = (await res.json()) as AllDestinationsReturnType;

      if (id) {
        const filteredDestinationData = data.filter((d) => d.id != id);
        setAllDestinations(filteredDestinationData);
      } else {
        setAllDestinations(data);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.error("Something went wrong");
    }
  }

  /**
   * Handles clicks on destination items, navigating to the destination's page.
   * @param {string} id - The ID of the destination to navigate to.
   */
  function handleDestinationClick(id: string) {
    router.push(`/${id}`);
    nProgress.start();
  }

  // Conditional rendering based on whether destinations are loaded
  if (allDestinations && allDestinations.length > 0) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 lg:grid-cols-5 mx-auto">
        {allDestinations.map((data) => (
          <div
            className="cursor-pointer hover:scale-105 active:scale-100 transition duration-300"
            onClick={() => handleDestinationClick(data.id)}
            key={data.id}
          >
            <Image
              className="rounded-xl aspect-square object-cover"
              priority
              src={data.image_url}
              alt={data.name || ""}
              width={250}
              height={250}
              blurDataURL={blurDataURL}
            />
            <p className="mt-2 font-semibold font-mono">{data.name}</p>
            <p className="text-sm text-stone-600">
              {data.tags.map((tag) => tag.tag)}
            </p>
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center">
        <div className="flex gap-x-2 items-center">
          <div className="bg-red-100 p-1 rounded-md">
            <IoMdWarning size={25} className="text-red-500" />
          </div>
          <div className="flex flex-col gap-y-1">
            <p className="text-lg font-medium">No data found</p>
            <p className="text-sm text-stone-600">
              Please search with different tags
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default ListOfDestinations;
