import React from "react";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

const Hero = () => {
  return (
    <div className="h-[40rem] relative w-ful flex flex-col space-y-10 px-16 items-center justify-center overflow-hidden rounded-md">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "circInOut",
          duration: 1,
        }}
        className="max-w-screen-md font-bold text-center z-10 relative"
      >
        <motion.h1 className="leading-loose text-5xl md:text-7xl tracking-tight">
          Dreamweaver
        </motion.h1>

        <div className="absolute inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          ease: "circInOut",
          duration: 0.5,
        }}
        className="max-w-screen-md font-bold text-center z-10 relative"
      >
        <motion.p className="leading-loose text-md md:text-xl font-normal tracking-wide">
          Generate text and images with ease and style.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          ease: "circInOut",
          duration: 0.5,
        }}
        className="max-w-screen-md font-bold text-center z-10 relative"
      >
        <HoverBorderGradient className="p-4">
          <Link href="/generate" className="flex gap-2 items-center">
            Try Dreamweaver
            <ArrowUp size={20} className="rotate-45" />
          </Link>
        </HoverBorderGradient>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2,
          ease: "circInOut",
          duration: 0.5,
        }}
        className="max-w-screen-md font-bold text-center z-10 relative"
      >
        <motion.p className="leading-loose text-sm text-gray-500 font-normal tracking-wide">
          Dreamweaver is built on top of OpenAI&apos;s API.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Hero;
