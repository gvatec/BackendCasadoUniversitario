import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import { route } from "./routes";
import path from "path";

const app = express();

app.use(express.json());
app.use(cors());
app.use(route);
app.use("/files", express.static(path.resolve(__dirname, "..", "tmp")));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    //Se for uma instancia do tipo error
    return res.status(400).json({
      Error: err.message,
    });
  }

  return res.status(500).json({
    status: "error",
    message: "Internal server error.",
  });
});

app.listen(process.env.PORT);
