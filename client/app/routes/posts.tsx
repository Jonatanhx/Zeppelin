import { prisma } from "../../../server/prisma/prisma";
import { Welcome } from "../components/posts";
import type { Route } from "./+types/posts";

export async function loader({ params }: Route.LoaderArgs) {
  const posts = await prisma.post.findMany();
  return posts;
}

export default function Posts() {
  return <Welcome />;
}
