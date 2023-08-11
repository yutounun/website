"use client";

import React from "react";
import Explanation from "../common/Explanation";
import AnimateInView from "../common/AnimateInView";
import variants from "../common/Animation";
import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <motion.div initial="initial" animate="animate">
        <div className="bg-primary pt-10 flex justify-center font-sans">
          <div className="mx-10 lg:mx-0 lg:w-4/12 my-10 flex justify-center flex-col items-center">
            <img
              src="./logo-white.svg"
              alt="logo"
              className="ml-8 lg:ml-10 flex justify-center"
            />
            <h1 className="text-4xl font-extrabold my-5 text-white">
              SplitSip
            </h1>
            <p className="text-2xl my-5 text-white">
              From Berlin into the world - for smarter, digital care in
              rheumatology.
            </p>
            <div className="mt-5 mb-3 lg:mb-0 flex-col lg:flex lg:flex-row gap-5">
              <button className="btn bg-primary text-white border border-success">
                Meet the team
              </button>
              <button className="btn bg-success text-white border border-white">
                Join the team
              </button>
            </div>
          </div>
        </div>
        <div className="block lg:flex lg:justify-center lg:gap-32 mx-10 my-10">
          <Explanation
            subtitle="BACKGROUND"
            content="Started as a patient initiative, we are now developing solutions for tomorrow's rheumatology in a team of six, made up of patients who are themselves affected, business economists, psychologists and software developers, together with self-help organisations, rheumatologists and health care providers."
            title="By patients for patients."
            className="w-full lg:w-1/2 lg:flex lg:justify-end lg:mt-40"
          />
          <AnimateInView
            tag="div"
            variants={variants.scaleUp}
            className="w-dull lg:w-1/2"
          >
            <img
              src="./colleagues.png"
              alt="colleagues"
              className="rounded-2xl mb-10 lg:mb-0 h-full w-full lg:h-10/12 lg:w-2/3"
            />
          </AnimateInView>
        </div>
        <div className="block lg:flex lg:justify-center lg:gap-32 mx-10 my-10">
          <AnimateInView
            variants={variants.scaleUp}
            tag="div"
            className="w-full lg:flex lg:justify-end lg:w-1/2"
          >
            <img
              src="./colleagues.png"
              alt="colleagues"
              className="rounded-2xl mb-10 lg:mb-0 h-full w-full lg:h-10/12 lg:w-2/3"
            />
          </AnimateInView>
          <Explanation
            subtitle="BACKGROUND"
            content="Started as a patient initiative, we are now developing solutions for tomorrow's rheumatology in a team of six, made up of patients who are themselves affected, business economists, psychologists and software developers, together with self-help organisations, rheumatologists and health care providers."
            title="By patients for patients."
            className="w-full lg:w-1/2 lg:flex lg:justify-start lg:mt-40"
            btn
          />
        </div>
      </motion.div>
    </>
  );
};

export default page;
