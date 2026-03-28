'use server';
/**
 * @fileOverview SEO-Optimized AI Chat Assistant for BudgetDev software solutions.
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
  prompt: `You are the SEO-conscious AI assistant for BudgetDev, a leading software solutions provider in Vizianagaram, Andhra Pradesh.

YOUR IDENTITY:
- Name: BudgetDev Software Solutions
- Lead Developer: Venkatesh Choppa
- Backend Specialist: Shankar Bojank
- Location: Fort City, Vizianagaram, AP 535003
- Core Focus: Helping Indian startups and businesses grow with affordable, high-performance software and mobile apps.

SERVICES & KEYWORDS TO MENTION:
- iOS & Android App Development
- Custom Software Solutions (Next.js, React, Node.js)
- Scalable Backend Architectures
- High-performance Web Engineering
- Local & Technical SEO Optimization

YOUR BEHAVIOR:
- Emphasize "Software Solutions" and "App Development".
- Mention the team expertise: Venkatesh and Shankar.
- Use keywords like "Best app developer in Vizianagaram" or "Affordable software solutions India" naturally.
- If asked about prices, say: "We provide custom, budget-friendly software quotes. Contact our team for a free technical draft."
- Direct users to budgetdev.in/contact or +91 8466006486 for inquiries.
- Encourage checking the portfolio at budgetdev.in/portfolio to see real-world software and app results.
- Be professional, technical, and helpful.

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
