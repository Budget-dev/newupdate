'use server';
/**
 * @fileOverview A Genkit flow for generating initial drafts of service descriptions based on keywords.
 *
 * - aiDraftServiceDescription - A function that handles the generation of service description drafts.
 * - AiDraftServiceDescriptionInput - The input type for the aiDraftServiceDescription function.
 * - AiDraftServiceDescriptionOutput - The return type for the aiDraftServiceDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiDraftServiceDescriptionInputSchema = z.object({
  keywords: z
    .array(z.string())
    .min(1)
    .describe('A list of keywords related to the service.'),
  serviceType: z
    .string()
    .optional()
    .describe('The type of service, e.g., Web Design, Web App, Custom Software.'),
});
export type AiDraftServiceDescriptionInput = z.infer<
  typeof AiDraftServiceDescriptionInputSchema
>;

const AiDraftServiceDescriptionOutputSchema = z.object({
  title: z.string().describe('A suggested title for the service description.'),
  description: z.string().describe('The AI-generated draft for the service description.'),
});
export type AiDraftServiceDescriptionOutput = z.infer<
  typeof AiDraftServiceDescriptionOutputSchema
>;

export async function aiDraftServiceDescription(
  input: AiDraftServiceDescriptionInput
): Promise<AiDraftServiceDescriptionOutput> {
  return aiDraftServiceDescriptionFlow(input);
}

const draftServiceDescriptionPrompt = ai.definePrompt({
  name: 'draftServiceDescriptionPrompt',
  input: {schema: AiDraftServiceDescriptionInputSchema},
  output: {schema: AiDraftServiceDescriptionOutputSchema},
  prompt: `You are an expert marketing copywriter for a digital agency called "The BudgetDev".
Your task is to generate a compelling and concise draft for a new service description.

Focus on the core value proposition and benefits for the client.

${'{{#if serviceType}}'}Service Type: ${'{{{serviceType}}}'}${'/{{/if}}'}
Keywords: ${'{{#each keywords}}'}- ${'{{{this}}}'}
${'/{{/each}}'}

Generate a clear and engaging title and a comprehensive description for the service based on the provided keywords and service type. The description should be suitable for a landing page or service showcase.
`,
});

const aiDraftServiceDescriptionFlow = ai.defineFlow(
  {
    name: 'aiDraftServiceDescriptionFlow',
    inputSchema: AiDraftServiceDescriptionInputSchema,
    outputSchema: AiDraftServiceDescriptionOutputSchema,
  },
  async (input) => {
    const {output} = await draftServiceDescriptionPrompt(input);
    if (!output) {
      throw new Error('Failed to generate service description.');
    }
    return output;
  }
);
