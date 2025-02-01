export const headingAnimation = {
    x: ['100%', '-100%'],
  };
  
  export const headingTransition = {
    x: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 10,
      ease: 'linear',
    },
  };

export const slideInAnimation = {
  initial: { x: '-100%' },
  animate: { x: 0 },
};

export const slideInTransition = {
  type: 'spring',
  stiffness: 100,
  damping: 25,
};

  