"use client";

import { useHomepageStore } from "@/store/HomepageStore";
import { AllDestinationsReturnType } from "@/types/returnTypes";
import nProgress from "nprogress";
import { KeyboardEvent, useEffect, useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import SuggestedDestinationDialog from "./SuggestedDestinationDialog";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {
    focusOnInput,
    setOpenDestinationDialog,
    openDestinationDialog,
    setAllDestinations,
  } = useHomepageStore();
  const destinationRef = useRef<HTMLDivElement>(null);
  const [tags, setTags] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, [focusOnInput]);

  useEffect(() => {
    /**
     * A function that handles the open and close dialog when search destination is clicked
     */
    function handleCloseOpenedDestination() {
      if (openDestinationDialog) {
        setOpenDestinationDialog(false);
      }
    }

    /* 
    An event listner that listen an event for every click and if it contains the same element as destinationRef current element then proceed to close the dialog
     */
    document.addEventListener("click", (e) => {
      if (!destinationRef.current?.contains(e.target as Node)) {
        handleCloseOpenedDestination();
      }
    });
  }, [setOpenDestinationDialog, openDestinationDialog]);

  async function handleTagSearch() {
    try {
      nProgress.start();
      const res = await fetch(`/api/filter/${tags}`, { method: "GET" });
      const data = await res.json();

      if (res.ok) {
        nProgress.done();
      }
      setAllDestinations(data);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.error("Something went wrong");
    }
  }

  async function handleClearTag() {
    try {
      nProgress.start();
      const res = await fetch(`/api/filter`, { method: "GET" });
      const data = await res.json();
      if (res.ok) {
        nProgress.done();
      }
      setAllDestinations(data);
      setTags("");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.error("Something went wrong");
    }
  }

  async function handleEnterKeyUp(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key == "Enter") {
      const res = await fetch(`/api/filter/${tags}`, { method: "GET" });
      const data = (await res.json()) as AllDestinationsReturnType;
      setAllDestinations(data);
    }
  }

  return (
    <div className="w-[80%] m-auto relative mt-4">
      <div className="border border-stone-300 shadow-lg rounded-full flex justify-between items-center">
        <div
          ref={destinationRef}
          className="hidden md:block py-4 px-8 hover:bg-stone-200 active:bg-stone-100 rounded-full transition duration-300 cursor-pointer"
          onClick={() => setOpenDestinationDialog(!openDestinationDialog)}
        >
          {/* where */}
          <p className="text-sm font-medium text-stone-600">Where</p>
          {/* sub paragraph */}
          <p className="text-sm font-medium text-stone-400 whitespace-nowrap">
            Search Destination
          </p>
        </div>

        <div className="mx-auto flex flex-col px-9 py-1 hover:bg-stone-200 cursor-pointer transition rounded-full w-full">
          <p className="font-light text-sm text-stone-400">Enter Tags</p>
          <div className="flex items-center transition duration-300 rounded-full gap-x-2">
            <input
              onKeyUp={handleEnterKeyUp}
              onChange={(e) => setTags(e.target.value)}
              value={tags}
              ref={inputRef}
              className="hover:cursor-pointer focus:outline-none focus:ring-0 px-4 py-2 text-stone-500 font-medium border border-stone-300 rounded-md w-full"
              type="text"
              placeholder="Example Tag1, Tag2"
            />
            {tags.length > 0 && (
              <IoIosCloseCircle
                size={23}
                className="text-rose-500"
                title="clear tags"
                onClick={() => handleClearTag()}
              />
            )}
          </div>
        </div>

        {/* search icon */}
        <div className="px-2 py-1 w-32 md:flex justify-end hidden">
          <div
            onClick={handleTagSearch}
            className={
              "bg-sky-500 h-14 flex justify-center items-center hover:bg-sky-500/80 cursor-pointer transition-all duration-300 rounded-full hover:w-32 w-14"
            }
          >
            <IoSearch size={26} className="text-stone-100" />
          </div>
        </div>
      </div>

      <SuggestedDestinationDialog />
    </div>
  );
};

export default SearchBar;
