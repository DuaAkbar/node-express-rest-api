import mongoose from "mongoose";

const BooksSchema = new mongoose.Schema({
  BookName: String,
  BookGenre: String,
  BookAuthor: String,
  BookPublishYear: String,
}
);

export default mongoose.model("books" , BooksSchema)