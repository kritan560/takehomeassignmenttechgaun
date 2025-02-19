"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

/**
 * A higher-order component (HOC) that checks for authentication before rendering its children.
 * If the user is not authenticated (i.e., `isAuth` is not present in localStorage),
 * it redirects them to the "/sign-in" page.  This component uses client-side navigation.
 *
 * @param {object} props - The component's props.
 * @param {React.ReactNode} props.children - The children to render if the user is authenticated.
 *
 * @example
 * <CheckAuth>
 *   <Dashboard />   // This will only be rendered if the user is authenticated
 * </CheckAuth>
 */
const CheckAuth = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false);

  /**
   * Sets the `isHydrated` state to true after the component mounts on the client-side.
   * This is necessary because we're using localStorage, which is only available in the browser.
   */
  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (isHydrated) {
    const isAuth = localStorage.getItem("isAuth");

    if (!isAuth) {
      router.push("/sign-in"); // Redirect to sign-in page if not authenticated
      return null; // Important: Return null to prevent rendering anything before the redirect
    } else {
      return <>{children}</>; // Render children if authenticated
    }
  }

  // Important: Return null during hydration to prevent server-side rendering mismatch.
  return null;
};

export default CheckAuth;
