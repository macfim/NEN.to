import axios from "axios";

import { IMovie } from "../utils/interfaces";

export const getAllMovies = async (): Promise<IMovie[]> => {
  const response = await axios.get("/movies");
  return response.data;
};
