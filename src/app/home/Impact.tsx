import { type } from "os";
import React from "react";

type PropTypes = {
  title: string;
  content: string;
};

const Impact = ({ title, content }: PropTypes) => {
  return (
    <>
      <div className="h-40 w-5/12">
        <h2 className="text-[50px] text-primary font-bold">{title}</h2>
        <p className="text-[20px] text-primary font-[500]">{content}</p>
      </div>
    </>
  );
};

export default Impact;
