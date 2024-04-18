const PORT = process.env.PORT || 8000;
const express = require("express");
const cors = require("cors");
const app = express();
const OpenAI = require("openai");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

app.post("/completion", async (req, res) => {
  const text = req.body.text;

  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: text },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
  res.json({ text: completion.choices[0].message.content });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
