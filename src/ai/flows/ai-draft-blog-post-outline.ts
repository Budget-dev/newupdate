'use server';
/**
 * @fileOverview A Genkit flow for drafting blog post outlines.
 *
 * - aiDraftBlogPostOutline - A function that handles the generation of a blog post outline.
 * - AiDraftBlogPostOutlineInput - The input type for the aiDraftBlogPostOutline function.
 * - AiDraftBlogPostOutlineOutput - The return type for the aiDraftBlogPostOutline function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AiDraftBlogPostOutlineInputSchema = z.object({
  topic: z.string().describe('The main topic of the blog post.'),
  keywords: z
    .array(z.string())
    .describe('A list of keywords relevant to the blog post content.'),
});
export type AiDraftBlogPostOutlineInput = z.infer<
  typeof AiDraftBlogPostOutlineInputSchema
>;

const AiDraftBlogPostOutlineOutputSchema = z.object({
  outline: z.string().describe('The generated blog post outline.'),
});
export type AiDraftBlogPostOutlineOutput = z.infer<
  typeof AiDraftBlogPostOutlineOutputSchema
>;

export async function aiDraftBlogPostOutline(
  input: AiDraftBlogPostOutlineInput
): Promise<AiDraftBlogPostOutlineOutput> {
  return aiDraftBlogPostOutlineFlow(input);
}

const aiDraftBlogPostOutlinePrompt = ai.definePrompt({
  name: 'aiDraftBlogPostOutlinePrompt',
  input: {schema: AiDraftBlogPostOutlineInputSchema},
  output: {schema: AiDraftBlogPostOutlineOutputSchema},
  prompt: `You are a blog post outline generator. Your goal is to create a comprehensive and engaging blog post outline based on the provided topic and keywords.

The outline should be clearly structured and include:
1. A catchy and relevant title for the blog post.
2. A brief introduction section that sets the stage.
3. Several main sections with descriptive headings.
4. Each main section should contain a few bullet points detailing what will be covered in that section.
5. A concluding section that summarizes the blog post and offers a call to action or final thoughts.

Ensure the outline incorporates the provided keywords naturally and logically throughout the structure.

Topic: {{{topic}}}
Keywords: {{{keywords}}}`,
});

const aiDraftBlogPostOutlineFlow = ai.defineFlow(
  {
    name: 'aiDraftBlogPostOutlineFlow',
    inputSchema: AiDraftBlogPostOutlineInputSchema,
    outputSchema: AiDraftBlogPostOutlineOutputSchema,
  },
  async input => {
    const {output} = await aiDraftBlogPostOutlinePrompt(input);
    return output!;
  }
);
