const createDropInVariant = (yValue) => {
  return {
    hidden: {
      y: yValue,
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      // transition: {
      //   duration: 0.1,
      //   type: "spring",
      //   damping: 25,
      //   stiffness: 500,
      // },
    },
    exit: {
      y: yValue,
      opacity: 0,
    },
  };
};

export { createDropInVariant };
