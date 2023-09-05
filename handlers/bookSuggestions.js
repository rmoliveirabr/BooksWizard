const mongoose = require("mongoose");
const { OpenAI } = require("openai");

const bookSuggestions = async (req, res) => {
  const booksModel = mongoose.model("books");

  const books = await booksModel.find({});

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const prompt =
    "Give me 10 book suggestions based on these books:" + books.toString();

  const chatCompletion = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  });
  console.log(chatCompletion.data.choices[0].message);

  res.json({
    status: "success",
    suggestions: chatCompletion.data.choices,
  });
};

module.exports = bookSuggestions;
