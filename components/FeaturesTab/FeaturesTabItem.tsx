import React, { useContext } from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";
import { motion } from "framer-motion";
import { LanguageContext } from "@/app/context/LanguageContext";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const {
    image1,
    desc1,
    desc2,
    image2,
    image3,
    desc3,
    desc1ind,
    desc2ind,
    desc3ind,
  } = featureTab;
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <>
      <div className="flex flex-col items-center justify-between gap-3 xl:flex-row xl:gap-0">
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
          className="animate_top w-80 text-center"
        >
          <Image
            src={image1}
            alt=""
            className="m-auto w-80 rounded-t"
            width={500}
            height={500}
          />
          {language == "eng" ? (
            <p className="flex h-24 items-center rounded-b bg-[#F9E5D7] p-2 text-lg text-black lg:text-xl">
              {desc1}
            </p>
          ) : (
            <p className="flex h-24 items-center rounded-b bg-[#F9E5D7] p-2 text-lg text-black lg:text-xl">
              {desc1ind}
            </p>
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
          className="animate_top w-80 text-center"
        >
          <Image
            src={image2}
            className="m-auto w-80 rounded-t"
            alt=""
            width={500}
            height={500}
          />
          {language == "eng" ? (
            <p className="flex h-24 items-center rounded-b bg-[#F9E5D7] p-2 text-lg text-black lg:text-xl">
              {desc2}
            </p>
          ) : (
            <p className="flex h-24 items-center rounded-b bg-[#F9E5D7] p-2 text-lg text-black lg:text-xl">
              {desc2ind}
            </p>
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
          className="animate_top w-80 text-center"
        >
          <Image
            src={image3}
            className="m-auto w-80 rounded-t"
            alt=""
            width={500}
            height={500}
          />
          {language == "eng" ? (
            <p className="flex h-24 items-center rounded-b bg-[#F9E5D7] p-2 text-lg text-black lg:text-xl">
              {desc3}
            </p>
          ) : (
            <p className="flex h-24 items-center rounded-b bg-[#F9E5D7] p-2 text-lg text-black lg:text-xl">
              {desc3ind}
            </p>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
