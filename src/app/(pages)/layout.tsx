import React from "react";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-stone-50">
      <NextTopLoader color="rgb(14 165 233)" showSpinner={false} height={4} />
      <Toaster />
      {children}
    </div>
  );
};

export default layout;
