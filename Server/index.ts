import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import Model from "./Model";
const url = "mongodb://127.0.0.1:27017/todo";
const port: number = 8000;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", async (req: Request, res: Response) => {
  try {
    const getData = await Model.find();
    return res.json({
      messaage: "Data gotten ",
      data: getData,
    });
  } catch (error) {}
});

app.post("/", async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const getData = await Model.create({
      title,
    });
    return res.json({
      messaage: "Data gotten ",
      data: getData,
    });
  } catch (error) {}
});

mongoose.connect(url).then(() => {
  app.listen(port, () => {
    console.log("server listening on port");
  });
});
