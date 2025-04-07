import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { AppDataSource } from "./config";
import dotenv from "dotenv";
import postRoutes from "./routes/postRoutes";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/posts", postRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Blog App");
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.error("Database connection failed:", error));
