import React from "react";
import { motion } from "framer-motion";
import { PinContainer } from "../ui/3d-pin";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-16">
      <motion.div
        whileInView={{
          transition: { duration: 1, ease: "easeIn", staggerChildren: 0.2 },
        }}
        className="flex flex-col gap-12 items-center justify-center w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
          className="font-semibold text-3xl"
        >
          How It Works
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeIn", delay: 0.4 }}
          className="flex flex-col md:flex-row gap-12 items-center justify-center w-full"
        >
          <PinContainer title="Craft Your Prompt">
            <div className="flex justify-between basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <div className="flex flex-col gap-2">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-950 dark:text-slate-300">
                  Craft Your Prompt
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Describe what you want to create using clear and concise
                    language. Need a catchy product description? A captivating
                    poem? Or a photorealistic image of a cat astronaut? Our
                    intuitive interface allows you to easily define your desired
                    outcome.
                  </span>
                </div>
              </div>
              <div className="flex h-16 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
            </div>
          </PinContainer>
          <PinContainer title="Let AI Do the Magic">
            <div className="flex justify-between basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <div className="flex flex-col gap-2">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold text-slate-950 dark:text-slate-300 text-base">
                  Let AI Do the Magic
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Once you&apos;ve defined your prompt, hit
                    &quot;Generate&quot; and watch our platform work its magic.
                    OpenAI&apos;s powerful algorithms will analyze your request
                    and generate unique and creative text formats or stunning
                    images that match your vision.
                  </span>
                </div>
              </div>
              <div className="flex h-16 w-full rounded-lg mt-4 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500" />
            </div>
          </PinContainer>
          <PinContainer title="Refine & Download">
            <div className="flex basis-full justify-between flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
              <div className="flex gap-2 flex-col">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-950 dark:text-slate-300">
                  Refine &amp; Download
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Review the generated content. We allow you to choose from
                    multiple options or refine your prompt for further
                    iterations. Once you&apos;re satisfied, simply download your
                    text or image file for immediate use.
                  </span>
                </div>
              </div>
              <div className="flex h-16 w-full rounded-lg mt-4 bg-gradient-to-br from-teal-500 via-green-500 to-emerald-500" />
            </div>
          </PinContainer>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HowItWorks;
