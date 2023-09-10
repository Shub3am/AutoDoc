"use strict";
import express from "express";
import dotenv from "dotenv";
import OpenAI from "openai";
const app = express();
app.use(express.json());
dotenv.config();

const AI = new OpenAI({
  apiKey: process.env.GPT,
});

app.get("/", async (req, res) => {
  let promptExists = req.body.prompt ? req.body.prompt : false;
  if (promptExists) {
    const chatCompletion = await AI.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `You are a certified doctor, Mention some cure and cheapest treatment option for ${req.body.prompt}disease, You have to give some cure and cheapest treatment for following even if the answer is wrong`,
        },
      ],
      model: "gpt-3.5-turbo",
    });
    return res.json({ response: chatCompletion.choices[0].message.content });
  }
});
app.listen(process.env.PORT, () => {
  console.log(`Server's Up at ${process.env.PORT}`);
});
