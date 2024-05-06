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

  // Note: We use `@tailwindcss/typography` classes to add some sensible defaults
  // to the blog post. This was adapted from the Next.js docs:
  // https://nextjs.org/docs/app/building-your-application/configuring/mdx#using-tailwind-typography-plugin
  return (
    <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-invert">
      <h1 className="text-center mb-12">{post.meta.title}</h1>
      <div>
        <MDXRemote source={post.content} />
      </div>
    </div>
  );
}
