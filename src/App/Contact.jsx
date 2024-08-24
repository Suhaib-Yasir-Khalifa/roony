import ReUse from "./Animation/ReUse";

const Contact = () => {
  const redirect = (url) => {
    window.open(url);
  };
  return (
    <>
      <div className="w-full py-[2rem] " id="contact">
        <ReUse mainDivStyles={"mx-auto"}>
          <h1 className="font-extrabold text-center md:text-[4rem] phone:text-[2rem] lg:text-[5rem] text-white">
            Hire Me ?
          </h1>
        </ReUse>
        <ReUse mainDivStyles={"mx-auto w-full"}>
          <div className="flex flex-wrap flex-row md:w-[80%] phone:w-full mx-auto px-4 justify-between ">
            <img
              onClick={() =>
                redirect(
                  "https://www.instagram.com/x.mvrwan?igsh=MXg3M2kxc2c0cTc3Mw=="
                )
              }
              src="./Images/instagram.jpg"
              className="md:w-[10rem] phone:w-[4rem] cursor-pointer phone:h-[4rem] md:h-[10rem] rounded-full object-cover "
            />
            <img
              onClick={() =>
                redirect(
                  "https://www.facebook.com/roony.twix.1?mibextid=ZbWKwL"
                )
              }
              src="./Images/facebook.png"
              className="md:w-[10rem] phone:w-[4rem] cursor-pointer phone:h-[4rem] md:h-[10rem] rounded-full object-cover "
            />
            <img
              onClick={() =>
                redirect(
                  "https://www.linkedin.com/in/marwanmohali?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                )
              }
              src="./Images/linkedin.jpg"
              className="md:w-[10rem] phone:w-[4rem] cursor-pointer phone:h-[4rem] md:h-[10rem] rounded-full object-cover "
            />
            <img
              onClick={() => redirect("https://wa.me/c/249116925801")}
              src="./Images/whatsapp.jpg"
              className="md:w-[10rem] phone:w-[4rem] cursor-pointer phone:h-[4rem] md:h-[10rem] rounded-full object-cover "
            />
          </div>
        </ReUse>
      </div>
    </>
  );
};

export default Contact;
