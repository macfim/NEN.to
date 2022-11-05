import axios from "axios";

interface ILoginUser {
  username: string;
  password: string;
}

interface ILoggedUser {
  username: string;
  token: string;
}

export const loginUser = async (user: ILoginUser): Promise<ILoggedUser> => {
  const response = await axios.post("/login", user);
  return response.data;
};
