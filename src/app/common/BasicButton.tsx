import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const BasicButton = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => (
  <motion.button
    whileHover={{
      scale: 1.1,
      transition: { duration: 0.2 },
    }}
    whileTap={{ scale: 0.9 }}
    className={`bg-[#055f5b] btn mx-auto hover:bg-[#0c1c1b] text-white font-bold text-md lg:text-xl rounded-full lg:h-16 block ${className}`}
  >
    {children}
  </motion.button>
);

export default BasicButton;
