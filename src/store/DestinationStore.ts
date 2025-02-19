import { create } from "zustand";

interface DestinationStore {
  destination: string;
  destinationDescription: string;
  destinationImage: string;
  destinationTag: string;

  setDestination: (value: string) => void;
  setDestinationDescription: (value: string) => void;
  setDestinationImage: (value: string) => void;
  setDestinationTag: (value: string) => void;
}

export const useDestinationStore = create<DestinationStore>()((set) => ({
  destination: "",
  destinationDescription: "",
  destinationImage: "",
  destinationTag: "",

  setDestination: (value: string) => set({ destination: value }),
  setDestinationDescription: (value: string) =>
    set({ destinationDescription: value }),
  setDestinationImage: (value: string) => set({ destinationImage: value }),
  setDestinationTag: (value: string) => set({ destinationTag: value }),
}));
