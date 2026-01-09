import type { Request, Response } from "express";
import express from "express";

const app = express();
const port = 6173;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
