import { askGroq } from "../services/groq.js";
import { askGemini } from "../services/gemini.js";

export async function generateResponse(prompt, currentModel) {
    try {
        if (currentModel === "groq") {
            return await askGroq(prompt);
        }

        return await askGemini(prompt);
    } catch (error) {
        console.log("Primary Model Failed");

        if (currentModel === "groq") {
            return await askGemini(prompt);
        }

        return await askGroq(prompt);
    }
}