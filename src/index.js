import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL.replace(
  "<password>",
  encodeURIComponent(process.env.DATABASE_PASSWORD)
);

// Middlewares
app.use(express.json());

// DB Connection
mongoose
  .connect(DATABASE_URL)
  .then(async () => {
    console.log("Database connection successfully established!");

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error.message);
  });
