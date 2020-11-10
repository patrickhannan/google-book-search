const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({
    title: {
      type: String,
      trim: true,
      required: "Title is required",
    },
    authors: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
  });
  
  const Books = mongoose.model("Books", BooksSchema);

module.exports = Books;