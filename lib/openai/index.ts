import { OpenAI } from "openai";
import { env } from "process";

export const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const gpt3 = async (prompt: string): Promise<string> => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "You are Dreamweaver, a helpful and cheerful assistant that can help users get what they want.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return response.choices[0].message.content || "Could not generate response.";
};
