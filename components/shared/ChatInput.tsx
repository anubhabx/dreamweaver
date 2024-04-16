"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2, SendIcon } from "lucide-react";
import { gpt3 } from "@/lib/openai";

const ChatInput = ({
  prompt,
  setPrompt,
  chat,
  setChat,
}: {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
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
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = gpt3(prompt);

      setChat((prevChat) => [
        ...prevChat,
        {
          content: prompt,
          isUser: true,
        },
      ]);

      setChat((prevChat) => [
        ...prevChat,
        {
          content: response,
          isUser: false,
        },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setPrompt("");
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center w-full max-w-screen-md py-4 px-4 gap-4">
      <form className="flex items-center w-full gap-4" onSubmit={handleSubmit}>
        <Input
          className="flex-grow h-12"
          placeholder="Write a prompt to generate a dream"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></Input>
        <Button
          type="submit"
          className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none"
          disabled={!prompt || loading}
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-primary-foreground px-6 py-1 text-sm font-medium text-primary backdrop-blur-3xl">
            {loading ? <Loader2 size={32} /> : <SendIcon size={32} />}
          </span>
        </Button>
      </form>
    </div>
  );
};

export default ChatInput;
