import { type } from "os";
import React from "react";

type PropTypes = {
  title: string;
  content: string;
};

const Impact = ({ title, content }: PropTypes) => {
  return (
    <>
      <div className="h-70 mx-5 w-8/12 my-5 lg:my-0 lg:mx-0 lg:h-40 lg:w-5/12">
        <h2 className="text-4xl lg:text-[50px] text-primary font-bold lg:mb-5">
          {title}
        </h2>
        <p className="text-xl lg:text-[20px] text-secondary font-[500]">
          {content}
        </p>
      </div>
    </>
  );
};

export default Impact;
