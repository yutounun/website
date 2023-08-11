"use client";

import React, { useState } from "react";

import Link from "next/link";

import Logo from "../../../public/logo.svg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  return (
    <div className="h-32 lg:flex justify-between border-b sticky w-full top-0 z-50 bg-white">
      {/* Burger Menu */}
      {isOpen}
      <div
        className="lg:hidden absolute top-12 right-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </div>
      {/* Drawer */}
      {isOpen && (
        <div className="w-full lg:hidden absolute mt-32">
          <ul className="flex flex-col gap-5 pt-5 bg-gray-10 h-screen opacity-95">
            <Link
              href="/home"
              className={`text-xl ml-7 w-1/3 font-normal hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white h-1/8 ${
                pathname === "/home" && "border-b-2 border-b-[#ff6d3f]"
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`text-xl ml-7 w-1/3 font-normal hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white hover: ${
                pathname === "/about" && "border-b-2 border-b-[#ff6d3f]"
              }`}
            >
              About
            </Link>
            <Link
              href="https://devwhisperer.gatsbyjs.io/"
              className={`text-xl ml-7 w-1/3 font-normal hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white hover: ${
                pathname === "/blog" && "border-b-2 border-b-[#ff6d3f]"
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
          <img src="./logo.svg" alt="logo" className="" />
        </Link>
      </div>
      <div className="hidden w-1/2 lg:flex justify-end mr-32 my-auto">
        <Link
          href="/home"
          className={`text-xl ml-7 my-auto  font-normal hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white ${
            pathname === "/home" && "border-b-2 border-b-[#ff6d3f]"
          }`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`text-xl ml-7 my-auto  font-normal hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white hover: ${
            pathname === "/about" && "border-b-2 border-b-[#ff6d3f]"
          }`}
        >
          About
        </Link>
        <Link
          href="https://devwhisperer.gatsbyjs.io/"
          className={`text-xl ml-7 my-auto  font-normal hover:border-b-2 hover:border-b-[#ff6d3f] hover:bg-white hover: ${
            pathname === "/blog" && "border-b-2 border-b-[#ff6d3f]"
          }`}
        >
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
