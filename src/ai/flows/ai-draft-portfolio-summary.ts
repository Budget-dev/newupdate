'use server';
/**
 * @fileOverview An AI agent for drafting portfolio entry summaries.
 *
 * - aiDraftPortfolioSummary - A function that handles the generation of a portfolio summary.
 * - AiDraftPortfolioSummaryInput - The input type for the aiDraftPortfolioSummary function.
 * - AiDraftPortfolioSummaryOutput - The return type for the aiDraftPortfolioSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiDraftPortfolioSummaryInputSchema = z.object({
  projectTitle: z.string().describe('The title of the project.'),
  clientName: z.string().describe('The name of the client for whom the project was completed.'),
  projectDescription: z
    .string()
    .describe('A detailed description of the project, its goals, and challenges.'),
  technologiesUsed: z
    .array(z.string())
    .describe('A list of technologies and tools used in the project.'),
  keyAchievements: z
    .array(z.string())
    .describe('A list of key achievements or outcomes of the project.'),
});
export type AiDraftPortfolioSummaryInput = z.infer<
  typeof AiDraftPortfolioSummaryInputSchema
>;

const AiDraftPortfolioSummaryOutputSchema = z.object({
  summary: z.string().describe('A brief and concise summary or description for the portfolio entry.'),
});
export type AiDraftPortfolioSummaryOutput = z.infer<
  typeof AiDraftPortfolioSummaryOutputSchema
>;

export async function aiDraftPortfolioSummary(
  input: AiDraftPortfolioSummaryInput
): Promise<AiDraftPortfolioSummaryOutput> {
  return aiDraftPortfolioSummaryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'draftPortfolioSummaryPrompt',
  input: {schema: AiDraftPortfolioSummaryInputSchema},
  output: {schema: AiDraftPortfolioSummaryOutputSchema},
  prompt: `As an expert content creator for a digital agency, your task is to generate a concise and compelling summary for a new portfolio entry. This summary should highlight the project's essence, key achievements, and the value delivered to the client.

Project Title: {{{projectTitle}}}
Client Name: {{{clientName}}}
Project Description: {{{projectDescription}}}
Technologies Used:
{{#each technologiesUsed}}- {{{this}}}
{{/each}}
Key Achievements:
{{#each keyAchievements}}- {{{this}}}
{{/each}}

Based on the information above, generate a brief, engaging summary that is suitable for a portfolio entry.`,
});

const aiDraftPortfolioSummaryFlow = ai.defineFlow(
  {
    name: 'aiDraftPortfolioSummaryFlow',
    inputSchema: AiDraftPortfolioSummaryInputSchema,
    outputSchema: AiDraftPortfolioSummaryOutputSchema,
  },
  async (input) => {
    const {output} = await prompt(input);
    return output!;
  }
);
