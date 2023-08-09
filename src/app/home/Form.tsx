import React from "react";
import FormInput from "./FormInput";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaRegBuilding } from "react-icons/fa";
import { GiHumanTarget } from "react-icons/gi";

const Form = () => {
  return (
    <div className="border border-[#e7e9ee] bg-white rounded-2xl h-full">
      <form className="mx-10 my-10 flex flex-wrap justify-center gap-10">
        <FormInput placeholder="Surname" className="w-72">
          <AiOutlineMail />
        </FormInput>
        <FormInput placeholder="e-mail" className="w-72">
          <GiHumanTarget />
        </FormInput>
        <FormInput placeholder="phone" className="w-72">
          <AiOutlinePhone />
        </FormInput>
        <FormInput placeholder="Pursue" className="w-72">
          <FaRegBuilding />
        </FormInput>
        <FormInput placeholder="What is it about?" className="w-4/5" />
        <FormInput placeholder="Your message..." className="w-4/5 h-32" />
      </form>
      <div className="ml-28 mb-10">
        <p className="mb-10 font-xl text-[#6F278] font-medium font-poppins">
          By clicking on send you agree to{" "}
          <a
            href="https://daisyui.com/components/input/"
            className="font-bold border-b border-b-primary"
          >
            our privacy policy
          </a>
          .
        </p>
        <button className="bg-primary text-white font-bold text-xl rounded-full w-40 h-16 block">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Form;
