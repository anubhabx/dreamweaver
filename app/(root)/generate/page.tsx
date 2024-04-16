"use client";

import Chat from "@/components/shared/Chat";
import ChatInput from "@/components/shared/ChatInput";
import InitialScreen from "@/components/shared/InitialScreen";
import { useState } from "react";

const GeneratePage = () => {
  const [chat, setChat] = useState<
    {
      content: string | Promise<string>;
      isUser: boolean;
    }[]
  >([]);

  const [prompt, setPrompt] = useState<string>("");

  return (
    <div className="flex flex-col w-full h-[83vh] my-auto shadow-lg items-center justify-center border rounded-md">
      <>
        {chat?.length === 0 && <InitialScreen setPrompt={setPrompt} />}
        {chat && chat?.length > 0 && <Chat chat={chat} setChat={setChat} />}
        <ChatInput
          prompt={prompt}
          setPrompt={setPrompt}
          chat={chat}
          setChat={setChat}
        />
      </>
    </div>
  );
};

export default GeneratePage;
