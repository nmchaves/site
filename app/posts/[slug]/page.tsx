import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { loadPostBySlug } from "../data";

interface Props {
  params: { slug: string };
}

export default async function Page({ params }: Props) {
  const post = await loadPostBySlug(params.slug);

  if (post == null) {
    return notFound();
  }

  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mb-12">
        {post.meta.title}
      </h1>
      <div>
        <MDXRemote source={post.content} />
      </div>
    </div>
  );
}
