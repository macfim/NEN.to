require("dotenv").config();
import express from "express";
import mongoose from "mongoose";

import movieRouter from "./controllers/movie";

const MONGODB_URI_DEV = process.env.MONGODB_URI;

const app = express();

app.use(express.json());

mongoose
  .connect(MONGODB_URI_DEV!)
  .then(() => console.log(`connected to ${MONGODB_URI_DEV}`))
  .catch(() => console.log(`failed to connect ${MONGODB_URI_DEV}`));

app.use("/api/movies", movieRouter);

export default app;
