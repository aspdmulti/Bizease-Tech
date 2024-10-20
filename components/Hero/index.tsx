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
      <section id="home" className="overflow-hidden pt-20 md:pt-20 xl:pt-20">
        <div className="min-h-screen bg-[url('/images/hero/hero.png')] bg-cover bg-[position:60%] bg-no-repeat text-white lg:bg-center">
          <div className="flex min-h-screen items-center from-black from-20% to-70% lg:bg-gradient-to-r lg:px-11">
            {language == "eng" ? (
              <div className="indo:hidden mx-4 flex-col rounded bg-black bg-opacity-90 p-3 lg:mx-0 lg:w-2/5 lg:bg-transparent lg:text-left">
                <p className=" my-3 text-2xl font-bold text-[#C64D27]">
                  Bizease Tech
                </p>
                <p className=" my-1 text-xl font-bold text-[#C64D27]">
                  Your All-in-One Software Solution
                </p>
                <p>
                  {`Do you still use paper or have many files on your computer for your business needs? 
              Do you sometimes feel overwhelmed or confused trying to track down those files? 
              Do you feel that commercially available software doesn't meet your needs? 
              We are the solution you've been looking for!`}
                </p>
              </div>
            ) : (
              <div className="mx-4 flex-col rounded bg-black bg-opacity-90 p-3 lg:mx-0 lg:w-2/5 lg:bg-transparent lg:text-left">
                <p className=" my-3 text-2xl font-bold text-[#C64D27]">
                  Bizease Tech
                </p>
                <p className=" my-1 text-xl font-bold text-[#C64D27]">
                  Your All-in-One Software Solution
                </p>
                <p>
                  {`Anda masih memakai kertas atau banyak file di komputer anda untuk kebutuhan bisnis anda ?
              Anda terkadang repot atau kebingunan menelusuri file-file anda tersebut ?
              Anda merasa software yang tersedia secara komersil tidak sesuai dengan kebutuhan anda ? Kami adalah jawaban anda !`}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
