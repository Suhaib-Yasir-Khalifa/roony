import { useState, useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const ReUse = ({ styles, children, mainDivStyles }) => {
  const divRef = useRef();
  const itemView = useInView(divRef);
  const mainControl = useAnimation();
  const slideControl = useAnimation();
  useEffect(() => {
    if (itemView) {
      mainControl.start("showed");
      slideControl.start("showed");
    }
  }, [itemView]);

  return (
    <>
      <div
        ref={divRef}
        className={`overflow-hidden w-fit relative z-[1] ${mainDivStyles} `}
      >
        <motion.div
          className={`${styles} `}
          variants={{
            hidden: { y: 50, opacity: 0 },
            showed: { y: 0, opacity: 1 },
          }}
          initial="hidden"
          animate={mainControl}
          transition={{ duration: 0.75, delay: 0.35 }}
        >
          {children}
        </motion.div>
        <motion.div
          variants={{
            hidden: { left: 0 },
            showed: { left: "100%" },
          }}
          initial="hidden"
          animate={slideControl}
          transition={{ duration: 0.5, ease: "easeIn", delay: 0.1 }}
          className="top-4 bottom-4 h-full absolute left-0 right-0 bg-pink-500 "
        ></motion.div>
      </div>
    </>
  );
};

export default ReUse;
