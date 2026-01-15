"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import { useContext } from "react";
import { LanguageContext } from "@/app/context/LanguageContext";

const Footer = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
      <footer
        id="footer"
        className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection"
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-20 lg:py-25">
            <div className="flex flex-wrap gap-8 lg:justify-between lg:gap-0">
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
                className="animate_top w-1/2 lg:w-1/4"
              >
                <a href="/" className="relative">
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo.png"
                    alt="Logo"
                    className="my-auto w-1/5 dark:hidden"
                  />
                  <Image
                    width={110}
                    height={80}
                    src="/images/logo/logo.png"
                    alt="Logo"
                    className="hidden w-1/5 dark:block"
                  />
                </a>

                <p className="mb-10">Your All-in-One Software Solution</p>
              </motion.div>

              <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0 lg:w-2/3 xl:w-7/12">
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
                  className="animate_top"
                >
                  {language == "eng" ? (
                    <>
                      <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                        Quick Links
                      </h4>

                      <ul>
                        <li>
                          <a
                            href="#"
                            className="mb-3 inline-block hover:text-primary"
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="#features"
                            className="mb-3 inline-block hover:text-primary"
                          >
                            Our Services
                          </a>
                        </li>
                        <li>
                          <a
                            href="#highlight"
                            className="mb-3 inline-block hover:text-primary"
                          >
                            Highlight
                          </a>
                        </li>
                        <li>
                          <a
                            href="#pricing"
                            className="mb-3 inline-block hover:text-primary"
                          >
                            Pricing
                          </a>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                        Link Cepat
                      </h4>

                      <ul>
                        <li>
                          <a
                            href="#"
                            className="mb-3 inline-block hover:text-primary"
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="#features"
                            className="mb-3 inline-block hover:text-primary"
                          >
                            Jasa Kami
                          </a>
                        </li>
                        <li>
                          <a
                            href="#highlight"
                            className="mb-3 inline-block hover:text-primary"
                          >
                            Keunggulan
                          </a>
                        </li>
                        <li>
                          <a
                            href="#pricing"
                            className="mb-3 inline-block hover:text-primary"
                          >
                            Harga
                          </a>
                        </li>
                      </ul>
                    </>
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
                  transition={{ duration: 1, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="animate_top"
                >
                  {language == "eng" ? (
                    <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                      Contact Us
                    </h4>
                  ) : (
                    <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
                      Hubungi Kami
                    </h4>
                  )}

                  <ul>
                    <li>
                      <a
                        href="https://wa.me/6285711899575"
                        target="_blank"
                        className="mb-3 flex items-center gap-2 hover:text-primary"
                      >
                        <FaWhatsapp />
                        0857-1189-9575
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:bizeasetech@gmail.com"
                        target="_blank"
                        className="mb-3 flex items-center gap-2 hover:text-primary"
                      >
                        <FaEnvelope />
                        bizeasetech@gmail.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/bizeasetech/"
                        target="_blank"
                        className="mb-3 flex items-center gap-2 hover:text-primary"
                      >
                        <FaInstagram />
                        @bizeasetech
                      </a>
                    </li>
                  </ul>
                </motion.div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
