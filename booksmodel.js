const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  book_name: {
    type: String,
  },
  author: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

const booksModel = mongoose.model("books", booksSchema);

module.exports = booksModel;
