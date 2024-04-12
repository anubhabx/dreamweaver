import React from "react";

const Chat = ({
  chat,
  setChat,
}: {
  chat: {
    text: string;
    isUser: boolean;
  }[];
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
    <section className="w-full h-full flex flex-col gap-4">
      <div className=""></div>
    </section>
  );
};

export default Chat;
