import React from "react";

import Link from "next/link";

import Logo from "../../../public/logo.svg";
import FooterNavi from "./FooterNavi";

const Footer = () => {
  return (
    <div className="h-full w-screen flex flex-col lg:flex-row py-5 lg:py-20">
      <div className="hidden lg:w-1/4 lg:flex lg:justify-center items-center">
        <Link href="/home" className="my-auto">
          <img
            src="./logo.svg"
            alt={""}
            style={{ width: "250px", height: "250px" }}
          />
        </Link>
      </div>
      <div className="lg:w-1/4 ml-5 lg:ml-0 lg:flex justify-center">
        <FooterNavi
          title="navigation"
          navs={["begin", "online course", "About Us", "blog"]}
        />
      </div>
      <div className="lg:w-1/4 ml-5 lg:ml-0 lg:flex justify-center">
        <FooterNavi title="Contact" navs={["contact form"]} />
      </div>
      <div className="lg:w-1/4 ml-5 lg:ml-0 lg:flex justify-center">
        <FooterNavi
          title="Miscellaneous"
          navs={["Data protection", "imprint", "conditions"]}
        />
      </div>
    </div>
  );
};

export default Footer;
