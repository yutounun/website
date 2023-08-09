import React, { ReactNode } from "react";
import { IconContext } from "react-icons";

type PropTypes = {
  placeholder: string;
  inputClassName?: string;
  className?: string;
  children?: ReactNode;
};

const FormInput = ({
  placeholder,
  className,
  children,
  inputClassName,
}: PropTypes) => {
  return (
    <span
      className={`border border-[#caccd1] bg-white flex justify-between items-center rounded-2xl h-16 ${className}`}
    >
      <input
        type="text"
        className={`h-full ml-3 ${inputClassName}`}
        placeholder={placeholder}
      />
      <IconContext.Provider
        value={{ color: "#caccd1", className: "text-3xl mr-3" }}
      >
        <div>{children}</div>
      </IconContext.Provider>
    </span>
  );
};

export default FormInput;
