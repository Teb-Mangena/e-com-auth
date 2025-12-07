import express from "express";
import cors from "cors";
import morgan from "morgan";
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";

import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import { inngest, functions } from "./config/inngest.js";

const app = express();

const { PORT } = ENV;

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(clerkMiddleware());

// routes
app.get("/", (req,res) => {
  res.status(200).send("READY TO WORK")
})

app.use("/api/inngest", serve({ client: inngest, functions }));

// connect DB
connectDB().then(() => {
  // listen to ports
  app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });
});