const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

exports.handleAIQuery = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // i am using Custom fixed reply for refund query
    if (prompt.toLowerCase().includes("refund")) {
      return res.status(200).json({
        reply:
          "To get a refund, please contact our support team at support@example.com.",
      });
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    res.status(200).json({ reply: response });
  } catch (err) {
    console.error("AI Error:", err);
    res.status(500).json({ error: "Failed to fetch AI response" });
  }
};
