require("dotenv").config(); // Load variables from .env

const express = require("express");
const mongoose = require("mongoose");

const createBook = require("./handlers/createBook");
const updateBook = require("./handlers/updateBook");
const deleteBook = require("./handlers/deleteBook");
const getBooks = require("./handlers/getBooks");
const bookSuggestions = require("./handlers/bookSuggestions");

const app = express();
app.use(express.json());

// connect to DB
mongoose
  .connect(process.env.DATABASE_URL, {})
  .then(() => {
    console.log("Connection to MongoDB OK");
  })
  .catch(() => {
    console.log("Connection to MongoDB NOK");
  });

// models
require("./booksmodel");

// routes
app.post("/api/books", createBook);
app.patch("/api/books/:id", updateBook);
app.delete("/api/books/:id", deleteBook);
app.get("/api/books", getBooks);
app.get("/api/books/:id", getBooks);
app.get("/api/ai", bookSuggestions);

app.listen(8000, () => {
  console.log("Server started on 8000");
});
