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
                  title: "BIZEASE TECH SERVICES",
                  subtitle: "Step Up Your Business",
                  description: `Digitize your business so it can keep up with the digital age and become more efficient.`,
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
                  title: "JASA BIZEASE TECH",
                  subtitle: "Digitalisasikan Bisnis Anda",
                  description: `Digitalisasikan bisnis Anda agar bisnis Anda dapat mengikuti perkembangan zaman digital dan lebih efisien.`,
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
