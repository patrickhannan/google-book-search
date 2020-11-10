const mongoose = require("mongoose");
const { Schema } = mongoose;

const BooksSchema = new Schema({
    title: {
      type: String,
      trim: true,
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