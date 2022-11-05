import axios from "axios";

import { IMovie } from "../utils/interfaces";

axios.defaults.baseURL = "http://localhost:4000/api/movies";

export const getAllMovies = async (): Promise<IMovie[]> => {
  const response = await axios.get("/");
  return response.data;
};
