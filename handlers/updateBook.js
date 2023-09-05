const mongoose = require("mongoose");

const updateBook = async (req, res) => {
  const booksModel = mongoose.model("books");
  const id = req.params.id;

  if (!id)
    res.json({
      status: "error",
    });

  await booksModel.updateOne(
    {
      _id: id,
    },
    {
      book_name: req.body.book_name,
      author: req.body.author,
      rating: req.body.rating,
    }
  );

  res.json({
    status: "success",
  });
};

module.exports = updateBook;
