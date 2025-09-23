'use server';
/**
 * @fileOverview A Genkit flow that provides tips and guidance on transitioning to Agile methodologies.
 *
 * - agileTransitionAssistant - A function that accepts organizational culture information and returns Agile transition tips.
 * - AgileTransitionAssistantInput - The input type for the agileTransitionAssistant function.
 * - AgileTransitionAssistantOutput - The return type for the agileTransitionAssistant function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AgileTransitionAssistantInputSchema = z.object({
  organizationCulture: z.string().describe('Detailed description of the organization\'s current culture, including values, practices, and employee attitudes.'),
});
export type AgileTransitionAssistantInput = z.infer<typeof AgileTransitionAssistantInputSchema>;

const AgileTransitionAssistantOutputSchema = z.object({
  transitionTips: z.string().describe('AI-generated tips and guidance on transitioning to Agile methodologies, tailored to the organization\'s culture.'),
});
export type AgileTransitionAssistantOutput = z.infer<typeof AgileTransitionAssistantOutputSchema>;

export async function agileTransitionAssistant(input: AgileTransitionAssistantInput): Promise<AgileTransitionAssistantOutput> {
  return agileTransitionAssistantFlow(input);
}

const prompt = ai.definePrompt({
  name: 'agileTransitionAssistantPrompt',
  input: {schema: AgileTransitionAssistantInputSchema},
  output: {schema: AgileTransitionAssistantOutputSchema},
  prompt: `You are an expert Agile consultant. A potential client has provided information about their organization's culture. Based on this information, provide actionable tips and guidance on how they can transition to Agile methodologies.

Organization Culture: {{{organizationCulture}}}

Consider the following:
*   Potential challenges in the transition.
*   Specific Agile frameworks or practices that might be a good fit.
*   How to address resistance to change.
*   Quick wins to demonstrate the value of Agile.
*   How to foster a culture of continuous improvement.
`,
});

const agileTransitionAssistantFlow = ai.defineFlow(
  {
    name: 'agileTransitionAssistantFlow',
    inputSchema: AgileTransitionAssistantInputSchema,
    outputSchema: AgileTransitionAssistantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
