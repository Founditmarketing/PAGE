import { GoogleGenAI } from '@google/genai';

// In Vite, environment variables are accessed via import.meta.env
// Ensure VITE_GEMINI_API_KEY is prefix appropriately in your .env file
const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

if (!apiKey) {
  console.warn("VITE_GEMINI_API_KEY is missing. AI image generation will fail.");
}

export const ai = new GoogleGenAI({ apiKey });
