import React from "react";
import { Feature } from "@/types/feature";
import { motion } from "framer-motion";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description, bgColor, suitability } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-7.5 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div
          className={`relative flex h-16 w-16 items-center justify-center rounded-[4px] ${
            bgColor ?? "bg-[#C64D27]"
          }`}
        >
          <div className="text-3xl text-white">{icon}</div>
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-2xl">
          {title}
        </h3>
        <p className="mb-2">{description}</p>
        <div>{suitability}</div>
      </motion.div>
    </>
  );
};

export default SingleFeature;
