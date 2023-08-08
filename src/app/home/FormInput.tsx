import React from "react";

type PropTypes = {
  placeholder: string;
};

const FormInput = ({ placeholder }: PropTypes) => {
  return (
    <input
      type="text"
      className="border border-[#caccd1] w-72 bg-white rounded-2xl h-16"
      placeholder={placeholder}
    />
  );
};

export default FormInput;
