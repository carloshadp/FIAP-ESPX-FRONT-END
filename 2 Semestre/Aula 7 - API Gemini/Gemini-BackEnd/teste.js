//const { GoogleGenerativeAI } = require("@google/generative-ai");

import { GoogleGenerativeAI } from "@google/generative-ai";

// Acessando a API do gemini via sua API Key
const genAI = new GoogleGenerativeAI("AIzaSyCpIrDBZxMPLE1bgytsZPxgcPhGmfZyOLM");

// Instanciando o modelo
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Colocando o prompt
const prompt = "Me explica a fórmula de baskara detalhadamente em portugues";

// Enviando o prompt pro gemini e ESPERANDO a resposta dele
const result = await model.generateContent(prompt);
console.log(result.response.text());
