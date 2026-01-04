import express from "express";
import {
  deleteBooksCollectionsById,
  getBooksCollections,
  getBooksCollectionsById,
  postBooksCollections,
  putBooksCollectionsById,
} from "../Controllers/booksCollectionsController.js";

const booksCollectionRouter = express.Router();

booksCollectionRouter.get("/", getBooksCollections);
booksCollectionRouter.get("/:id", getBooksCollectionsById);
booksCollectionRouter.delete("/:id", deleteBooksCollectionsById);
booksCollectionRouter.put("/:id", putBooksCollectionsById);
booksCollectionRouter.post("/", postBooksCollections);


export default booksCollectionRouter