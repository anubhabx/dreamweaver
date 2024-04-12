import { OpenAI } from "openai";

export const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const gpt3 = async (prompt: string) => {
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

  return response.choices[0].message.content;
};
