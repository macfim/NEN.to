import axios from "axios";

import { IGenre } from "../utils/interfaces";

export const getAllGenres = async (): Promise<IGenre[]> => {
  const response = await axios.get("/genres");
  return response.data;
};
