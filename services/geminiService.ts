// ===================================================================================
// IMPORTANT: This file represents SERVER-SIDE logic.
// In a real-world application, this code would live on a secure server or in a
// serverless function (e.g., a Next.js API route or a Cloud Function).
// The API key would be stored securely as an environment variable on the server,
// and this file would NEVER be exposed to the client's browser.
// ===================================================================================

import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedIdea } from "../types";

const API_KEY = process.env.API_KEY;

/**
 * Generates movie ideas using the Gemini API. This function is intended to be
 * run in a secure server-side environment.
 * @param theme The theme to base the movie ideas on.
 * @returns A promise that resolves to an array of generated movie ideas.
 */
export const generateMovieIdeas = async (theme: string): Promise<GeneratedIdea[]> => {
  if (!API_KEY) {
    // This error will be thrown on the server, not the client.
    throw new Error("Gemini API key is not configured on the server.");
  }
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Based on the following theme, generate 3 unique and creative short film ideas. Theme: "${theme}"`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: {
                type: Type.STRING,
                description: 'A catchy and intriguing title for the short film.',
              },
              logline: {
                type: Type.STRING,
                description: 'A one-sentence summary of the film\'s plot.',
              },
              tags: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
                description: 'An array of 3 relevant genre or keyword tags.',
              },
            },
            required: ["title", "logline", "tags"],
          },
        },
      },
    });

    const jsonText = response.text;
    const ideas: GeneratedIdea[] = JSON.parse(jsonText);
    return ideas;

  } catch (error) {
    console.error("Error generating movie ideas on the server:", error);
    // In a real app, you might want to return a more user-friendly error message.
    throw new Error("Failed to generate ideas from AI. Please check the server logs for details.");
  }
};