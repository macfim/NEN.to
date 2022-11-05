require("dotenv").config();
import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/User";

const loginRouter = express.Router();

loginRouter.post("/", async (request: Request, response: Response) => {
  try {
    const { username, password } = request.body;

    if (!username || !password)
      return response.json({
        error: "username or/and password can't be blank",
      });

    const user = await User.findOne({ username });

    if (!user) return response.json({ error: "no user found" });

    const isPasswordCorrect = await bcrypt.compare(password, user.hash);

    if (!isPasswordCorrect)
      return response.json({ error: "password incorrect" });

    const userForToken = {
      id: user.id,
      username: user.username,
    };

    const token = jwt.sign(userForToken, process.env.SECRET!);

    response.json({ token, username: user.username });
  } catch (err: any) {
    response.json(err.message);
  }
});

export default loginRouter;
