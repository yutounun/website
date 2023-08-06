import React from "react";
import Image from "next/image";
import Link from "next/link";

import Account from "../../../public/account.svg";

const Navbar = () => {
  return (
    <div className="py-5 flex justify-between border-b fixed w-full top-0 z-50 bg-white">
      <Link href="/login" className="btn btn-ghost normal-case text-xl ml-7">
        <Image src={Account} alt={""} className="" />
      </Link>
    </div>
  );
};

export default Navbar;
