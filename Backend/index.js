import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";
const app = express();
config();
app.use(cors());
app.use(express.json()); // Ensure this is before defining routes

const PORT = process.env.PORT || 4000; // Fallback to 4001 if not defined in .env
const MongoDBURI = process.env.MongoDBURI;
// app.get("/", (req, res) => {
//   res.send("Hello Wordsfsld fdfdfd!");
// });

//connect to mongodb
try {
  mongoose.connect(MongoDBURI);
  console.log("Connected to Mongo");
} catch (error) {
  console.log("error connecting to ", error);
}

//defining route
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
