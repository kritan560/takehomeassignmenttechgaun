"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CheckAuth = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (isHydrated) {
    const isAuth = localStorage.getItem("isAuth");

    if (!isAuth) {
      router.push("/sign-in");
    } else {
      return <>{children}</>;
    }
  }
};

export default CheckAuth;
