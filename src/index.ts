import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorBoundary } from "./middlewares/errorBoundary";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
// @ts-ignore

app.use(errorBoundary);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
