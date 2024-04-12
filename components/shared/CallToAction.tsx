import React from "react";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="min-h-[30rem] flex items-center justify-center relative">
      <div className="w-full flex items-center justify-center flex-col gap-6 px-4 h-full bg-slate-200/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-10 z-10">
        <h1 className="text-4xl font-bold text-center">
          Ready to get started?
        </h1>
        <p className="text-xl text-center text-gray-500">
          Sign up now and start generating creative content with Dreamweaver.
        </p>
        <HoverBorderGradient className="p-4">
          <Link href="/generate" className="flex gap-2 items-center">
            Try Dreamweaver
            <ArrowUp size={20} className="rotate-45" />
          </Link>
        </HoverBorderGradient>
      </div>
      <motion.div
        initial={{
          y: "0%",
          x: "0%",
          rotate: 0,
        }}
        animate={{
          y: "100%",
          x: "350%",
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          type: "spring",
        }}
        className="absolute w-[12rem] h-[8rem] inset-0 opacity-50 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 transform scale-50 rounded-full blur-3xl"
      />
      <motion.div
        initial={{
          y: "100%",
          x: "50%",
          rotate: 0,
        }}
        animate={{
          y: "0%",
          x: "0%",
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          type: "spring",
        }}
        className="absolute w-[8rem] h-[12rem] inset-0 opacity-50 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 transform scale-50 rounded-full blur-3xl"
      />
    </section>
  );
};

export default CallToAction;
