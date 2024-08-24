import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, useInView, useAnimation, easeIn } from "framer-motion";
import { useEffect, useRef } from "react";
const WorkSmall = ({ mainTitle, coverImg, projectTalk, clickFunction }) => {
  const divRef = useRef();
  const viewEl = useInView(divRef);
  const animationControl = useAnimation();
  useEffect(() => {
    if (viewEl) {
      animationControl.start("visible");
    }
  }, [viewEl]);
  return (
    <>
      <motion.div
        ref={divRef}
        variants={{
          hidden: { y: 100, opacity: 0 },
          visible: { y: 0, opacity: 100 },
        }}
        initial={"hidden"}
        animate={animationControl}
        transition={{ duration: 0.6, ease: easeIn }}
        className="flex relative overflow-hidden flex-col  before:w-full before:bg-slate-900 before:opacity-70 before:h-[40%] group lg:w-[30%] md:w-[80%] phone:w-[90%] h-[20rem] rounded-3xl before:hover:opacity-90 before:transition-all before:duration-300 before:ease-in-out before:bottom-0 before:absolute before:z-[2] phone:mx-auto lg:mx-0"
      >
        <img
          src={`./public/Images/${coverImg}`}
          className=" group-hover:scale-[1.5] w-full h-full  object-cover   transition-all ease-in-out duration-300 z-[1]"
        />
        <div className="absolute z-[3] bottom-0 w-full h-[40%] px-3 py-2">
          <h1 className="font-extrabold lg:text-[2rem] md:text-[1.6rem] text-white">
            {mainTitle}
          </h1>
          <div className="text-white flex w-full justify-between">
            <p className="italic opacity-80">
              <ScrollArea className="w-full h-[80%] ">{projectTalk}</ScrollArea>
            </p>
            <button
              onClick={clickFunction}
              className="px-6 py-1 bg-white h-max  text-pink-500 rounded-xl font-extrabold"
            >
              Check
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};
export default WorkSmall;
