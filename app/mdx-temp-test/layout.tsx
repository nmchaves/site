export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Shared layout using `@tailwindcss/typography` classes to add some sensible
  // defaults to our MDX content. This was adapted from the Next.js docs:
  // https://nextjs.org/docs/app/building-your-application/configuring/mdx#using-tailwind-typography-plugin
  return (
    <div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-invert">
      {children}
    </div>
  );
}
