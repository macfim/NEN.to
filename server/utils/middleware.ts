import { Request, Response } from "express";
import path from "path";

export const unknownEndpoint = (request: Request, response: Response) => {
  response.sendFile(path.join(__dirname, "/../../build/index.html"));
};
