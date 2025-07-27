"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "@/app/context/LanguageContext";
const About = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section
        id="highlight"
        className="overflow-hidden pt-20 lg:pt-25 xl:pt-30"
      >
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[750/750] rounded bg-gradient-to-t from-white to-[#F9E5D7] md:block md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              {language == "eng" ? (
                <>
                  <span className="font-medium uppercase text-black dark:text-white">
                    {/* <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  New
                </span>{" "} */}
                    Grow with Your Business
                  </span>
                  <h2 className="relative mb-6 text-2xl font-bold text-black dark:text-white xl:text-4xl">
                    A Complete Solution for {"   "}
                    <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                      Your Business Processes
                    </span>
                  </h2>
                  <p className=" text-justify">
                    Bizease Tech's services are all modular and adaptable to
                    your business needs. You can start by boosting your digital
                    presence with Bizease Website, or integrate all our services
                    to automate your business processes
                  </p>

                  <div className="mt-7.5 flex items-center gap-5">
                    <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                      <p className="text-metatitle2 font-semibold text-black dark:text-white">
                        01
                      </p>
                    </div>
                    <div className="w-3/4">
                      <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                        Custom-made, Applications tailored to your business
                        needs
                      </h3>
                      <p>
                        We know that every business is unique, even if they
                        operate in the same field. Therefore, we provide
                        application development services that can be tailored to
                        your business needs.
                      </p>
                    </div>
                  </div>
                  <div className="mt-7.5 flex items-center gap-5">
                    <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                      <p className="text-metatitle2 font-semibold text-black dark:text-white">
                        02
                      </p>
                    </div>
                    <div className="w-3/4">
                      <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                        Special prices for complete packages
                      </h3>
                      <p>
                        Use all our services to get special prices and let your
                        business processes run automatically.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <span className="font-medium uppercase text-black dark:text-white">
                    {/* <span className="mb-4 mr-4 inline-flex rounded-full bg-meta px-4.5 py-1 text-metatitle uppercase text-white ">
                  Baru
                </span>{" "} */}
                    Berkembang bersama Bisnis Anda
                  </span>
                  <h2 className="relative mb-6 text-2xl font-bold text-black dark:text-white xl:text-4xl">
                    Solusi Lengkap untuk {"   "}
                    <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                      Proses Bisnis Anda
                    </span>
                  </h2>
                  <p className=" text-justify">
                    Seluruh jasa Bizease Tech bersifat modular dan dapat
                    disesuaikan dengan kebutuhan bisnis Anda. Mulai dari sekedar
                    meningkatkan eksistensi bisnis Anda menggunakan Bizease
                    Website, hingga menggunakan seluruh jasa kami sehingga
                    proses bisnis Anda dapat berjalan secara otomatis.
                  </p>

                  <div className="mt-7.5 flex items-center gap-5">
                    <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                      <p className="text-metatitle2 font-semibold text-black dark:text-white">
                        01
                      </p>
                    </div>
                    <div className="w-3/4">
                      <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                        Custom-made, Aplikasi disesuaikan dengan kebutuhan
                        bisnis Anda
                      </h3>
                      <p className=" text-justify">
                        Kami paham bahwa setiap bisnis itu unik,meskipun
                        bergerak di bidang yang sama. Oleh karena itu, kami
                        menyediakan jasa pembuatan aplikasi yang dapat
                        disesuaikan dengan kebutuhan bisnis Anda.
                      </p>
                    </div>
                  </div>
                  <div className="mt-7.5 flex items-center gap-5">
                    <div className="flex h-15 w-15 items-center justify-center rounded-[50%] border border-stroke dark:border-strokedark dark:bg-blacksection">
                      <p className="text-metatitle2 font-semibold text-black dark:text-white">
                        02
                      </p>
                    </div>
                    <div className="w-3/4">
                      <h3 className="mb-0.5 text-metatitle2 text-black dark:text-white">
                        Harga spesial untuk paket lengkap
                      </h3>
                      <p className=" text-justify">
                        Pakai seluruh jasa kami untuk mendapatkan harga spesial
                        dan proses bisnis Anda dapat berjalan secara otomatis.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto mb-3 block aspect-[750/750] w-full rounded bg-gradient-to-t from-white to-[#F9E5D7] md:hidden md:w-1/2"
            >
              <Image
                src="/images/about/about-light-01.png"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-01.png"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section>
        <div className="mx-auto mt-8 max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-1/2"
            >
              {language == "eng" ? (
                <>
                  <h4 className="font-medium uppercase text-black dark:text-white">
                    Suitable for Multiple Devices
                  </h4>
                  <h2 className="relative mb-6 text-2xl font-bold text-black dark:text-white xl:text-4xl">
                    From Smartphone to PC, {"   "}
                    <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                      Fully Responsive
                    </span>
                  </h2>
                  <p>
                    Our software is fully responsive, ensuring a seamless user
                    experience on both PC and Smartphone devices for effortless
                    access to all features.
                  </p>
                </>
              ) : (
                <>
                  <h4 className="font-medium uppercase text-black dark:text-white">
                    Cocok untuk Berbagai Perangkat
                  </h4>
                  <h2 className="relative mb-6 text-2xl font-bold text-black dark:text-white xl:text-4xl">
                    Dari Smartphone hingga PC, {"   "}
                    <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                      Sepenuhnya Responsif
                    </span>
                  </h2>
                  <p className=" text-justify">
                    Perangkat lunak kami sepenuhnya responsif, memastikan
                    pengalaman pengguna yang mulus di perangkat PC dan
                    Smartphone untuk akses yang mudah ke semua fitur.
                  </p>
                </>
              )}
              {/* <div>
                <a
                  href="#"
                  className="group mt-7.5 inline-flex items-center gap-2.5 text-black hover:text-primary dark:text-white dark:hover:text-primary"
                >
                  <span className="duration-300 group-hover:pr-2">
                    Know More
                  </span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="currentColor"
                  >
                    <path d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z" />
                  </svg>
                </a>
              </div> */}
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right relative mx-auto block aspect-[750/750] w-full rounded bg-gradient-to-t from-white to-[#F9E5D7] md:w-1/2"
            >
              <Image
                src="/images/about/about-light-02.png"
                alt="About"
                className=" dark:hidden"
                fill
              />
              <Image
                src="/images/about/about-dark-02.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  );
};

export default About;
