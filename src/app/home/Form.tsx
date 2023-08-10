import React from "react";
import FormInput from "./FormInput";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { GiHumanTarget } from "react-icons/gi";

const Form = () => {
  return (
    <div className="border border-[#e7e9ee] bg-white rounded-2xl h-full font-sans">
      <form className="mx-10 my-10 flex flex-wrap justify-center gap-10">
        <FormInput
          placeholder="Surname"
          className="w-10/12 lg:w-5/12"
          inputClassName="w-2/3"
        >
          <AiOutlineMail />
        </FormInput>
        <FormInput
          placeholder="e-mail"
          className="w-10/12 lg:w-5/12"
          inputClassName="w-2/3"
        >
          <GiHumanTarget />
        </FormInput>
        <FormInput
          placeholder="phone"
          className="w-10/12 lg:w-5/12"
          inputClassName="w-2/3"
        >
          <AiOutlinePhone />
        </FormInput>
        <FormInput
          placeholder="Pursue"
          className="w-10/12 lg:w-5/12"
          inputClassName="w-2/3"
        >
          <FaRegBuilding />
        </FormInput>
        <FormInput
          placeholder="What is it about?"
          className="w-10/12"
          inputClassName="w-11/12"
        />
        <FormInput
          placeholder="Your message..."
          className="w-10/12 h-32"
          inputClassName="w-11/12"
        />
      </form>
      <div className="mb-10">
        <p className="mx-16 lg:mx-24 mb-10 text-[18px] text-[#6f7278] font-medium ">
          By clicking on send you agree to{" "}
          <a
            href="https://daisyui.com/components/input/"
            className="font-bold border-b border-b-primary text-primary"
          >
            our privacy policy
          </a>
          .
        </p>
        <button className="mx-auto bg-primary text-white font-bold text-xl rounded-full w-40 h-16 block">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
