require("dotenv").config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import movieRouter from "./controllers/movie";
import genreRouter from "./controllers/genre";
import userRouter from "./controllers/user";

const MONGODB_URI_DEV = process.env.MONGODB_URI;

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(MONGODB_URI_DEV!)
  .then(() => console.log(`connected to ${MONGODB_URI_DEV}`))
  .catch(() => console.log(`failed to connect ${MONGODB_URI_DEV}`));

app.use("/api/movies", movieRouter);
app.use("/api/genres", genreRouter);
app.use("/api/users", userRouter);

export default app;
