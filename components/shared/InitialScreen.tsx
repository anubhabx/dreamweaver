"use client";

import React, { useEffect } from "react";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { Card, CardFooter, CardHeader } from "../ui/card";

import {
  IconQuestionMark,
  IconCommand,
  IconMessage,
} from "@tabler/icons-react";
import { Meteors } from "../ui/meteors";
import { animate, motion, stagger, useAnimate } from "framer-motion";

const InitialScreen = ({
  setPrompt,
}: {
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const wordsArray = [
    {
      text: "Welcome",
    },
    {
      text: "to",
    },
    {
      text: "Dreamweaver",
      className: "text-blue-500 dark:text-blue-300 font-bold dark:font-bold",
    },
  ];

  const placeholderPrompts = [
    { prompt: "Tell me a fun fact!", type: "Command" },
    {
      prompt:
        "What would have the Earth been like if the Dinosaurs never dissapeared?",
      type: "Question",
    },
    {
      prompt:
        "Let's write a creative story together. Give me a starting sentence!",
      type: "Command",
    },
  ];

  useEffect(() => {
    animate(
      ".card",
      {
        opacity: [0, 1],
      },
      {
        duration: 0.5,
        delay: stagger(0.2, { startDelay: 1 }),
        ease: "easeInOut",
      }
    );
  }, []);

  return (
    <div className="flex flex-col h-full w-full gap-8 items-center">
      <div className="flex flex-col gap-8 items-center justify-center w-full h-full">
        <TypewriterEffectSmooth words={wordsArray} />
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-md text-center text-slate-500"
        >
          Enter a prompt to generate a dream
        </motion.p>
        <motion.div className="flex gap-12 flex-col md:flex-row max-md:overflow-y-scroll max-h-72 md:h-full items-center mx-auto">
          {placeholderPrompts.map((prompt, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              className="card"
              key={index}
            >
              <Card
                onClick={() => setPrompt(prompt.prompt)}
                className="w-64 h-[15rem] relative overflow-hidden cursor-pointer bg-primary-foreground flex flex-col justify-between items-center"
              >
                <CardHeader className="text-center text-primary">
                  {prompt.prompt}
                </CardHeader>
                <CardFooter className="self-end text-primary">
                  <div className="bg-primary/15 p-2 rounded-full">
                    {prompt.type === "Question" ? (
                      <IconQuestionMark
                        size={24}
                        strokeWidth={1.5}
                        color="currentColor"
                      />
                    ) : prompt.type === "Command" ? (
                      <IconCommand
                        size={24}
                        strokeWidth={1.5}
                        color="currentColor"
                      />
                    ) : (
                      <IconMessage
                        size={24}
                        strokeWidth={1.5}
                        color="currentColor"
                      />
                    )}
                  </div>
                </CardFooter>
                <Meteors number={15} />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InitialScreen;
