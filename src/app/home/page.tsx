"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Animation from "./animation.tsx";
import CompanyLogo from "./CompanyLogo";

const easing = [0.6, -0.05, 0.01, 0.99];
const fadeInDown = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing,
    },
  },
};
const fadeInRight = {
  initial: { x: -30, opacity: 0 },
  animate: {
    x: 20,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing,
    },
  },
};

const fadeInUp = {
  initial: { y: -30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  const companies = [
    "microsoft.svg",
    "spotify.svg",
    "logo.svg",
    "tinder.svg",
    "tiktok.svg",
    "ethereum.svg",
    "heineken.svg",
    "linkedin.svg",
    "netflix.svg",
    "slack.svg",
    "soundcloud.svg",
    "nike.svg",
  ];
  return (
    <motion.div initial="initial" animate="animate">
      <div className="flex">
        <div className="h-screen bg-[#1c3534] w-1/2">
          <Animation
            tag="div"
            variants={fadeInRight}
            className="h-[16rem] relative"
          >
            <div className="rounded-full h-80 w-80 absolute top-[-8rem] left-[-10rem] bg-[#ff6d3f]"></div>
            <div className="rounded-full h-80 w-80 absolute top-[-8.4rem] left-[-11rem] bg-[#b7e4c7]"></div>
          </Animation>
          <Animation tag="div" variants={fadeInDown} className="px-20">
            <Animation
              tag="p"
              variants={fadeInDown}
              className="text-white text-2xl font-bold my-5"
            >
              −Hello
            </Animation>
            <p className="text-[3rem] text-white font-bold">
              Move forward to stand out from the crowd with me - my name is Yuto
              and I am a full-stack developer.
            </p>
            <p className="text-white text-xl font-bold my-5">
              Patientenzentrisch. Wissenschaftlich fundiert. Digital.
            </p>
            <div className="btn h-5 w-1/3 mt-10 bg-[#fc764d] hover:bg-[hsl(14,99%,60%)] text-white font-poppins">
              Learn more
            </div>
          </Animation>
        </div>
        <Animation
          tag="div"
          variants={fadeInDown}
          className="h-screen w-1/2 relative"
        >
          <Image src="/yuto4.png" alt="Picture of the author" layout="fill" />
        </Animation>
      </div>
      <div className="h-screen mx-auto pt-10 px-32">
        <Animation
          tag="p"
          variants={fadeInDown}
          className="text-2xl font-poppins font-bold mx-auto flex justify-center mb-10"
        >
          Our partner network - deeply anchored in science and research .
        </Animation>
        <Animation
          tag="div"
          variants={stagger}
          className="w-full flex flex-wrap gap-16"
        >
          {companies.map((company) => {
            return (
              <CompanyLogo
                variants={fadeInDown}
                image={company}
                key="company"
              />
            );
          })}
        </Animation>
      </div>
    </motion.div>
  );
}
