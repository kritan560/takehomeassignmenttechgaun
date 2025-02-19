"use client";

import { useHomepageStore } from "@/store/HomepageStore";
import { useEffect, useRef } from "react";
import { TbMapPinPlus } from "react-icons/tb";
import AddDestinationDialog from "./AddDestinationDialog";

/**
 * A component that renders a button to open a dialog for adding a new destination.
 * Manages the dialog's open/close state using a Zustand store and handles clicks
 * outside the button/dialog to close the dialog.
 */
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

    /**
     * Handles the click event when add destination is clicked
     * @param e MouseEvent
     * @returns void
     */
    function handleClickEvent(e: MouseEvent) {
      if (addDestinationDialogRef.current?.contains(e.target as Node)) {
        return;
      } else if (!addDestinationRef.current?.contains(e.target as Node)) {
        handleCloseAddDestinationDialog();
      }
    }

    document.addEventListener("click", handleClickEvent);

    return () => {
      document.removeEventListener("click", handleClickEvent); // Clean up the event listener
    };
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
