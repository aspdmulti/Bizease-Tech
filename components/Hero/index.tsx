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
                  {`Are you still relying on paper or scattered files on your
                  computer for your business needs? Do you often find it
                  troublesome or confusing to track your documents? Do
                  commercially available software solutions fail to meet your
                  specific requirements? We have the perfect solution for you!`}
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
                  {`Masih mengandalkan kertas atau file yang berserakan di
                  komputer untuk kebutuhan bisnis Anda? Sering merasa repot atau
                  bingung saat mencari dokumen? Software komersial yang ada
                  tidak sesuai dengan kebutuhan Anda? Kami adalah solusinya!`}
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
