import { Menu, X } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { motion } from "framer-motion";
const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="w-full h-max fixed top-0 z-[900]  bg-white flex flex-row justify-between  md:px-[2rem] lg:px-[4rme] xl:px-[8rem] phone:px-[1rem]">
        <div className="flex w-max h-min ">
          <motion.img
            variants={{
              hidden: { x: -70, scale: 0.2, rotate: 360 },
              showed: { x: 0, scale: 1, rotate: 0 },
            }}
            initial="hidden"
            animate="showed"
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-max h-[70px]  border-basicText  "
            src="public/Images/logo.png"
          />
        </div>
        <div className="phone:hidden md:flex justify-between px-2 gap-x-7 xl:gap-x-8 md:text-[16px] xl:text-[20px] my-auto  ">
          <a href="#home" className="font-bold text-basicText">
            Home
          </a>
          <a href="#about" className="font-bold text-basicText">
            About
          </a>
          <a href="#work" className="font-bold text-basicText">
            Work
          </a>
          <a href="#contact" className="font-bold text-basicText">
            Contact
          </a>
        </div>
        <div
          className="md:hidden phone:flex w-max h-max my-auto"
          onClick={handleClick}
        >
          {click ? (
            <X className="text-basicText w-full h-[40px] my-auto pr-8" />
          ) : (
            <Menu className="text-basicText w-full h-[40px] my-auto pr-8" />
          )}
        </div>
      </div>
      <MobileMenu fun={click} clickFun={handleClick} />
    </>
  );
};

export default NavBar;
