import axios from "axios";

import { IMovie, INewMovie } from "../utils/interfaces";

export const getAllMovies = async (): Promise<IMovie[]> => {
  const response = await axios.get("/movies");
  return response.data;
};

export const createMovie = async (newMovie: INewMovie): Promise<IMovie> => {
  const response = await axios.post("/movies", newMovie);
  return response.data;
};
