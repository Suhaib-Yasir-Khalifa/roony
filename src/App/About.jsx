import ReUse from "../App/Animation/ReUse";
import { ArrowBigRight } from "lucide-react";
const About = () => {
  const openUrl = (url) => {
    window.open(url);
  };
  return (
    <>
      <div id="about" className="w-full py-[4rem]">
        <ReUse mainDivStyles={"mx-auto my-[1rem]"}>
          <h1 className="font-extrabold text-center phone:text-[2rem] md:text-[3.3rem] w-full text-white">
            Who's Marwan ?
          </h1>
        </ReUse>
        <ReUse mainDivStyles={"mx-auto w-[80%s] "}>
          <h1 className="font-normal opacity-90 md:w-[80%] phone:w-[90%] mx-auto text-white text-center">
            I'm Marwan Mohammed a sudanese graphic designer and busniess manger{" "}
            <br />
            i work as a free lancer and help clinet in solving problems in this
            field of services <br />I get a self-educated and some of online and
            life meet courses; I build my experience with working with great
            companies like EventX and Edition, and some of small busniess with
            smaller companies
          </h1>
        </ReUse>

        <div className="my-8 flex flex-row phone:w-full justify-between md:w-[80%] lg:w-[70%] xl:w-[65%] 2xl:w-[50%] mx-auto">
          <div className="flex flex-col justify-center items-center">
            <img
              src="./Images/eventx.jpg"
              className="md:w-[10rem] md:h-[10rem] phone:w-[5rem] phone:h-[5rem] rounded-full my-2"
            />
            <ReUse>
              <h1 className="text-white text-center  font-extrabold md:text-[1.7rem] phone:text-[1rem] hover:underline ">
                EventX Company
              </h1>
            </ReUse>
            <ReUse>
              <p className="font-normal italic opacity-80 text-center md:text-[1rem] phone:text-[0.7rem] text-white ">
                This is big event builder compnay <br />
                that's managing <br /> the whole event <br />
              </p>
            </ReUse>

            <p
              onClick={() =>
                openUrl("https://www.facebook.com/EventxSD?mibextid=ZbWKwL")
              }
              className="text-white font-extrabold flex flex-row cursor-pointer  gap-x-2 border-b-2 border-white group"
            >
              Vist{" "}
              <ArrowBigRight className="group-hover:translate-x-2 transition-all ease-in-out duration-300" />
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="./Images/edition.jpg"
              className="md:w-[10rem] md:h-[10rem] phone:w-[5rem] phone:h-[5rem] rounded-full my-2"
            />
            <ReUse>
              <h1 className="text-white text-center  font-extrabold md:text-[1.7rem] phone:text-[1rem] hover:underline ">
                Edition
              </h1>
            </ReUse>
            <ReUse>
              <p className="font-normal italic opacity-80 text-center md:text-[1rem] phone:text-[0.7rem] text-white ">
                We Empower businesses to achieve <br /> Global Brand recognition
                <br /> through expert Brand <br /> Strategy & cutting-edge
                Website Design
              </p>
            </ReUse>

            <p
              onClick={() =>
                openUrl(
                  "https://www.facebook.com/oneofoneedition?mibextid=ZbWKwL"
                )
              }
              className="text-white font-extrabold flex flex-row cursor-pointer  gap-x-2 border-b-2 border-white group"
            >
              Vist{" "}
              <ArrowBigRight className="group-hover:translate-x-2 transition-all ease-in-out duration-300" />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
