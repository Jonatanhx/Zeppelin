import { Post } from "../../../server/generated/prisma/client";
import type { Route } from "./+types/posts";

export async function loader({ params }: Route.LoaderArgs) {
  const response = await fetch(`http://localhost:6173/api/posts`);
  const posts = await response.json();
  return posts;
}

export default function Posts({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      {loaderData.map((post: Post) => (
        <div key={post.id}>
          <p>{post.id}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
