import Image from "next/image";
import Link from "next/link";
import nicoImg from "@/public/nico_sky_blue_polo.jpeg";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-xl font-semibold mb-12">Hey! I&apos;m Nico Chaves</h1>
      <Image
        src={nicoImg}
        alt="Photo of Nico Chaves"
        placeholder="blur"
        width={200}
        className="rounded-full mb-12"
      />
      <p className="text-center mb-8">
        I&apos;m a full-stack software engineer with significant experience
        using tools like:
        <br />
        TypeScript, React, Node.js, GraphQL, and SQL (especially PostgreSQL)
      </p>
      <p className="text-center mb-8">
        When I&apos;m not building software, I like hiking with my dog Sophie,
        doing Muay Thai, spending time in the ocean, and playing bass guitar.
      </p>
      <p className="text-center">
        Check out my website{" "}
        <Link
          href="https://www.copybass.com/"
          className="underline underline-offset-4 hover:decoration-2"
        >
          CopyBass.com
        </Link>
        , which I created to help me practice playing bass. 🤘
      </p>
    </main>
  );
}
