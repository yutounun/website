"use client";
import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function AnimateInView({
  children,
  variants,
  tag,
  className,
  hoverScaleUp,
}: {
  children: React.ReactNode;
  variants: any;
  tag: string;
  className: string;
  hoverScaleUp?: boolean;
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    } else {
      controls.stop();
      controls.set("initial");
    }
  }, [controls, inView]);

  return tag === "div" ? (
    <motion.div
      ref={ref}
      animate={controls}
      initial="initial"
      transition={{ duration: 3 }}
      variants={variants}
      className={className}
      whileHover={
        hoverScaleUp
          ? {
              scale: 1.1,
              transition: { duration: 0.2 },
            }
          : undefined
      }
      whileTap={hoverScaleUp ? { scale: 0.9 } : undefined}
    >
      {children}
    </motion.div>
  ) : (
    <motion.p
      ref={ref}
      animate={controls}
      initial="initial"
      transition={{ duration: 3 }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.p>
  );
}

export default AnimateInView;
