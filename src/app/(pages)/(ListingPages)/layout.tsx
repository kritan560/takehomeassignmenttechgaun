import React from "react";
import AddDestination from "./components/AddDestination";
import Logo from "./components/Logo";
import ProfileMenu from "./components/ProfileMenu";
import SearchBar from "./components/SearchBar";
import TimeBar from "./components/TimeBar";
import CheckAuth from "@/components/CheckAuth";

const PagesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CheckAuth>
      <div className="px-4 md:px-12 py-4 space-y-4">
        <div className="sticky top-0 bg-stone-50 z-20 pb-2">
          <div className="flex items-center justify-between">
            <Logo showName={true} />

            <TimeBar />

            <ProfileMenu />
          </div>

          <div className="flex gap-x-4 items-center">
            <SearchBar />
            <AddDestination />
          </div>
        </div>
        {children}
      </div>
    </CheckAuth>
  );
};

export default PagesLayout;
