
'use server';
/**
 * @fileOverview SEO-Optimized AI Chat Assistant for BudgetDev agency.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

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

const budgetDevPrompt = ai.definePrompt({
  name: 'budgetDevPrompt',
  input: {schema: BudgetDevChatInputSchema},
  output: {schema: BudgetDevChatOutputSchema},
  prompt: `You are the SEO-conscious AI assistant for BudgetDev, a top-rated web design agency in Vizianagaram, Andhra Pradesh.

YOUR IDENTITY:
- Name: BudgetDev
- Lead Developer: Venkatesh Choppa
- Location: Fort City, Vizianagaram, AP 535003
- Core Focus: Helping Indian startups and small businesses grow with affordable, high-performance websites.

SERVICES & KEYWORDS TO MENTION:
- Affordable Web Design (Andhra Pradesh focus)
- High-performance Web Development (Next.js, React)
- Local SEO Optimization (ranking #1 on Google in AP cities)
- Small Business Digital Marketing (Meta Ads, SEO)

YOUR BEHAVIOR:
- Emphasize "Affordable" and "High Performance".
- Use keywords like "Best website designer in Vizianagaram" or "Budget web agency India" naturally.
- If asked about prices, say: "We provide custom, budget-friendly quotes tailored to your business goals. Contact Venkatesh for a free draft."
- Direct users to budgetdev.in/contact or +91 8466006486 for inquiries.
- Encourage checking the portfolio at budgetdev.in/portfolio to see real-world results in India.
- Be professional, expert-level, and helpful.

Conversation History:
{{#each history}}
{{role}}: {{{content}}}
{{/each}}

User: {{{message}}}
Assistant:`,
});

const budgetDevChatFlow = ai.defineFlow(
  {
    name: 'budgetDevChatFlow',
    inputSchema: BudgetDevChatInputSchema,
    outputSchema: BudgetDevChatOutputSchema,
  },
  async (input) => {
    const {output} = await budgetDevPrompt(input);
    if (!output) throw new Error('No response generated');
    return output;
  }
);
