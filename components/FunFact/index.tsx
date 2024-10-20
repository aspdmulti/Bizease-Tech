"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "@/app/context/LanguageContext";

const FunFact = () => {
  const { language, setLanguage } = useContext(LanguageContext);
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
            className="absolute -left-15 -top-25 -z-1 lg:left-0"
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

          <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
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
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <img src="/images/shape/a-twin.png" className="m-auto w-36" />
              {language == "eng" ? (
                <p className="text-lg lg:text-para2">Cafe & Bistro</p>
              ) : (
                <p className="text-lg lg:text-para2">Kafe & Bistro</p>
              )}
            </motion.div>
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
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <img src="/images/shape/beta.png" className="m-auto w-36" />
              {language == "eng" ? (
                <p className="text-lg lg:text-para2">Water Supplier</p>
              ) : (
                <p className="text-lg lg:text-para2">PDAM Swasta</p>
              )}
            </motion.div>
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
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <img src="/images/shape/karimata.png" className="m-auto w-36" />
              {language == "eng" ? (
                <p className="text-lg lg:text-para2">Restaurant</p>
              ) : (
                <p className="text-lg lg:text-para2">Restoran</p>
              )}
            </motion.div>
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
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            >
              <img src="/images/shape/qisthi.png" className="m-auto w-36" />
              {language == "eng" ? (
                <p className="text-lg lg:text-para2">Catering Needs Supplier</p>
              ) : (
                <p className="text-lg lg:text-para2">
                  Supplier Kebutuhan Katering
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
