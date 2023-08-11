"use client";

import React from "react";
import CompanyLogo from "./CompanyLogo";
import { AiFillCheckCircle, AiOutlineMail } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import Impact from "./Impact";
import Form from "./Form";
import { IconContext } from "react-icons";
import Link from "next/link";
import AnimateInView from "../common/AnimateInView";
import variants from "../common/Animation";
import { motion } from "framer-motion";

export default function Home() {
  const companies = [
    { id: 1, logo: "./microsoft.svg" },
    { id: 2, logo: "./spotify.svg" },
    { id: 3, logo: "./logo.svg" },
    { id: 4, logo: "./tinder.svg" },
    { id: 5, logo: "./tiktok.svg" },
    { id: 6, logo: "./ethereum.svg" },
    { id: 7, logo: "./heineken.svg" },
    { id: 8, logo: "./linkedin.svg" },
    { id: 9, logo: "./netflix.svg" },
    { id: 10, logo: "./slack.svg" },
    { id: 11, logo: "./soundcloud.svg" },
    { id: 12, logo: "./nike.svg" },
  ];

  return (
    <>
      <motion.div initial="initial" animate="animate">
        <div className="lg:flex">
          <div className="h-full bg-[#1c3534] lg:w-1/2 pb-20">
            <AnimateInView
              tag="div"
              variants={variants.fadeInRight}
              className="hidden lg:inline lg:h-[16rem] relative"
            >
              <div className="rounded-full h-30 w-30 lg:h-80 lg:w-80 absolute top-[-8rem] left-[-10rem] bg-[#ff6d3f]"></div>
              <div className="rounded-full h-30 w-30 lg:h-80 lg:w-80 absolute top-[-8.4rem] left-[-11rem] bg-[#b7e4c7]"></div>
            </AnimateInView>
            <AnimateInView
              tag="div"
              variants={variants.fadeInDown}
              className="px-5 lg:px-20 pt-10 lg:pt-10 lg:mt-40"
            >
              <AnimateInView
                tag="p"
                variants={variants.fadeInDown}
                className="text-white text-2xl font-bold mb-5"
              >
                −Hello
              </AnimateInView>
              <p className="text-[2rem] lg:text-[3rem] text-white font-bold">
                Move forward to stand out from the crowd with me - my name is
                Yuto and I am a full-stack developer.
              </p>
              <p className="text-white text-xl font-bold my-5">
                Stay with client.
              </p>
              <div className="flex justify-center lg:inline-block lg:w-full">
                <Link
                  href="https://bucolic-faloodeh-8def2c.netlify.app/"
                  className="btn h-5 w-1/2 lg:w-1/3 mt-10 bg-[#fc764d] hover:bg-[hsl(14,99%,60%)] text-white"
                >
                  Learn more
                </Link>
              </div>
            </AnimateInView>
          </div>
          <AnimateInView
            tag="div"
            variants={variants.fadeInDown}
            className="lg:w-1/2 relative"
          >
            <img
              src="./dog.jpeg"
              alt="Picture of the author"
              className="lg:absolute h-full w-full object-cover"
            />
          </AnimateInView>
        </div>
        <div className="h-full mx-auto pt-10 lg:px-32">
          <AnimateInView
            tag="p"
            variants={variants.fadeInDown}
            className="mx-5 text-2xl  font-bold lg:mx-auto lg:flex justify-center mb-10"
          >
            Our partner network - deeply anchored in science and research .
          </AnimateInView>
          <AnimateInView
            tag="div"
            variants={variants.stagger}
            className="w-full flex flex-wrap gap-8 mx-5 lg:mx-0 lg:gap-16"
          >
            {companies.map((company) => {
              return (
                <CompanyLogo
                  variants={variants.fadeInDown}
                  image={company.logo}
                  key={company.id}
                />
              );
            })}
          </AnimateInView>
        </div>
        <div className="h-full mx-auto pt-10 lg:px-32 lg:flex justify-center pb-10">
          <AnimateInView
            tag="div"
            variants={variants.scaleUp}
            className="mx-5 lg:mx-0 lg:w-1/2 lg:flex items-center justify-center"
          >
            <img
              src="./phone-control.png"
              alt="phone-control"
              className="rounded-2xl mb-10 lg:mb-0 lg:h-10/12 lg:w-2/3"
            ></img>
          </AnimateInView>
          <AnimateInView
            tag="div"
            variants={variants.fadeInUp}
            className="lg:w-1/2"
          >
            <div className="lg:w-3/4 mx-10">
              <p className="font-bold  text-[#055F5B] text-lg">
                - DIGITAL PATIENT EDUCATION
              </p>
              <h2 className="font-bold  text-primary tracking-wide text-4xl my-5">
                Achieve a more confident approach to rheumatism!
              </h2>
              <p className=" text-[#6F7278] text-[18px] mb-5">
                Digital, interactive and based on the latest scientific
                findings: Our courses on rheumatism. We will help you to
                understand your illness better and to learn to deal with it more
                confidently.
              </p>
              <ul className=" text-primary text-[18px] mb-5 font-medium lg:flex lg:flex-col gap-10 lg:gap-5">
                <li className="flex items-center gap-3">
                  <IconContext.Provider
                    value={{ color: "primary", className: "text-3xl" }}
                  >
                    <AiFillCheckCircle />
                  </IconContext.Provider>
                  <span className="text-lg w-10/12">
                    <span>Scientifically based</span>
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <IconContext.Provider
                    value={{ color: "primary", className: "text-3xl" }}
                  >
                    <AiFillCheckCircle />
                  </IconContext.Provider>
                  <span className="text-lg w-10/12">
                    Works in browser and on mobile devices
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <IconContext.Provider
                    value={{ color: "primary", className: "text-3xl" }}
                  >
                    <AiFillCheckCircle />
                  </IconContext.Provider>
                  <span className="text-lg w-10/12">
                    Illness coping and disease management courses
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <IconContext.Provider
                    value={{ color: "primary", className: "text-3xl" }}
                  >
                    <AiFillCheckCircle />
                  </IconContext.Provider>
                  <span className="text-lg w-10/12">
                    In-depth studies on rheumatoid arthritis
                  </span>
                </li>
              </ul>
              <div className="flex justify-center lg:inline-block lg:w-full">
                <button className="rounded-full w-2/3 lg:w-1/2 h-16 bg-[#055f5b] text-white hover:bg-[#0c1c1b] mt-5">
                  Secure Access Now!!
                </button>
              </div>
            </div>
          </AnimateInView>
        </div>
        <div className="pb-10 lg:flex pt-10 bg-[#fbf9f8] justify-center">
          <div className="h-full flex justify-center lg:w-1/2">
            <div className="w-10/12 lg:flex lg:flex-wrap justify-center lg:justify-end lg:h-80 gap-0 lg:gap-10">
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
          <div className="h-full w-full lg:block lg:w-1/2 pt-10">
            <div className="mx-5 w-9/12 lg:mx-0 lg:w-8/12 ml-10">
              <p className="font-bold text-xl ">- AN INCREASING PROBLEM</p>
              <h2 className="text-4xl lg:text-[38px] leading-12 my-5 lg:my-10 font-bold">
                <span className="text-primary">
                  Due to the lack of doctors, patients often{" "}
                </span>
                <span className="text-success">
                  cannot be fully informed about their rheumatism
                </span>{" "}
                .
              </h2>
              <p className="text-secondary text-xl leading-8 font-medium">
                More and more people are suffering from systemic rheumatic
                diseases and cannot be fully cared for and cared for due to
                scarce resources - with dramatic consequences for those affected
                and the German health system.
              </p>
            </div>
          </div>
        </div>
        <div className="h-full bg-[#fbf9f8] mx-auto pt-10 lg:lg:px-32 lg:flex justify-center pb-10">
          <AnimateInView
            tag="div"
            variants={variants.fadeInUp}
            className="lg:w-5/12 lg:flex justify-center mb-10 lg:mb-0"
          >
            <div className="">
              <p className="mx-10 lg:mx-0 font-bold  text-[#055F5B] text-lg">
                - CONTACT
              </p>
              <h2 className="mx-10 lg:mx-0 w-10/12 font-bold  text-primary tracking-wide text-4xl my-5">
                We look forward to hearing your lovely message!
              </h2>
              <p className=" w-10/12 mx-10 lg:mx-0 text-[#6F7278] text-[18px] mb-5">
                Would you like to find out more about us, do you have any
                questions or suggestions? Please send us an email or use our
                contact form.
              </p>
              <div className="flex justify-center lg:inline-block lg:w-full">
                <button className="flex rounded-full w-8/12 lg:w-7/12 h-16 bg-[#055f5b] text-xl text-white hover:bg-[#0c1c1b] mt-5 lg:flex gap-3 items-center">
                  <IconContext.Provider
                    value={{
                      color: "white",
                      className: "text-2xl lg:text-4xl ml-6",
                    }}
                  >
                    <MdMail />
                  </IconContext.Provider>
                  <Link
                    href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=geek.yuto%40gmail.com"
                    className="text-lg lg:ml-1"
                  >
                    geek.yuto@gmail.com
                  </Link>
                </button>
              </div>
            </div>
          </AnimateInView>
          <AnimateInView
            tag="div"
            variants={variants.fadeInDown}
            className="lg:w-1/2"
          >
            <Form />
          </AnimateInView>
        </div>
      </motion.div>
    </>
  );
}
