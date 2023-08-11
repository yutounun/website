import React, { ReactNode } from "react";

const BasicButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => (
  <button
    className={`bg-[#055f5b] btn mx-auto hover:bg-[#0c1c1b] text-white font-bold text-md lg:text-xl rounded-full lg:h-16 block ${className}`}
  >
    {children}
  </button>
);

export default BasicButton;
