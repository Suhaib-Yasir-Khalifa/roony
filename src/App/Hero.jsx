import ReUse from "./Animation/ReUse";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import filePath from "public/cv.pdf";
const Hero = () => {
  return (
    <>
      <div
        id="home"
        className="w-full h-max flex md:flex-row phone:flex-col xl:px-[9rem] md:px-[4rem]  phone:px-0 py-[3rem] pt-[7rem]"
      >
        <div className="md:w-1/2 phone:w-full md:pt-[5rem] ">
          <h1 className="font-extrabold  flex  flex-col md:items-start phone:items-center text-white md:text-[35px] phone:text-[27px]">
            <ReUse>HI, I'm Marwan Mohammd..</ReUse>

            <ReUse>
              <span className="md:ml-8 phone:ml-0"></span> Graphic Designer &{" "}
            </ReUse>

            <ReUse>
              <span className="md:ml-16 phone:ml-0"></span> Business Manger !
            </ReUse>
          </h1>
          <ReUse
            mainDivStyles={
              "my-8 flex md:items-start phone:items-center md:mx-0 phone:mx-auto"
            }
          >
            <h1 className="font-normal italic text-white md:text-left phone:text-center">
              experience of Graphic Design & <br /> you can see some of my work
              in here
            </h1>
          </ReUse>
          <div className="flex flex-row w-full justify-center items-center phone:gap-x-3  md:gap-x-8">
            <motion.a
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.5 }}
              href="#contact"
              className="w-max h-max px-7 rounded-lg bg-white text-pink-600 md:text-[1.4rem] phone:text-[1rem] hover:-translate-y-2 transition-all ease-in-out duration-300"
            >
              Get Start
            </motion.a>
            <motion.a
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate="show"
              transition={{ duration: 0.5 }}
              href={filePath}
              className="w-max h-max px-7 rounded-lg flex flex-row bg-white text-pink-600 md:text-[1.4rem] phone:text-[1rem] hover:-translate-y-2 transition-all ease-in-out duration-300"
              download={"cv"}
            >
              Download CV{" "}
              <ArrowDown className="md:mx-3 phone:mx-auto lg:w-[1.7rem] phone:w-[1.2rem] my-auto h-max" />
            </motion.a>
          </div>
        </div>
        <div className="md:w-1/2 phone:w-full flex justify-center items-center">
          <ReUse
            mainDivStyles={
              "md:rounded-br-none md:rounded-full phone:rounded-b-full "
            }
          >
            <img
              src="public/Images/profile.jpg"
              className="2xl:h-[30rem] xl:h-[25rem] lg:h-[19rem]  2xl:w-[30rem] xl:w-[25rem] lg:w-[19rem] md:rounded-full  flex flex-col items-center justify-center md:rounded-br-none object-cover phone:w-[16rem] phone:h-[16rem] mx-auto my-5 border-basicText md:border-[0.8rem] phone:border-[0.4rem]  phone:rounded-b-full"
            />
          </ReUse>
        </div>
      </div>
    </>
  );
};

export default Hero;
