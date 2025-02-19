"use client";

import TravelNepal from '@/app/Images/TravelNepal.webp';
import Image from "next/image";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";

type LogoProps = {
  showName?: boolean;
};

const Logo = (props: LogoProps) => {
  const { showName = true } = props;
  const router = useRouter();

  return (
    <div
      className="flex items-center gap-x-4 cursor-pointer"
      onClick={() => {
        router.push("/");
        nProgress.start();
      }}
    >
      <Image
        src={TravelNepal}
        alt="logo"
        width={40}
        height={40}
        className="rounded-xl"
      />
      {/* heading */}
      <h2 className="font-bold text-2xl text-sky-500 hidden md:block">
        {showName ? "Travel Nepal" : ""}
      </h2>
    </div>
  );
};

export default Logo;
