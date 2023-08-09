import React from "react";
import FormInput from "./FormInput";
import { AiOutlineMail } from "react-icons/ai";

const Form = () => {
  return (
    <div className="border border-[#e7e9ee] bg-white rounded-2xl h-full">
      <form className="mx-10 my-10 flex flex-wrap justify-center gap-10">
        <FormInput placeholder="Surname" className="w-72">
          <AiOutlineMail />
        </FormInput>
        <FormInput placeholder="e-mail" className="w-72">
          <AiOutlineMail />
        </FormInput>
        <FormInput placeholder="phone" className="w-72">
          <AiOutlineMail />
        </FormInput>
        <FormInput placeholder="Pursue" className="w-72">
          <AiOutlineMail />
        </FormInput>
        <FormInput placeholder="What is it about?" className="w-4/5">
          <AiOutlineMail />
        </FormInput>
        <FormInput placeholder="Your message..." className="w-4/5 h-32">
          <AiOutlineMail />
        </FormInput>
      </form>
    </div>
  );
};

export default Form;
