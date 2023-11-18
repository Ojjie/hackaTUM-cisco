import OpenAI from "openai";
import { OPENAI_KEY } from "../secrets";

export const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export async function gatherLulu() {
  const gatherAssistant = await openai.beta.assistants.retrieve(
    "asst_c0Ob7JvWfeqpwfFfUqub7Wjw"
  );

  const thread = await openai.beta.threads.create();

  const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: gatherAssistant.id,
    //instructions: "Say Hi",
  });

  return thread;
}

export async function sendMessage(thread_id: any, message: string) {
  const messageObj = await openai.beta.threads.messages.create(thread_id, {
    role: "user",
    content: message,
  });
}

export async function recieveMessage(thread_id: any) {
  const messages = await openai.beta.threads.messages.list(thread_id);
  return messages;
}
