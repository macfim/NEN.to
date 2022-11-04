import express, { Request, response, Response } from "express";

const app = express();

app.get("/", (request: Request, response: Response) => {
  response.send("welp");
});

export default app;
