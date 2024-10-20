import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FunFact from "@/components/FunFact";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Your All-in-One Software Solution",
  description: "Software / program developer",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <About />
      <Pricing />
      <FunFact />
    </main>
  );
}
