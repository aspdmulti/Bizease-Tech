"use client";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import FeaturesTabItem from "./FeaturesTabItem";
import featuresTabData from "./featuresTabData";
import { LanguageContext } from "@/app/context/LanguageContext";
import { motion } from "framer-motion";

const FeaturesTab = () => {
  const [currentTab, setCurrentTab] = useState("tabOne");
  const [openTabs, setOpenTabs] = useState<{ [key: string]: boolean }>({
    tabOne: true,
    tabTwo: false,
    tabThree: false,
  });
  const { language } = useContext(LanguageContext);

  const tabs = ["tabOne", "tabTwo", "tabThree"];
  const tabNames = ["Eksistensi", "Operasional", "Rekap Data"];
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Track screen size
  const [isLgUp, setIsLgUp] = useState<boolean>(true);

  useEffect(() => {
    const checkScreen = () => {
      setIsLgUp(window.innerWidth >= 1024);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Auto switch only on lg and up
  useEffect(() => {
    if (isLgUp) {
      startAutoSwitch();
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line
  }, [isLgUp]);

  const startAutoSwitch = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentTab((prevTab) => {
        const currentIndex = tabs.indexOf(prevTab);
        return tabs[(currentIndex + 1) % tabs.length];
      });
    }, 9000);
  };

  const handleTabClick = (tabId: string) => {
    setCurrentTab(tabId);
    if (isLgUp && intervalRef.current) {
      clearInterval(intervalRef.current); // stop auto-switch forever
      intervalRef.current = null;
    }
  };

  // Dropdown handler for mobile
  const handleDropdownClick = (tabId: string) => {
    setOpenTabs((prev) => ({
      ...prev,
      [tabId]: !prev[tabId],
    }));
  };

  return (
    <section className="relative pb-20 pt-18.5 lg:pb-22.5">
      <div className="relative mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="absolute -top-16 -z-1 mx-auto h-[350px] w-[90%]">
          <Image
            fill
            className="dark:hidden"
            src="/images/shape/shape-dotted-light.svg"
            alt="Dotted Shape"
          />
          <Image
            fill
            className="hidden dark:block"
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted Shape"
          />
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mb-10 px-4 text-center md:w-4/5 md:px-0  lg:w-2/3 xl:w-1/2"
        >
          {language === "eng" ? (
            <>
              <h2 className="mb-4 text-center text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Example Cases
              </h2>
              <p className="mx-auto text-center">
                Here are some cases that can be easily solved with our services.
              </p>
            </>
          ) : (
            <>
              <h2 className="mb-4 text-center text-3xl font-bold text-black dark:text-white xl:text-sectiontitle3">
                Contoh Kasus
              </h2>
              <p className="mx-auto text-center">
                Berikut adalah beberapa kasus yang dapat dengan mudah
                diselesaikan oleh jasa kami.
              </p>
            </>
          )}
        </motion.div>

        {/* Tabs for lg and up */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mb-7 hidden flex-wrap justify-center rounded-[10px] border border-stroke bg-white shadow-solid-5 dark:border-strokedark dark:bg-blacksection dark:shadow-solid-6 md:flex-nowrap md:items-center lg:flex lg:gap-7.5 xl:mb-21.5 xl:gap-12.5"
        >
          {tabs.map((tabId, index) => (
            <div
              key={tabId}
              onClick={() => handleTabClick(tabId)}
              className={`relative flex w-full cursor-pointer items-center gap-4 border-b border-stroke px-6 py-2 last:border-0 dark:border-strokedark md:w-auto md:border-0 xl:px-13.5 xl:py-5 ${
                currentTab === tabId
                  ? "active before:absolute before:bottom-0 before:left-0 before:h-1 before:w-full before:rounded-tl-[4px] before:rounded-tr-[4px] before:bg-primary"
                  : ""
              }`}
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-stroke dark:border-strokedark dark:bg-blacksection">
                <p className="text-metatitle3 font-medium text-black dark:text-white">
                  0{index + 1}
                </p>
              </div>
              <div className="md:w-3/5 lg:w-auto">
                <button className="text-sm font-medium text-black dark:text-white xl:text-regular">
                  {tabNames[index]}
                </button>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Dropdown for below lg */}
        <div className="flex flex-col gap-4 lg:hidden">
          {tabs.map((tabId, index) => (
            <div
              key={tabId}
              className="rounded-lg border border-stroke bg-white shadow dark:border-strokedark dark:bg-blacksection"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left"
                onClick={() => handleDropdownClick(tabId)}
                aria-expanded={openTabs[tabId]}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stroke text-metatitle3 font-medium text-black dark:border-strokedark dark:bg-blacksection dark:text-white">
                    0{index + 1}
                  </span>
                  <span className="text-base font-medium text-black dark:text-white">
                    {tabNames[index]}
                  </span>
                </div>
                <span className="ml-2 text-xl">
                  {openTabs[tabId] ? "▲" : "▼"}
                </span>
              </button>
              <div
                className={`${openTabs[tabId] ? "block" : "hidden"} px-4 pb-4`}
              >
                {featuresTabData
                  .filter((feature) => feature.id === tabId)
                  .map((feature, key) => (
                    <FeaturesTabItem featureTab={feature} key={key} />
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Content for lg and up */}
        <motion.div
          key={currentTab}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="animate_top mx-auto hidden max-w-c-1154 lg:block"
        >
          {featuresTabData.map((feature, key) => (
            <div
              className={feature.id === currentTab ? "block" : "hidden"}
              key={key}
            >
              <FeaturesTabItem featureTab={feature} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesTab;
