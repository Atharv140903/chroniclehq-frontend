// src/services/aiService.ts
const API_URL = "https://api.openai.com/v1/chat/completions";

export type ContinueAIOptions = {
  text: string;
  tone: string;
};

export async function continueWritingWithAI(
  opts: ContinueAIOptions
): Promise<string> {
  const { text, tone } = opts;

  const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error("Missing OPENAI_API_KEY");
  }

  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are an AI writing assistant. Continue the text in a ${tone.toLowerCase()} tone. Match the writing style and maintain consistency with the existing content. Keep your response reasonably short and natural.`,
        },
        {
          role: "user",
          content: `Continue writing from where this text ends. Do NOT repeat what's already written:\n\n${text}`,
        },
      ],
    }),
  });

  if (!res.ok) {
    console.error("OpenAI error:", await res.text());
    throw new Error("Failed to generate continuation");
  }

  const data = await res.json();
  const content: string | undefined =
    data.choices?.[0]?.message?.content ?? undefined;

  if (!content) {
    throw new Error("Empty AI response");
  }

  return content.trim();
}
