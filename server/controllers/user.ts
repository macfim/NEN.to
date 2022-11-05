require("dotenv").config();
import express, { Request, Response } from "express";
import bcrypt from "bcrypt";

import User from "../models/User";

const userRouter = express.Router();

interface INewUser {
  username: string;
  password: string;
}

userRouter.post("/", async (request: Request, response: Response) => {
  try {
    const { username, password }: INewUser = request.body;

    if (!username || !password)
      return response
        .status(400)
        .json({ error: "username or/and password are blank" });
      
    const saltRounds = Number(process.env.SALT);
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      hash,
    });

    const savedUser = await newUser.save();

    response.json(savedUser);
  } catch (err: any) {
    response.status(400).json({ error: err.message });
  }
});

userRouter.get("/", async (request: Request, response: Response) => {
  try {
    const users = await User.find({});

    if (users.length === 0) return response.json({ error: "no users found" });

    response.json(users);
  } catch (err: any) {
    response.status(400).json({ error: err.message });
  }
});

userRouter.get("/:id", async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const user = await User.findById(id);

    response.json(user);
  } catch (err: any) {
    response.status(400).json({ error: err.message });
  }
});

export default userRouter;
