"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Animation from "./animation.tsx";
import CompanyLogo from "./CompanyLogo";
import { AiFillCheckCircle, AiOutlineMail } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import Impact from "./Impact";
import Form from "./Form";
import { IconContext } from "react-icons";

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

const scaleUp = {
  initial: { scale: 0.4, opacity: 0 },
  animate: {
    scale: 1,
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
      <div className="h-full mx-auto pt-10 px-32">
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
      <div className="h-full mx-auto pt-10 px-32 flex justify-center pb-10">
        <Animation
          tag="div"
          variants={scaleUp}
          className="w-1/2 flex items-center justify-center"
        >
          <Image
            src="/phone-control.png"
            width="500"
            height="600"
            alt="phone-control"
            className="rounded-2xl"
          ></Image>
        </Animation>
        <Animation tag="div" variants={fadeInUp} className="w-1/2">
          <div className="w-3/4">
            <p className="font-bold font-poppins text-[#055F5B] text-lg">
              - DIGITAL PATIENT EDUCATION
            </p>
            <h2 className="font-bold font-poppins text-primary tracking-wide text-4xl my-5">
              Achieve a more confident approach to rheumatism!
            </h2>
            <p className="font-poppins text-[#6F7278] text-[18px] mb-5">
              Digital, interactive and based on the latest scientific findings:
              Our courses on rheumatism. We will help you to understand your
              illness better and to learn to deal with it more confidently.
            </p>
            <ul className="font-poppins text-primary text-[18px] mb-5 font-medium flex flex-col gap-5">
              <li className="flex items-center gap-3">
                <IconContext.Provider
                  value={{ color: "primary", className: "text-3xl" }}
                >
                  <AiFillCheckCircle />
                </IconContext.Provider>
                <span>Scientifically based</span>
              </li>
              <li className="flex items-center gap-3">
                <IconContext.Provider
                  value={{ color: "primary", className: "text-3xl" }}
                >
                  <AiFillCheckCircle />
                </IconContext.Provider>
                Works in browser and on mobile devices
              </li>
              <li className="flex items-center gap-3">
                <IconContext.Provider
                  value={{ color: "primary", className: "text-3xl" }}
                >
                  <AiFillCheckCircle />
                </IconContext.Provider>
                Illness coping and disease management courses
              </li>
              <li className="flex items-center gap-3">
                <IconContext.Provider
                  value={{ color: "primary", className: "text-3xl" }}
                >
                  <AiFillCheckCircle />
                </IconContext.Provider>
                In-depth studies on rheumatoid arthritis and Bechterew disease
              </li>
            </ul>
            <button className="rounded-full w-1/2 h-16 bg-[#055f5b] text-white hover:bg-[#0c1c1b] mt-5">
              Secure Access Now!!
            </button>
          </div>
        </Animation>
      </div>
      <div className="h-full pb-10 flex pt-10 bg-[#fbf9f8]">
        <div className="flex justify-center">
          <div className="w-2/3 flex flex-wrap h-80">
            <Impact
              title=">6 million"
              content="Those affected alone in Germany."
            />
            <Impact
              title="+36%"
              content="Number of patients within 10 years."
            />
            <Impact
              title="2x"
              content="more specialists are needed as of today."
            />
            <Impact
              title="~7 mins"
              content="Duration of an average doctor-patient conversation."
            />
          </div>
        </div>
        <div className="w-1/2">
          <div className="w-2/3">
            <p className="font-bold text-xl font-poppins">
              - AN INCREASING PROBLEM
            </p>
            <h2 className="text-[38px] leading-12 my-10 font-bold">
              <span className="text-primary">
                Due to the lack of doctors, patients often
              </span>
              <span className="text-">
                cannot be fully informed about their rheumatism .
              </span>
            </h2>
            <p className="text-secondary text-xl leading-8 font-medium">
              More and more people are suffering from systemic rheumatic
              diseases and cannot be fully cared for and cared for due to scarce
              resources - with dramatic consequences for those affected and the
              German health system.
            </p>
          </div>
        </div>
      </div>
      <div className="h-full bg-[#fbf9f8] mx-auto pt-10 px-32 flex justify-center pb-10">
        <Animation
          tag="div"
          variants={fadeInUp}
          className="w-1/2 flex justify-center"
        >
          <div className="w-3/4">
            <p className="font-bold font-poppins text-[#055F5B] text-lg">
              - CONTACT
            </p>
            <h2 className="w-8/12 font-bold font-poppins text-primary tracking-wide text-4xl my-5">
              We look forward to hearing your lovely message!
            </h2>
            <p className=" w-8/12 font-poppins text-[#6F7278] text-[18px] mb-5">
              Would you like to find out more about us, do you have any
              questions or suggestions? Please send us an email or use our
              contact form.
            </p>
            <button className="rounded-full w-1/2 h-16 bg-[#055f5b] text-xl text-white hover:bg-[#0c1c1b] mt-5 flex gap-3 items-center">
              <IconContext.Provider
                value={{ color: "white", className: "text-4xl ml-6" }}
              >
                <MdMail />
              </IconContext.Provider>
              geek.yuto@gmail.com
            </button>
          </div>
        </Animation>
        <Animation tag="div" variants={fadeInDown} className="w-1/2">
          <Form />
        </Animation>
      </div>
    </motion.div>
  );
}
