const MobileMenu = ({ fun, clickFun }) => {
  return (
    <>
      <div
        className={`fixed w-full h-full backdrop-blur-lg ${
          fun ? "left-0 opacity-100" : "left-[-120%] opacity-0"
        } md:left-[120%] md:opacity-0 transition-opacity z-[800] duration-500`}
      ></div>
      <div
        className={`${
          fun ? "right-0 opacity-100 h-[30%]" : "right-[-120%] opacity-0 h-0"
        } fixed w-[50%] rounded-l-xl  bg-white transition-all top-[4.5rem] duration-500 -translate-y-[0.08rem] flex flex-col items-center  md:right-[-120%] z-[800] lg:flex`}
      >
        <a
          onClick={clickFun}
          href="#home"
          className="font-bold text-basicText my-2 text-[25px]"
        >
          Home
        </a>
        <a
          onClick={clickFun}
          href="#about"
          className="font-bold text-basicText my-2 text-[25px]"
        >
          About
        </a>
        <a
          onClick={clickFun}
          href="#work"
          className="font-bold text-basicText my-2 text-[25px]"
        >
          Work
        </a>
        <a
          onClick={clickFun}
          href="#contact"
          className="font-bold text-basicText my-2 text-[25px]"
        >
          Contact
        </a>
      </div>
    </>
  );
};

export default MobileMenu;
