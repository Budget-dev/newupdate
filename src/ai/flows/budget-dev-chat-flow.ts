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
    const systemPrompt = `You are the AI assistant for BudgetDev, a software solutions provider in Vizianagaram, AP.
    
    CORE GOALS:
    1. Ask the user: "Are you planning for a website or a mobile app?"
    2. Collect their contact information (Email or Phone Number).
    3. Explain that BudgetDev (Venkatesh & Shankar) provides affordable, high-performance software.
    
    IDENTITY:
    - Lead Developer: Venkatesh Choppa
    - Backend Specialist: Shankar Bojank
    - Services: iOS/Android Apps, Custom Software, Technical SEO.
    
    BEHAVIOR:
    - Be professional and encouraging.
    - If the user provides an email or phone, acknowledge it and say a team member will reach out with a technical draft.
    - Keep responses concise.`;

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

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;

      return { response: aiResponse };
    } catch (error) {
      console.error("OpenRouter Error:", error);
      return { response: "I'm having a bit of trouble connecting. Please reach out to Venkatesh at +91 8466006486 for immediate assistance." };
    }
  }
);
