import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/logo.svg";

type PropTypes = {
  current?: string;
};

const Navbar = ({ current = "home" }: PropTypes) => {
  return (
    <div className="h-32 flex justify-between border-b sticky w-full top-0 z-50 bg-white">
      <div className="w-1/2 my-auto ml-10 pt-9">
        <Link href="/home" className="my-auto">
          <Image src={Logo} alt={""} className="" />
        </Link>
      </div>
      <div className="w-1/2 flex justify-end mr-32 my-auto">
        <Link
          href="/home"
          className={`btn btn-ghost normal-case text-xl ml-7 my-auto font-poppins font-normal ${
            current === "home" && "border-b-2 border-b-[#ff6d3f]"
          }`}
        >
          Home
        </Link>
        <Link
          href="/courses"
          className={`btn btn-ghost normal-case text-xl ml-7 my-auto font-poppins font-normal ${
            current === "courses" && "border-b-2 border-b-[#ff6d3f]"
          }`}
        >
          Courses
        </Link>
        <Link
          href="/about"
          className={`btn btn-ghost normal-case text-xl ml-7 my-auto font-poppins font-normal ${
            current === "about" && "border-b-2 border-b-[#ff6d3f]"
          }`}
        >
          About
        </Link>
        <Link
          href="/blog"
          className={`btn btn-ghost normal-case text-xl ml-7 my-auto font-poppins font-normal ${
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
