"use client";

import React, { useEffect } from "react";
import ChatCard from "./ChatCard";
import { motion, animate, stagger, delay } from "framer-motion";

const Chat = ({
  chat,
  setChat,
}: {
  chat: {
    content: string | Promise<string>;
    isUser: boolean;
  }[];
  setChat: React.Dispatch<
    React.SetStateAction<
      {
        content: string | Promise<string>;
        isUser: boolean;
      }[]
    >
  >;
}) => {
  useEffect(() => {
    animate(
      ".cards" as any,
      { scrollTop: 999999, duration: 0.5, opacity: 1, delay: stagger(0.2) },
      { type: "tween", ease: "easeInOut" }
    );
  }, [chat]);

  return (
    <section className="w-full max-h-[72vh] flex py-8">
      <motion.div className="cards w-full h-full flex flex-col gap-4 overflow-y-scroll">
        {chat.map((message, index) => (
          <ChatCard key={index} message={message} />
        ))}
      </motion.div>
    </section>
  );
};

export default Chat;
