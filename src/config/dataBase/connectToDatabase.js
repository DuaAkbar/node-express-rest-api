import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDb = async () => {
  try {
    const Myconnection = await mongoose.connect(
      process.env.MONGO_DB_CONNECTION_STRING
    );
    console.log("Connection has been build successfully");
    console.log(Myconnection.connection.host);
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

export default connectToDb;