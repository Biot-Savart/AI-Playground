const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

class EmbeddingsService {
  async getEmbedding(text) {
    try {
      const embedding = await openai.embeddings.create({
        model: "text-embedding-3-small",
        input: text,
        encoding_format: "float",
      });
      console.log(embedding.data[0].embedding);
      return embedding.data[0].embedding;
    } catch (error) {
      console.error("Error getting completion:", error);
      return null;
    }
  }
}

module.exports = EmbeddingsService;
