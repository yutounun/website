"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/logo.svg";

type PropTypes = {
  current?: string;
};

const Navbar = ({ current = "home" }: PropTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="h-32 lg:flex justify-between border-b sticky w-full top-0 z-50 bg-white">
      {/* Burger Menu */}
      <div
        className="lg:hidden absolute top-10 right-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <button className="relative group">
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10"></div>
              <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10 delay-75"></div>
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-x-10 delay-150"></div>

              <div className="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                <div className="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
              </div>
            </div>
          </div>
        </button>
      </div>
      {/* Drawer */}
      {isOpen && (
        <div className="w-full lg:hidden absolute mt-32">
          <ul className="flex flex-col gap-5 pt-5 bg-gray-10 h-screen opacity-95">
            <Link
              href="/home"
              className={`text-xl ml-7 w-1/3 font-normal hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white h-1/8 ${
                current === "home" && "border-b-2 border-b-[#ff6d3f]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/courses"
              className={`text-xl ml-7 w-1/3 font-normal hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white hover: ${
                current === "courses" && "border-b-2 border-b-[#ff6d3f]"
              }`}
            >
              Courses
            </Link>
            <Link
              href="/about"
              className={`text-xl ml-7 w-1/3 font-normal hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white hover: ${
                current === "about" && "border-b-2 border-b-[#ff6d3f]"
              }`}
            >
              About
            </Link>
            <Link
              href="/blog"
              className={`text-xl ml-7 w-1/3 font-normal hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white hover: ${
                current === "blog" && "border-b-2 border-b-[#ff6d3f]"
              }`}
            >
              Blog
            </Link>
          </ul>
        </div>
      )}

      {/* Logo */}
      <div className="lg:flex w-1/2 my-auto ml-10 pt-9">
        <Link href="/home" className="my-auto">
          <Image src={Logo} alt={""} className="" />
        </Link>
      </div>
      <div className="hidden w-1/2 lg:flex justify-end mr-32 my-auto">
        <Link
          href="/home"
          className={`text-xl ml-7 my-auto  font-normal hoverhover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white ${
            current === "home" && "border-b-2 border-b-[#ff6d3f]"
          }`}
        >
          Home
        </Link>
        <Link
          href="/courses"
          className={`text-xl ml-7 my-auto  font-normal hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white hover: ${
            current === "courses" && "border-b-2 border-b-[#ff6d3f]"
          }`}
        >
          Courses
        </Link>
        <Link
          href="/about"
          className={`text-xl ml-7 my-auto  font-normal hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white hover: ${
            current === "about" && "border-b-2 border-b-[#ff6d3f]"
          }`}
        >
          About
        </Link>
        <Link
          href="/blog"
          className={`text-xl ml-7 my-auto  font-normal hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white hover: ${
            current === "blog" && "border-b-2 border-b-[#ff6d3f]"
          }`}
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
