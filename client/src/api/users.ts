import axios from "axios";

interface INewUser {
  username: string;
  password: string;
}

export const createUser = async (newUser: INewUser): Promise<any> => {
  const response = await axios.post("/users", newUser);
  return response.data;
};
