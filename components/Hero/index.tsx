"use client";
import { LanguageContext } from "@/app/context/LanguageContext";
import { useContext } from "react";

const Hero = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section id="home" className="overflow-hidden">
        <div className="min-h-screen bg-[url('/images/hero/hero2.png')] bg-cover bg-[position:60%] bg-no-repeat text-black lg:bg-[url('/images/hero/hero.png')] lg:bg-center">
          <div className="flex min-h-screen bg-[linear-gradient(to_bottom,_white_30%,_transparent_100%)] text-center lg:bg-none lg:px-11 lg:pt-10 lg:text-left">
            {language == "eng" ? (
              <div className="indo:hidden mx-4 mt-30 flex-col rounded bg-opacity-90 p-3 lg:mx-0 lg:mt-0 lg:pr-50  lg:text-left">
                <p className="mb-3 mt-19 text-3xl font-bold text-[#C64D27] lg:mb-5 lg:text-5xl">
                  Bizease Tech
                </p>
                <p className="my-1 text-lg font-bold text-black lg:text-2xl">
                  The right solution for your business digitalization, from
                  website, operational application, human resources application,
                  to finance application.
                </p>
              </div>
            ) : (
              <div className="mx-4 mt-16 flex-col rounded bg-opacity-90 p-3 lg:mx-0 lg:mt-0 lg:pr-50  lg:text-left">
                <p className="mb-3 mt-19 text-3xl font-bold text-[#C64D27] lg:mb-5 lg:text-5xl">
                  Bizease Tech
                </p>
                <p className="my-1 mb-5 text-lg font-bold text-black lg:text-2xl">
                  Solusi tepat digitalisasi bisnis Anda, mulai dari website,
                  aplikasi operasional, aplikasi sumber daya manusia, hingga
                  aplikasi keuangan.
                </p>
                <a
                  href="https://wa.me/6285711899575"
                  target="_blank"
                  aria-label="WhatsApp"
                  className=" rounded bg-[#C64D27] px-4 py-2 text-white"
                >
                  Konsultasi Sekarang
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
