import fs from "node:fs/promises";
import path from "node:path";
import { unstable_cache } from "next/cache";
import { z } from "zod";
import matter from "gray-matter";

interface PostMetadata {
  title: string;
  slug: string;
  publishDate: {
    val: Date;
    formatted: string;
  };
}

export const loadPostsMetadata = unstable_cache(
  async (): Promise<Array<PostMetadata>> => {
    const postFilenames = await fs.readdir(
      path.join(process.cwd(), "/app/posts/content")
    );

    const postsMeta: Array<PostMetadata> = [];

    for (const filename of postFilenames) {
      const postMeta = await loadPostMetadataByFilename(filename);
      postsMeta.push(postMeta);
    }

    // Sort the posts by the publish date (newest posts first)
    const sortedPostsMeta = postsMeta.sort((postA, postB) =>
      postA.publishDate.val < postB.publishDate.val ? 1 : -1
    );

    return sortedPostsMeta;
  }
);

interface Post {
  meta: PostMetadata;
  content: string;
}

export const loadPostBySlug = unstable_cache(
  async (slug: string): Promise<Post> => {
    const filename = filenameFromSlug(slug);

    const rawContent = await readPostFile(filename);

    const { data: frontMatter, content } = matter(rawContent);

    return {
      meta: parseMetadata({ slug, frontMatter }),
      content,
    };
  }
);

const filenameFromSlug = (slug: string) => `${slug}.mdx`;

const slugFromFilename = (filename: string) => filename.replace(".mdx", "");

const loadPostMetadataByFilename = unstable_cache(
  async (postFilename: string): Promise<PostMetadata> => {
    const slug = slugFromFilename(postFilename);
    const { meta } = await loadPostBySlug(slug);
    return meta;
  }
);

const PostFrontMatterSchema = z.object({
  title: z
    .string({
      required_error: "The post's `title` field was not specified",
      invalid_type_error: "The post's `title` must be a string",
    })
    .min(1, { message: "The post's `title` must be non-empty" }),
  publishDate: z.coerce.date({
    required_error: "The post's `publishDate` field was not specified",
    invalid_type_error: "The post's `publishDate` must be a valid date string",
  }),
});

function parseMetadata({
  slug,
  frontMatter,
}: {
  slug: string;
  frontMatter: unknown;
}): PostMetadata {
  const parsedFrontMatter = PostFrontMatterSchema.parse(frontMatter);

  return {
    title: parsedFrontMatter.title,
    slug,
    publishDate: {
      val: parsedFrontMatter.publishDate,
      formatted: parsedFrontMatter.publishDate.toLocaleString("en-us", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
    },
  };
}

async function readPostFile(filename: string) {
  return fs.readFile(
    path.join(process.cwd(), `/app/posts/content/${filename}`),
    "utf8"
  );
}
