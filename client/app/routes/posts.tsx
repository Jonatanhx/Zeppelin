import Layout from "app/components/layout";
import { Post } from "../../../server/generated/prisma/client";
import type { Route } from "./+types/posts";

export async function loader({ params }: Route.LoaderArgs) {
  const response = await fetch(`http://localhost:6173/api/posts`);
  const posts = await response.json();
  return posts;
}

export default function PostsPage({ loaderData }: Route.ComponentProps) {
  return (
    <Layout>
      {loaderData.map((post: Post) => (
        <div key={post.id}>
          <p>{post.id}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </Layout>
  );
}
