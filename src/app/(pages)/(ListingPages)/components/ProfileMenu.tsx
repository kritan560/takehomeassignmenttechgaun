"use client";

import { useHomepageStore } from "@/store/HomepageStore";
import { useEffect, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import ProfileMenuDialog from "./ProfileMenuDialog";

const ProfileMenu = () => {
  const { setOpenProfileMenuDialog, openProfileMenuDialog } =
    useHomepageStore();
  const profileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleCloseDialog() {
      if (openProfileMenuDialog) {
        setOpenProfileMenuDialog(false);
      }
    }

    document.addEventListener("click", (e) => {
      if (!profileMenuRef.current?.contains(e.target as Node)) {
        handleCloseDialog();
      }
    });
  }, [setOpenProfileMenuDialog, openProfileMenuDialog]);

  return (
    <div className="relative">
      {/* profile menu */}
      <div
        ref={profileMenuRef}
        onClick={() => {
          setOpenProfileMenuDialog(!openProfileMenuDialog);
        }}
        className="flex items-center gap-x-3 border border-stone-300 px-4 py-2.5 rounded-full shadow hover:shadow-lg cursor-pointer transition duration-300 "
      >
        <RxHamburgerMenu />
        <FaUserCircle className="text-stone-700"  size={25} />
      </div>

      {openProfileMenuDialog && <ProfileMenuDialog />}
    </div>
  );
};

export default ProfileMenu;
