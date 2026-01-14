import express from "express";
import { prisma } from "../prisma/prisma";

const app = express();
const port = 6173;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/api/posts", async (req, res) => {
  const posts = await prisma.post.findMany();
  res.json(posts);
});

app.listen(port, () => console.log(`Server running on port ${port}`));
