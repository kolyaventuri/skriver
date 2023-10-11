import OpenAI from 'openai';
import { BASE_PROMPT } from "./constants/prompt"

export const generate = async (input: string) => {
  const fullPrompt = `${BASE_PROMPT}\n\n"${input}"`;

  const openai = new OpenAI();

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: fullPrompt }],
    model: 'gpt-3.5-turbo',
  });

  const message = chatCompletion.choices[0].message.content;
  return message;
};
