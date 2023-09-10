"use strict";
import express, { Request, Response } from "express";
const app = express();
app.get("/", (req: Request, res: Response) => {
  res.send("yes");
});
app.listen(3000, () => {
  console.log("Server's Up at 3000");
});
