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
