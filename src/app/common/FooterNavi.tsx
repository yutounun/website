import React from "react";

type PropTypes = {
  title: string;
  navs: string[];
};

const FooterNavi = ({ title, navs }: PropTypes) => {
  return (
    <div className="px-5 py-5">
      <h3 className="text-2xl mb-3 text-primary font-bold font-poppins">
        {title}
      </h3>
      {navs.map((nav: string) => {
        return (
          <p className="text-xl my-3 text-secondary font-medium" key={nav}>
            {nav}
          </p>
        );
      })}
    </div>
  );
};

export default FooterNavi;
