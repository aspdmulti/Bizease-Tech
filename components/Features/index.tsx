"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import { LanguageContext } from "@/app/context/LanguageContext";
import { useContext } from "react";
import featuresDataIndo from "./featuresDataIndo";

const Feature = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="pt-20 lg:pt-25 xl:pt-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          {language == "eng" ? (
            <>
              <SectionHeader
                headerInfo={{
                  title: "BIZEASE TECH FEATURES",
                  subtitle: "Step Up Your Business",
                  description: `Digitize your business with our software so you no longer need to store many files and documents. Access everything with just one application.`,
                }}
              />
              {/* <!-- Section Title End --> */}

              <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
                {/* <!-- Features item Start --> */}

                {featuresData.map((feature, key) => (
                  <SingleFeature feature={feature} key={key} />
                ))}
                {/* <!-- Features item End --> */}
              </div>
            </>
          ) : (
            <>
              <SectionHeader
                headerInfo={{
                  title: "FITUR BIZEASE TECH",
                  subtitle: "Digitalisasikan Bisnis Anda",
                  description: `Digitalisasikan bisnis Anda dengan perangkat lunak kami sehingga Anda tidak perlu lagi menyimpan banyak berkas dan dokumen. Akses semuanya hanya dengan satu aplikasi.`,
                }}
              />
              {/* <!-- Section Title End --> */}

              <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
                {/* <!-- Features item Start --> */}

                {featuresDataIndo.map((feature, key) => (
                  <SingleFeature feature={feature} key={key} />
                ))}
                {/* <!-- Features item End --> */}
              </div>
            </>
          )}
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
