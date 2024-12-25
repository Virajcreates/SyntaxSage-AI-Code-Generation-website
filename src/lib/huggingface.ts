import { HfInference } from "@huggingface/inference";

const hf = new HfInference(import.meta.env.VITE_HF_TOKEN);

export const generateCode = async (prompt: string) => {
  let output = "";
  
  const stream = await hf.chatCompletionStream({
    model: "Qwen/Qwen2.5-Coder-32B-Instruct",
    messages: [
      { role: "user", content: prompt },
    ],
    temperature: 0.5,
    max_tokens: 3000,
    top_p: 0.7
  });

  for await (const chunk of stream) {
    if (chunk.choices && chunk.choices.length > 0) {
      const newContent = chunk.choices[0].delta.content;
      output += newContent;
    }
  }

  return output;
};