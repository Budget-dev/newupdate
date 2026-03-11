'use server';
/**
 * @fileOverview AI Chat Assistant for BudgetDev agency.
 *
 * - budgetDevChat - A function that handles user inquiries about the agency.
 * - BudgetDevChatInput - The input type for the budgetDevChat function.
 * - BudgetDevChatOutput - The return type for the budgetDevChat function.
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
  prompt: `You are the AI assistant for BudgetDev, a web design and development agency based in Vizianagaram, Andhra Pradesh, India.

ABOUT THE AGENCY:
- Name: BudgetDev
- Founder & Developer: Venkatesh Choppa (Frontend Developer)
- Location: Fort City, Vizianagaram, Andhra Pradesh 535003
- Website: budgetdev.in
- Phone: +91 8466006486
- GitHub: github.com/budgetdev
- LinkedIn: linkedin.com/in/venkateshchoppa
- Google: Search "Venkatesh Choppa Frontend Developer"

SERVICES:
- Web Design & UI/UX (conversion-optimized designs)
- Web Development (Next.js, React, TypeScript)
- SEO Optimization (Google rankings)
- AI Integration (ChatGPT, Automation, Bots)
- Custom Software Development
- E-commerce Development

PRICING:
- Corporate Plan: ₹3,500 one-time | from ₹150/month
- Enterprise Plan: ₹13,500 one-time | from ₹500/month
- Ultra Platinum Plan: ₹25,000 one-time | from ₹1,500/month

STATS:
- 92+ projects completed
- 100/100 PageSpeed Score
- 4.9 Google Rating | 16 Reviews
- 7.5M+ users reached across client websites
- 24h average response time

YOUR BEHAVIOR:
- Answer questions about BudgetDev's services, pricing, and portfolio.
- If someone asks to contact or get a quote, give them: budgetdev.in/contact or call +91 8466006486.
- Be friendly, professional, and concise.
- If you don't know something specific, direct them to contact Venkatesh directly.
- Always encourage visitors to check the portfolio at budgetdev.in/portfolio.

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
