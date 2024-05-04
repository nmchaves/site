import Image from "next/image";
import Link from "next/link";
import nicoImg from "@/public/nico_sky_blue_polo.jpeg";
import nicoSunset from "@/public/nico_sunset.jpeg";
import fortFunstonOverlook from "@/public/fort_funston_overlook.jpeg";
import sophieParkSunset from "@/public/sophie_park_sunset.jpeg";
import rayAndTurtle from "@/public/ray_and_turtle.jpeg";
import dogBeach from "@/public/dog_beach.jpeg";
import fenderBass from "@/public/fender_precision_bass.jpeg";
import nicoHeavyBag from "@/public/nico_heavy_bag_round_kick.jpeg";

export default function Home() {
  return (
    <main className="flex flex-col items-center max-w-5xl mx-auto text-center">
      <h1 className="text-xl font-semibold mb-12">Hey! I&apos;m Nico Chaves</h1>
      <Image
        src={nicoImg}
        alt="Photo of Nico Chaves"
        priority
        placeholder="blur"
        width={200}
        className="rounded-full mb-12"
      />
      <p className="mb-8">
        I&apos;m a full-stack software engineer with significant experience
        using tools like:
        <br />
        TypeScript, React, Node.js, GraphQL, and SQL (especially PostgreSQL)
      </p>
      <p className="mb-8">
        When I&apos;m not building software, I like hiking with my dog Sophie,
        doing Muay Thai, spending time in the ocean, and playing bass guitar.
      </p>
      <p>
        Check out my website{" "}
        <Link
          href="https://www.copybass.com/"
          className="underline underline-offset-4 hover:decoration-2"
        >
          CopyBass.com
        </Link>
        , which I created to help me practice playing bass. 🤘
      </p>
      <div className="mt-16 gap-8 space-y-8 md:columns-2 max-w-md md:max-w-4xl">
        <Image
          src={nicoSunset}
          alt="A photo of Nico standing in a lush meadow overlooking the West Maui Mountains as the sun sets."
          placeholder="blur"
          className="rounded"
        />
        <Image
          src={fortFunstonOverlook}
          alt="A photo of Nico petting his German Shepherd Sophie on a sandy hill overlooking the ocean at Fort Funston in San Francisco."
          placeholder="blur"
          className="rounded"
        />
        <Image
          src={sophieParkSunset}
          alt="A photo of Nico petting his German Shepherd Sophie's belly while she lays on the grass at the park as the sun sets."
          placeholder="blur"
          className="rounded"
        />
        <Image
          src={rayAndTurtle}
          alt="An underwater photo of a Hawaiian spotted eagle ray and green sea turtle swimming peacefully."
          placeholder="blur"
          className="rounded"
        />
        <Image
          src={dogBeach}
          alt="A photo of Nico with 2 German Shepherds on a beach with the San Francisco Bay in the background."
          placeholder="blur"
          className="rounded"
        />
        <Image
          src={fenderBass}
          alt="A close-up photo of Nico's left-handed Fender Precision Bass."
          placeholder="blur"
          className="rounded"
        />
        <Image
          src={nicoHeavyBag}
          alt="A photo of Nico kicking a heavy bag with a Muay Thai round kick."
          placeholder="blur"
          className="rounded"
        />
      </div>
    </main>
  );
}
