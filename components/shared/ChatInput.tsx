import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SendIcon } from "lucide-react";

const ChatInput = ({
  prompt,
  setPrompt,
  setChat,
}: {
  prompt: string;
  setPrompt: React.Dispatch<React.SetStateAction<string>>;
  setChat: React.Dispatch<
    React.SetStateAction<
      {
        text: string;
        isUser: boolean;
      }[]
    >
  >;
}) => {
  return (
    <div className="flex items-center w-full max-w-screen-md py-4 gap-4">
      <Input
        className="flex-grow h-12"
        placeholder="Write a prompt to generate a dream"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></Input>
      <Button className="relative inline-flex h-12 overflow-hidden rounded-md p-[1px] focus:outline-none ">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-primary-foreground px-6 py-1 text-sm font-medium text-primary backdrop-blur-3xl">
          <SendIcon size={32} />
        </span>
      </Button>
    </div>
  );
};

export default ChatInput;
