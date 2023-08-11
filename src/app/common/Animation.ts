const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInDown = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing,
    },
  },
};
const fadeInRight = {
  initial: { x: -30, opacity: 0 },
  animate: {
    x: 20,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing,
    },
  },
};

const scaleUp = {
  initial: { scale: 0.4, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: easing,
    },
  },
};

const fadeInUp = {
  initial: { y: -30, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const hoverScaleUp = {
  initial: { scale: 1 },
  animate: {
    scale: 1.2,
    transition: {
      duration: 1.3,
      ease: easing,
    },
  },
};

const variants = {
  stagger: stagger,
  fadeInDown: fadeInDown,
  fadeInRight: fadeInRight,
  scaleUp: scaleUp,
  fadeInUp: fadeInUp,
  hoverScaleUp,
};

export default variants;
