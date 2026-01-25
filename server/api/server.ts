import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";
import { prisma } from "../prisma/prisma";
import { appRouter } from "../tprc/routers/root";

const app = express();
const port = 6173;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
  }),
);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/posts", async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
