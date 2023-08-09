import React from "react";
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/logo.svg";
import FooterNavi from "./FooterNavi";

const Footer = () => {
  return (
    <div className="h-full w-screen flex py-20">
      <div className="w-1/4 flex justify-center items-center">
        <Link href="/home" className="my-auto">
          <Image src={Logo} alt={""} width="250" height="250" />
        </Link>
      </div>
      <div className="w-1/4 flex justify-center">
        <FooterNavi
          title="navigation"
          navs={["begin", "online course", "About Us", "blog"]}
        />
      </div>
      <div className="w-1/4 flex justify-center">
        <FooterNavi title="Contact" navs={["contact form"]} />
      </div>
      <div className="w-1/4 flex justify-center">
        <FooterNavi
          title="Miscellaneous"
          navs={["Data protection", "imprint", "conditions"]}
        />
      </div>
    </div>
  );
};

export default Footer;
