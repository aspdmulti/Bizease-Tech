"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "@/app/context/LanguageContext";

const FunFact = () => {
  const { language } = useContext(LanguageContext);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const containerWidth = useRef(0);
  useEffect(() => {
    if (containerRef.current) {
      containerWidth.current = containerRef.current.scrollWidth / 2;
      animate(x, [-containerWidth.current, 0], {
        ease: "linear",
        duration: 30,
        repeat: Infinity,
        repeatType: "loop",
      });
    }
  }, [x]);

  const clients = [
    {
      src: "/images/shape/a-twin.png",
      eng: "Cafe & Bistro",
      id: "Kafe & Bistro",
    },
    { src: "/images/shape/beta.png", eng: "Water Supplier", id: "PDAM Swasta" },
    { src: "/images/shape/karimata.png", eng: "Restaurant", id: "Restoran" },
    {
      src: "/images/shape/qisthi.png",
      eng: "Catering Needs Supplier",
      id: "Supplier Kebutuhan Katering",
    },
    {
      src: "/images/shape/infinity.png",
      eng: "Digital Marketing Agency",
      id: "Digital Marketing Agency",
    },
    {
      src: "/images/shape/dewata.png",
      eng: "Travel & Tour",
      id: "Travel & Tour",
    },
    {
      src: "/images/shape/savorindo.png",
      eng: "Catering Service",
      id: "Catering Service",
    },
  ];
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section id="clients" className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0">
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#F9E5D7] py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          <Image
            width={335}
            height={384}
            src="/images/shape/shape-04.png"
            alt="Man"
            className="absolute -left-0 -top-20 -z-1 w-40 lg:left-15"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-light-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 dark:hidden"
          />
          <Image
            fill
            src="/images/shape/shape-dotted-dark-02.svg"
            alt="Dotted"
            className="absolute left-0 top-0 -z-1 hidden dark:block"
          />

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            {language == "eng" ? (
              <>
                <h2 className=" mb-4 ml-45 text-left text-3xl font-bold text-black dark:text-white xl:ml-0 xl:text-center xl:text-sectiontitle3">
                  Our Satisfied Clients
                </h2>
                <p className="ml-45 text-left lg:w-11/12 xl:mx-auto xl:text-center">
                  Here is a list of some clients who have trusted us.
                </p>
              </>
            ) : (
              <>
                <h2 className=" mb-4 ml-45 text-left text-3xl font-bold text-black dark:text-white xl:ml-0 xl:text-center xl:text-sectiontitle3">
                  Beberapa Klien Kami
                </h2>
                <p className="ml-45 text-left lg:w-11/12 xl:mx-auto xl:text-center">
                  Berikut adalah beberapa klien yang telah mempercayai kami.
                </p>
              </>
            )}
          </motion.div>

          <div className="relative w-full overflow-hidden">
            <motion.div
              ref={containerRef}
              style={{ x }}
              className="flex w-max space-x-8"
            >
              {[...clients, ...clients].map((client, index) => (
                <div key={index} className="w-48 flex-shrink-0 text-center">
                  <Image
                    alt=""
                    width={500}
                    height={500}
                    src={client.src}
                    className="m-auto w-28 lg:w-32"
                  />
                  <p className="text-md lg:text-lg">
                    {language === "eng" ? client.eng : client.id}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
