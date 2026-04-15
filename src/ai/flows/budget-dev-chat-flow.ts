'use server';
/**
 * @fileOverview SEO-Optimized AI Chat Assistant for BudgetDev using OpenRouter.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const OPENROUTER_API_KEY = "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";

const BudgetDevChatInputSchema = z.object({
  message: z.string().describe('The user message or question.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.string()
  })).optional().describe('Previous conversation history.'),
});
export type BudgetDevChatInput = z.infer<typeof BudgetDevChatInputSchema>;

const BudgetDevChatOutputSchema = z.object({
  response: z.string().describe('The AI generated response.'),
});
export type BudgetDevChatOutput = z.infer<typeof BudgetDevChatOutputSchema>;

export async function budgetDevChat(input: BudgetDevChatInput): Promise<BudgetDevChatOutput> {
  return budgetDevChatFlow(input);
}

const budgetDevChatFlow = ai.defineFlow(
  {
    name: 'budgetDevChatFlow',
    inputSchema: BudgetDevChatInputSchema,
    outputSchema: BudgetDevChatOutputSchema,
  },
  async (input) => {
    const systemPrompt = `You are the friendly AI assistant for BudgetDev, a specialized software solutions provider in Vizianagaram, AP.
    
    YOUR MAIN MISSION:
    1. Be exceptionally friendly and professional.
    2. Ask the user: "Are you planning for a website or a mobile app?"
    3. If they answer, ask for their Email or Phone Number so Venkatesh or Shankar can send them a free technical draft and roadmap.
    4. Mention that BudgetDev provides high-performance, affordable iOS/Android Apps and Custom Software.
    
    IDENTITY:
    - Founder & Lead Developer: Venkatesh Choppa
    - Backend Specialist: Shankar Bojank
    
    GUIDELINES:
    - Keep responses concise and focused on the user's project needs.
    - If they provide contact info, acknowledge it warmly and say the team will reach out shortly.`;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...(input.history || []).map(h => ({ 
        role: h.role === 'model' ? 'assistant' : 'user', 
        content: h.content 
      })),
      { role: 'user', content: input.message }
    ];

    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://budgetdev.in",
          "X-Title": "BudgetDev Assistant"
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-001",
          messages: messages,
        })
      });

      if (!response.ok) {
        throw new Error(`OpenRouter API error: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0]?.message?.content || "I'm ready to help you plan your next project!";

      return { response: aiResponse };
    } catch (error) {
      console.error("OpenRouter Error:", error);
      return { response: "I'm having a small technical hiccup. Please reach out to our team directly at +91 8466006486 or email venkateshchop14@gmail.com!" };
    }
  }
);
