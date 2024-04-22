const express = require("express");
const router = express.Router();
const CompletionService = require("../../services/completionService");

const completionService = new CompletionService(); // Create an instance of the service

// Example route
router.get("/", (req, res) => {
  res.send("API Root");
});

router.post("/completion", async (req, res) => {
  try {
    const result = await completionService.getCompletion(req.body.text);
    res.json({ text: result }); // Wrap in an object if just sending a string to adhere to JSON response standards
  } catch (error) {
    console.error("Error getting completion:", error);
    res.status(500).json({ error: "Failed to get completion" });
  }
});

module.exports = router;
