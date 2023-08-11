import React from "react";
import BasicButton from "./BasicButton";

type PropType = {
  subtitle: string;
  title: string;
  content: string;
  className: string;
  btn?: boolean;
};

const Explanation = ({
  className,
  subtitle,
  title,
  content,
  btn,
}: PropType) => {
  return (
    <div className={`${className}`}>
      <div className="lg:flex lg:flex-col lg:w-2/3">
        <p className="lg:mx-0 font-bold  text-[#055F5B] text-lg">
          - {subtitle}
        </p>
        <h2 className="lg:mx-0 w-full font-bold  text-primary tracking-wide text-4xl my-5">
          {title}
        </h2>
        <p className="leading-relaxed lg:mx-0 font-medium text-[#6F7278] text-[18px] mb-5">
          {content}
        </p>
        {btn && <BasicButton className="w-60 h-12">Chat with me</BasicButton>}
      </div>
    </div>
  );
};

export default Explanation;
