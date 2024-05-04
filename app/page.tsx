import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24 text-cneter">
      <h1 className="text-xl font-semibold mb-12">Hey! I&apos;m Nico Chaves</h1>
      <p className="text-center mb-8">
        I&apos;m a full-stack software engineer with significant experience
        using tools like TypeScript, React, Node.js, and SQL (especially
        PostgreSQL).
      </p>
      <p className="text-center">
        When I&apos;m not building software, I like hiking with my dog Sophie,
        doing Muay Thai, spending time in the ocean, and playing bass guitar.
        Check out my website{" "}
        <Link
          href="https://www.copybass.com/"
          className="underline underline-offset-4 hover:decoration-2"
        >
          CopyBass.com
        </Link>
        , which I created to help me practice playing bass.
      </p>
    </main>
  );
}
