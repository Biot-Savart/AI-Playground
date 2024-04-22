const express = require("express");
const router = express.Router();
const OpenAI = require("openai");
require("dotenv").config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Example route
router.get("/", (req, res) => {
  res.send("API Root");
});

router.post("/completion", async (req, res) => {
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

module.exports = router;
