import { GeneratedIdea } from '../types';
import { generateMovieIdeas } from './geminiService';

/**
 * Fetches movie ideas based on a theme.
 * This function acts as a client-side interface to our "backend".
 * 
 * @param theme The theme for which to generate ideas.
 * @returns A promise that resolves to an array of generated movie ideas.
 */
export const generateIdeas = async (theme: string): Promise<GeneratedIdea[]> => {
  // In a real-world application, this is where you would make a fetch call
  // to your secure backend API endpoint.
  //
  // For example:
  //
  // const response = await fetch('/api/generate-ideas', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify({ theme }),
  // });
  //
  // if (!response.ok) {
  //   const errorData = await response.json();
  //   throw new Error(errorData.message || 'Failed to fetch ideas.');
  // }
  //
  // return response.json();

  // For the purpose of this simulation, we are calling the "server-side"
  // function directly. This is NOT secure in a real app, but it allows
  // our demo to function while demonstrating the correct architecture.
  try {
    const ideas = await generateMovieIdeas(theme);
    return ideas;
  } catch (error) {
    // Re-throw the error so the UI component can handle it.
    console.error("Error in ideaService:", error);
    throw error;
  }
};