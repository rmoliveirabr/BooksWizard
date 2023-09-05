const mongoose = require("mongoose");

const getBooks = async (req, res) => {
  const booksModel = mongoose.model("books");
  const id = req.params.id;

  const books = !id
    ? await booksModel.find({})
    : await booksModel.find({ _id: id });

  res.json({
    status: "success",
    data: books,
  });
};

module.exports = getBooks;
