import Experiences from "@/components/Experiences";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Head>
        <title>Jitender&apos;s Portfolio</title>
      </Head>
      <Navbar />
      <Hero />
      <Experiences />
    </div>
  );
}
