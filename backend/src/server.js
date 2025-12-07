import express from "express";
import cors from "cors";
import morgan from "morgan";

import { ENV } from "./config/env.js";

const app = express();

const { PORT } = ENV;

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// routes
app.get("/", (req,res) => {
  res.status(200).send("READY TO WORK")
})

// listen to ports
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});