import { handleError } from "@/lib/utils";
import { connectToDatabase } from "../connect.database";
import Chat from "../models/chat.model";

export const createChat = async (userId: string) => {
  try {
    connectToDatabase();

    const chat = await Chat.create({ userId });

    if (!chat) {
      throw new Error("Chat creation failed");
    }

    return JSON.parse(JSON.stringify(chat));
  } catch (error) {
    handleError(error);
  }
};
