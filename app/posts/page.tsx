import type { Metadata } from "next";
import Link from "next/link";
import { loadPostsMetadata } from "./data";

export const metadata: Metadata = {
  title: "Posts | Nico Chaves",
  description: "Blog posts written by Nico Chaves.",
};

export default async function Page() {
  const posts = await loadPostsMetadata();

  return (
    <main className="flex flex-col items-center max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-12">Posts</h1>
      <ol>
        {posts.map((post) => (
          <li key={post.title} className="mt-4 first:mt-0">
            <Link href={`/posts/${post.slug}`}>
              <div className="text-lg font-medium">{post.title}</div>
              <div>{post.publishDate.formatted}</div>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
