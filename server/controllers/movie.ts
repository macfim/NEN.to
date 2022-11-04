import express, { Request, Response } from "express";

import Movie from "../models/Movie";

const movieRouter = express.Router();

movieRouter.get("/", async (request: Request, response: Response) => {
  const movies = await Movie.find({});

  if (movies.length === 0) return response.json({ error: "no movies found" });

  response.json(movies);
});

export default movieRouter;
