const Footer = () => {
  return (
    <>
      <div className="w-full lg:h-[60rem] phone:h-[35rem] relative overflow-hidden before:absolute before:w-full before:h-full before:bg-black before:opacity-75 z-[10]">
        <img
          src="./public/Images/footer.jpg"
          className="w-full h-full z-[-1] object-cover  absolute"
        />
        <h1 className="text-white font-extrabold font italic text-center mt-[20%] z-[10] relative phone:text-[2rem]  lg:text-[5rem] phone:px-[2rem] md:px-[4rem]">
          Distinguish your work and leave a clear mark in your life
        </h1>
        <h1 className="text-white font-extrabold font italic text-center mt-[20%] z-[10] relative  text-[2rem] phone:px-[2rem] md:px-[4rem]">
          Developed by{" "}
          <span
            onClick={() => {
              window.open("https://joxdev.vercel.app");
            }}
            className="text-pink-500 underline underline-offset-[7px] cursor-pointer"
          >
            Jox_Dev.
          </span>
        </h1>
      </div>
    </>
  );
};

export default Footer;
