import WorkLarge from "./Work/WorkLarge";

import WorkSmall from "./Work/WorkSmall";
import { useState } from "react";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
const Work = () => {
  const [array, setArray] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const handleModal = (state) => setOpenModal(state);
  const handleArray = (arr) => setArray(arr);

  const eventx = [
    "eventx/eventx-1",
    "eventx/eventx-2",
    "eventx/eventx-3",
    "eventx/eventx-4",
    "eventx/eventx-5",
    "eventx/eventx-6",
    "eventx/eventx-7",
    "eventx/eventx-8",
    "eventx/eventx-9",
  ];
  const mo_ali = ["mo-ali/mo-ali-1", "mo-ali/mo-ali-2", "mo-ali/mo-ali-3"];
  const orgwani = [
    "Orgwani/orgwani-1",
    "Orgwani/orgwani-2",
    "Orgwani/orgwani-3",
  ];
  const spinner = [
    "spiner/spinner-1",
    "spiner/spinner-2",
    "spiner/spinner-3",
    "spiner/spinner-4",
  ];
  const salam = [
    "salam/salam-1",
    "salam/salam-2",
    "salam/salam-4",
    "salam/salam-5",
    "salam/salam-6",
  ];
  const idris = [
    "idres/idres-1",
    "idres/idres-2",

    "idres/idres-4",
    "idres/idres-5",
    "idres/idres-6",
    "idres/idres-7",
  ];
  const clickFunctionMo = () => {
    setOpenModal(true);
    handleArray(mo_ali);
  };
  const clickFunctionSpinner = () => {
    setOpenModal(true);
    handleArray(spinner);
  };
  const clickFunctionSalam = () => {
    setOpenModal(true);
    handleArray(salam);
  };
  const clickFunctionOrgwani = () => {
    setOpenModal(true);
    handleArray(orgwani);
  };
  const clickFunctionEventX = () => {
    setOpenModal(true);
    handleArray(eventx);
  };
  const clickFunctionIdris = () => {
    setOpenModal(true);
    handleArray(idris);
  };
  return (
    <>
      <div className="py-[4rem] px-10" id="work">
        <div className="flex gap-x-4 phone:flex-col lg:flex-row w-full justify-center items-center gap-y-12 my-8 overflow-hidden">
          <WorkLarge
            coverImg={"mo-ali/mo-ali-pro.jpg"}
            mainTitle={"Mohammed Ali-Logo"}
            projectTalk={
              "This is a logo for a client called 'Mohammed Ali', He's an artist draw portrait images and make color dance in his brush!"
            }
            clickFunction={() => clickFunctionMo()}
          />
          <WorkSmall
            coverImg={"spiner/spinner-pro.jpg"}
            mainTitle={"Spinner"}
            projectTalk={
              "A logo for a syper playing, with all fun and electronic and physicals games to enjoy it, it's the place where you seeking for real fun "
            }
            clickFunction={() => clickFunctionSpinner()}
          />
        </div>
        {/**This the second line */}
        <div className="flex gap-x-4 phone:flex-col lg:flex-row w-full justify-center items-center gap-y-12 my-8 overflow-hidden">
          <WorkSmall
            coverImg={"Orgwani/orgwani-pro.jpg"}
            mainTitle={"Orgwani"}
            projectTalk={
              "A logo for a brand that's for a self busniess work and special for front display work"
            }
            clickFunction={() => clickFunctionOrgwani()}
          />
          <WorkLarge
            coverImg={"salam/salam-pro.jpg"}
            mainTitle={"Salam Pazar"}
            projectTalk={
              "This is a logo a small out-there selling shop, for all kind of products and inhance the price as a minimum"
            }
            clickFunction={() => clickFunctionSalam()}
          />
        </div>
        <div className="flex gap-x-4 phone:flex-col lg:flex-row w-full justify-center items-center gap-y-12 my-8 overflow-hidden">
          <WorkLarge
            coverImg={"eventx.jpg"}
            mainTitle={"EventX"}
            projectTalk={
              "EventX is a graphic design company, that's responsible for opening events and manage the design, and services"
            }
            clickFunction={() => clickFunctionEventX()}
          />
          <WorkSmall
            coverImg={"idres/idres-pro.jpg"}
            mainTitle={"Idris Schools"}
            projectTalk={"A logo for a school "}
            clickFunction={() => clickFunctionIdris()}
          />
        </div>
      </div>

      <div
        className={`w-full h-full fixed top-0 ${
          openModal ? "left-0 opacity-100" : "left-[-120%] opacity-0"
        } z-[40] justify-center items-center transition-opacity duration-500 backdrop-blur-[10px]  flex bg-black bg-opacity-65 `}
      >
        <X
          className="w-[2rem] h-max bg-pink-500 text-white rounded-full absolute cursor-pointer top-[10%] right-[2%]"
          onClick={() => handleModal(false)}
        />
        <div className="bg-white md:w-[80%]  h-max phone:w-[80%] p-4 rounded-[2rem] flex justify-center items-center ">
          <Carousel className="w-full  ">
            <CarouselContent className="-ml-1">
              {array.map((item, index) => (
                <CarouselItem
                  key={index}
                  className=" md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center ">
                        <img
                          src={`./public/Images/${item}.jpg`}
                          className="w-full mx-auto h-full object-cover "
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Work;
