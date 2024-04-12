import React from "react";
import { motion } from "framer-motion";
import { Meteors } from "../ui/meteors";
import { ArrowBigRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const WhatIsDreamweaver = () => {
  return (
    <motion.section
      transition={{ duration: 0.6, delayChildren: 0.2, ease: "easeIn" }}
      className="min-h-screen flex flex-col items-center gap-16 justify-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeIn" }}
        className="text-4xl font-bold mb-8 tracking-wide text-center"
      >
        What is{" "}
        <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-shimmer">
          Dreamweaver?
        </span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeIn" }}
        viewport={{ once: true }}
        className="flex gap-12 items-center w-full justify-center"
      >
        <div className="">
          <div className="h-[24rem] w-full relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-white dark:bg-slate-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <ArrowBigRight size={20} className="rotate-45" />
              </div>

              <h1 className="font-bold text-xl mb-4 relative z-50">
                Built with the OpenAI API
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                Dreamweaver is a platform that leverages the OpenAI API to
                generate creative text and images based on your prompts.
              </p>

              <Button className="border px-4 py-1 rounded-lg bg-white dark:bg-slate-950/50 border-gray-500 dark:text-gray-300 text-gray-800">
                <Link href={"https://openai.com/"} target="_blank">
                  Explore OpenAI
                </Link>
              </Button>

              <Meteors number={20} />
            </div>
          </div>
        </div>
        <div className="">
          <div className="h-[24rem] w-full relative max-w-xs">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-white dark:bg-slate-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
              <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                <ArrowBigRight size={20} className="rotate-45" />
              </div>

              <h1 className="font-bold text-xl mb-4 relative z-50">
                Built for Creatives
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                Dreamweaver is designed for creatives who want to generate
                unique and creative content using AI.
              </p>

              <Button className="border px-4 py-1 rounded-lg bg-white dark:bg-slate-950/50 border-gray-500 dark:text-gray-300 text-gray-800">
                <Link href={"/generate"}>Try Now</Link>
              </Button>

              {/* Meaty part - Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default WhatIsDreamweaver;
