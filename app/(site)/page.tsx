import { Metadata } from "next";
import Hero from "@/components/Hero";
import Feature from "@/components/Features";
import About from "@/components/About";
import FunFact from "@/components/FunFact";
import Pricing from "@/components/Pricing";
import FeaturesTab from "@/components/FeaturesTab";

export const metadata: Metadata = {
  title: "Your All-in-One Software Solution",
  description:
    "Bizease Tech adalah pengembang software dan aplikasi SaaS yang membantu perusahaan dalam digitalisasi dan efisiensi operasional.",
  keywords:
    "pengembangan software, solusi SaaS, digitalisasi bisnis, aplikasi perusahaan, teknologi informasi",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <FeaturesTab />
      <About />
      <Pricing />
      <FunFact />
    </main>
  );
}
