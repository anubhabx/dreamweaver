"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <Button
        variant={"outline"}
        size={"icon"}
        className="rounded-full flex items-center justify-center dark:bg-black bg-white dark:text-white text-black"
      >
        <MoonIcon
          className="hidden dark:inline"
          size={18}
          onClick={() => setTheme("light")}
        />
        <SunIcon
          className="dark:hidden"
          size={18}
          onClick={() => setTheme("dark")}
        />
      </Button>
    </div>
  );
};

export default ThemeToggle;
