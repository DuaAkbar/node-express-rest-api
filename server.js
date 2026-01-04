import express from "express";
import dotenv from "dotenv";
import logger from "./src/middlewares/methods-logger.js"
import connectToDb from "./src/config/dataBase/connectToDatabase.js";
import errorhandler from "./src/middlewares/errorHandler.js";
import booksCollectionRouter from "./src/routes/booksCollections.js";

dotenv.config();
const port = process.env.PORT || 4000;

 connectToDb();

const server = express();

server.use(logger);

server.use(express.json());
server.use("/api/v1/books/" , booksCollectionRouter)

server.use(errorhandler);
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
