const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

class CompletionService {
  async getCompletion(text) {
    try {
      const completion = await openai.chat.completions.create({
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: text },
        ],
        model: "gpt-3.5-turbo",
      });

      return completion.choices[0].message.content;
    } catch (error) {
      console.error("Error getting completion:", error);
      return null;
    }
  }
}

module.exports = CompletionService;
