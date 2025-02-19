"use client";

import { useHomepageStore } from "@/store/HomepageStore";
import { useEffect, useRef } from "react";
import { TbMapPinPlus } from "react-icons/tb";
import AddDestinationDialog from "./AddDestinationDialog";

const AddDestination = () => {
  const { setOpenAddDestinationDialog, openAddDestinationDialog } =
    useHomepageStore();
  const addDestinationRef = useRef<HTMLDivElement>(null);
  const addDestinationDialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleCloseAddDestinationDialog() {
      if (openAddDestinationDialog) {
        setOpenAddDestinationDialog(false);
      }
    }

    document.addEventListener("click", (e) => {
      if (addDestinationDialogRef.current?.contains(e.target as Node)) {
        return;
      } else if (!addDestinationRef.current?.contains(e.target as Node)) {
        handleCloseAddDestinationDialog();
      }
    });
  }, [openAddDestinationDialog, setOpenAddDestinationDialog]);

  return (
    <div className="relative">
      <div
        ref={addDestinationRef}
        onClick={() => setOpenAddDestinationDialog(!openAddDestinationDialog)}
        title="Add Destination"
        className="cursor-pointer h-fit w-fit bg-sky-100 p-2 rounded-full"
      >
        <TbMapPinPlus
          className="text-sky-500 hover:text-sky-600/80 transition"
          size={45}
        />
      </div>

      <div ref={addDestinationDialogRef}>
        <AddDestinationDialog />
      </div>
    </div>
  );
};

export default AddDestination;
