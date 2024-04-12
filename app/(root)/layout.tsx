import Navbar from "@/components/shared/Navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col min-h-full">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
