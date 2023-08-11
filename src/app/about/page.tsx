"use client";

import React from "react";
import Explanation from "../common/Explanation";
import AnimateInView from "../common/AnimateInView";
import variants from "../common/Animation";
import { motion } from "framer-motion";
import { Link as Scroll } from "react-scroll";
import Member from "./Member";
import BasicButton from "../common/BasicButton";

const About = () => {
  const experts = [
    {
      id: 1,
      tag: "Technology",
      name: "Kevin Parker",
      positions: ["Tech Advisor", "System Analyst"],
      image: "https://source.unsplash.com/featured/?portrait,face,11",
    },
    {
      id: 2,
      tag: "Business",
      name: "Laura Stone",
      positions: ["Business Strategist", "Corporate Planner"],
      image: "https://source.unsplash.com/featured/?portrait,face,12",
    },
    {
      id: 3,
      tag: "Design",
      name: "Nathan Drake",
      positions: ["Design Consultant", "Branding Specialist"],
      image: "https://source.unsplash.com/featured/?portrait,face,13",
    },
    {
      id: 4,
      tag: "Finance",
      name: "Sarah White",
      positions: ["Financial Advisor", "Investment Planner"],
      image: "https://source.unsplash.com/featured/?portrait,face,14",
    },
    {
      id: 5,
      tag: "Legal",
      name: "Tom Brown",
      positions: ["Legal Counsel", "Contract Specialist"],
      image: "https://source.unsplash.com/featured/?portrait,face,15",
    },
    {
      id: 6,
      tag: "Marketing",
      name: "Rebecca Turner",
      positions: ["Marketing Expert", "Ad Strategist"],
      image: "https://source.unsplash.com/featured/?portrait,face,16",
    },
    {
      id: 7,
      tag: "Sales",
      name: "Robert Smith",
      positions: ["Sales Specialist", "Lead Generator"],
      image: "https://source.unsplash.com/featured/?portrait,face,17",
    },
    {
      id: 8,
      tag: "Support",
      name: "Olivia Johnson",
      positions: ["Support Guru", "Helpdesk Manager"],
      image: "https://source.unsplash.com/featured/?portrait,face,18",
    },
    {
      id: 9,
      tag: "Product",
      name: "Luke Wilson",
      positions: ["Product Manager", "Product Strategist"],
      image: "https://source.unsplash.com/featured/?portrait,face,19",
    },
    {
      id: 10,
      tag: "Innovation",
      name: "Chloe Davis",
      positions: ["Innovation Lead", "R&D Specialist"],
      image: "https://source.unsplash.com/featured/?portrait,face,20",
    },
  ];

  const members = [
    {
      id: 1,
      tag: "Team Lead",
      name: "John Doe",
      positions: ["CEO", "Co-founder"],
    },
    {
      id: 2,
      tag: "Developer",
      name: "Jane Smith",
      positions: ["Frontend Developer", "UI Designer"],
      image: "https://source.unsplash.com/featured/?portrait,face,2",
    },
    {
      id: 3,
      tag: "Designer",
      name: "Alice Johnson",
      positions: ["UX/UI Designer", "Graphic Designer"],
      image: "https://source.unsplash.com/featured/?portrait,face,3",
    },
    {
      id: 4,
      tag: "Manager",
      name: "Bob Williams",
      positions: ["Project Manager", "Scrum Master"],
      image: "https://source.unsplash.com/featured/?portrait,face,4",
    },
    {
      id: 5,
      tag: "Developer",
      name: "Charlie Brown",
      positions: ["Backend Developer", "API Specialist"],
      image: "https://source.unsplash.com/featured/?portrait,face,5",
    },
    {
      id: 6,
      tag: "HR",
      name: "Debbie Jones",
      positions: ["Human Resources", "Recruiter"],
      image: "https://source.unsplash.com/featured/?portrait,face,6",
    },
    {
      id: 7,
      tag: "Marketing",
      name: "Evan Smith",
      positions: ["Marketing Head", "Ad Strategist"],
      image: "https://source.unsplash.com/featured/?portrait,face,7",
    },
    {
      id: 8,
      tag: "Sales",
      name: "Fiona Green",
      positions: ["Sales Representative", "Lead Generator"],
      image: "https://source.unsplash.com/featured/?portrait,face,8",
    },
    {
      id: 9,
      tag: "Support",
      name: "George Turner",
      positions: ["Customer Support", "Technical Assistant"],
      image: "https://source.unsplash.com/featured/?portrait,face,9",
    },
    {
      id: 10,
      tag: "Intern",
      name: "Hannah White",
      positions: ["Intern", "Research Assistant"],
      image: "https://source.unsplash.com/featured/?portrait,face,10",
    },
  ];

  return (
    <>
      <motion.div initial="initial" animate="animate" className="font-sans">
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
            <div className="mt-5 mb-3 lg:mb-0 flex-col flex lg:flex-row gap-5 lg:w-full justify-center">
              <Scroll
                to="team"
                smooth={true}
                duration={600}
                offset={-30}
                className="lg:w-52"
              >
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="btn w-52 lg:w-full bg-primary text-white border border-success hover:bg-primary hover:text-white hover:border-success"
                >
                  Meet the team
                </motion.button>
              </Scroll>
              <Scroll
                to="experts"
                smooth={true}
                duration={600}
                offset={-30}
                className="lg:w-52"
              >
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="btn w-52 lg:w-full bg-success text-white border border-white hover:bg-success hover:text-white"
                >
                  meet the experts
                </motion.button>
              </Scroll>
            </div>
          </div>
        </div>
        <div className="h-full bg-gray-10 py-10">
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
        </div>
        <AnimateInView tag="div" variants={variants.stagger} className="py-20">
          {/* title */}
          <div id="team" className="flex flex-col justify-center">
            <p className="text-2xl font-extrabold text-center text-secondary mb-5">
              Meet the team
            </p>
            <h2 className="text-4xl font-bold text-center text-primary">
              It is time we got to know each other.
            </h2>
          </div>
          {/* team members */}
          <div className="lg:flex lg:flex-wrap lg:justify-center lg:gap-10 mt-10">
            {members.map((member) => (
              <Member
                key={member.id}
                className="mt-10 mx-10"
                tag={member.tag}
                name={member.name}
                positions={member.positions}
                image={member.image}
              />
            ))}
          </div>
          <BasicButton className="mt-10 w-1/5">Join the team</BasicButton>
        </AnimateInView>
      </motion.div>
      <motion.div>
        <div id="experts" className="py-20">
          {/* title */}
          <div className="flex flex-col justify-center">
            <p className="text-2xl font-extrabold text-center text-secondary mb-5">
              OUR ADVISORY BOARD
            </p>
            <h2 className="text-4xl font-bold text-center text-primary">
              Supported by experts from science and research.
            </h2>
          </div>
          {/* team members */}
          <div className="lg:flex lg:flex-wrap lg:justify-center lg:gap-10 mt-10">
            {experts.map((expert) => (
              <Member
                key={expert.id}
                className="mt-10 mx-10"
                tag={expert.tag}
                name={expert.name}
                positions={expert.positions}
                image={expert.image}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default About;
