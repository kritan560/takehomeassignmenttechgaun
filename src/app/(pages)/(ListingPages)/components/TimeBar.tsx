"use client";

import { useHomepageStore } from "@/store/HomepageStore";
import { useEffect, useState } from "react";

const TimeBar = () => {
  const { setFocusOnInput } = useHomepageStore();
  const [time, setTime] = useState(new Date());
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (isHydrated)
    return (
      <div title="Current Time" className="cursor-pointer" onClick={() => setFocusOnInput(true)}>
        <p className="font-semibold text-lg text-stone-600 shadow transition duration-300 hover:shadow-lg px-4 font-mono">
          {`${time.getHours()} : ${time.getMinutes()} : ${
            time.getSeconds() > 9 ? time.getSeconds() : "0" + time.getSeconds()
          }`}
        </p>
      </div>
    );
};

export default TimeBar;
