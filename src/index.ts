import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";
import { errorBoundary } from "./middlewares/errorBoundary";
import { runMigrations } from "./db/migrations";
import authController from "./controllers/auth-controller";
const app = express();

app.use(express.json());
app.use(cors());
authController(app);

const PORT = process.env.PORT;
// @ts-ignore

app.use(errorBoundary);

const startServe = async () => {
  await runMigrations();

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServe();
