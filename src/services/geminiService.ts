import { GoogleGenAI, Type } from "@google/genai";
import { Message, RoadmapItem } from "../types";

const genAI = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const getTutorResponse = async (messages: Message[], mode: 'Beginner' | 'Exam' | 'Interview') => {
  const model = "gemini-3-flash-preview";
  const systemInstruction = `You are an expert AI Tutor for Capabl AI. 
    Current Mode: ${mode}.
    - Beginner: Explain concepts in simple terms, use analogies, and be encouraging.
    - Exam: Focus on key definitions, potential questions, and structured summaries.
    - Interview: Focus on technical depth, common interview questions, and best practices.
    Always provide structured, clear, and helpful responses. Use markdown for formatting.`;

  const response = await genAI.models.generateContent({
    model,
    contents: messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
    config: { systemInstruction }
  });

  return response.text;
};

export const generateRoadmap = async (goal: string): Promise<RoadmapItem[]> => {
  const model = "gemini-3-flash-preview";
  const response = await genAI.models.generateContent({
    model,
    contents: `Generate a structured learning roadmap for the goal: "${goal}". 
      Provide exactly 5 steps. Each step should have a title and a brief description.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            description: { type: Type.STRING },
            status: { type: Type.STRING, enum: ['completed', 'current', 'upcoming'] }
          },
          required: ['title', 'description', 'status']
        }
      }
    }
  });

  try {
    return JSON.parse(response.text || '[]');
  } catch (e) {
    console.error("Failed to parse roadmap", e);
    return [];
  }
};

export const generateQuiz = async (topic: string) => {
  const model = "gemini-3-flash-preview";
  const response = await genAI.models.generateContent({
    model,
    contents: `Generate 3 multiple choice questions for the topic: "${topic}". 
      Each question should have 4 options and one correct answer index (0-3). 
      Include an explanation for the correct answer.`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            question: { type: Type.STRING },
            options: { type: Type.ARRAY, items: { type: Type.STRING } },
            correctIndex: { type: Type.INTEGER },
            explanation: { type: Type.STRING }
          },
          required: ['question', 'options', 'correctIndex', 'explanation']
        }
      }
    }
  });

  try {
    return JSON.parse(response.text || '[]');
  } catch (e) {
    console.error("Failed to parse quiz", e);
    return [];
  }
};
