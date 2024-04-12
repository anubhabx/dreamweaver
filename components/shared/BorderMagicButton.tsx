import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const BorderMagicButton = ({
  title,
  route,
}: {
  title: string;
  route: string;
}) => {
  return (
    <Link href={route}>
      <Button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-50 dark:bg-slate-950 px-6 py-1 text-sm font-medium text-slate-950 dark:text-white backdrop-blur-3xl">
          {title}
        </span>
      </Button>
    </Link>
  );
};

export default BorderMagicButton;
