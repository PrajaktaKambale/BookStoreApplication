import mongoose from "mongoose";

const bookScheme = mongoose.Schema({
  name: String,
  price: Number,
  Category: String,
  image: String,
  title: String,
});

const Book = mongoose.model("Book", bookScheme);

export default Book;
