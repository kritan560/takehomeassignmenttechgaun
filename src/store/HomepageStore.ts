import { AllDestinationsReturnType } from "@/types/returnTypes";
import { create } from "zustand";

interface HomepageStore {
  focusOnInput: boolean;
  setFocusOnInput: (value: boolean) => void;

  openDestinationDialog: boolean;
  setOpenDestinationDialog: (value: boolean) => void;

  openProfileMenuDialog: boolean;
  setOpenProfileMenuDialog: (value: boolean) => void;

  openAddDestinationDialog: boolean;
  setOpenAddDestinationDialog: (value: boolean) => void;

  allDestinations : AllDestinationsReturnType;
  setAllDestinations : (value : AllDestinationsReturnType) => void;
}

/**
 * Zustand store for managing homepage-related state.
 * This store holds various boolean flags to control the visibility of UI elements,
 * such as dialogs and input focus, as well as the list of destinations.
 *
 * @example
 * const { focusOnInput, setFocusOnInput, openDestinationDialog, setOpenDestinationDialog } = useHomepageStore();
 * setFocusOnInput(true); // Focus the search input
 * setOpenDestinationDialog(true); // Open the destination details dialog
 */
export const useHomepageStore = create<HomepageStore>()((set) => ({
  focusOnInput: false,
  setFocusOnInput: (value: boolean) => set({ focusOnInput: value }),

  openDestinationDialog: false,
  setOpenDestinationDialog: (value: boolean) =>
    set({ openDestinationDialog: value }),

  openProfileMenuDialog: false,
  setOpenProfileMenuDialog: (value: boolean) =>
    set({ openProfileMenuDialog: value }),

  openAddDestinationDialog: false,
  setOpenAddDestinationDialog: (value: boolean) =>
    set({ openAddDestinationDialog: value }),

  allDestinations : [],
  setAllDestinations : (value : AllDestinationsReturnType) => set({allDestinations : value})
}));
