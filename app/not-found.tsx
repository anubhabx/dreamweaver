import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-[80vh] w-full flex flex-col space-y-6 items-center justify-center">
      <div className="flex flex-col items-center space-y-6 text-center">
        <h2 className="scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight first:mt-0 lg:text-5xl">
          404
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6 max-w-sm">
          The page you&apos;re looking for does not exist. Please check the URL
          or go back to the homepage.
        </p>
      </div>
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <Link href="/">
          <span className="text-sm p-4">Go back home</span>
        </Link>
      </HoverBorderGradient>
    </div>
  );
};

export default NotFound;
