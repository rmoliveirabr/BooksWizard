const mongoose = require("mongoose");

const deleteBook = async (req, res) => {
  const booksModel = mongoose.model("books");
  const id = req.params.id;

  if (!id)
    res.json({
      status: "error",
    });

  await booksModel.deleteOne({ _id: id });

  res.json({
    status: "success",
  });
};

module.exports = deleteBook;
