import React from "react";
import background from "../assets/background.png";
import FossUnited from "../assets/FossUnited.svg";
import IndiaFoss from "../assets/IndiaFoss.svg";
import arrow from "../assets/arrow-icon.svg";
import Button from "./Button";

function Landing() {
  return (
    <div className="flex flex-col">
      <img
        src={background}
        className="w-screen h-screen absolute z-[-10]"
        alt="Background"
      />

      <div className="flex flex-col justify-center pt-6 px-28 gap-5 items-center relative">
        <div className="flex justify-between w-[85vw] relative ">
          <img src={FossUnited} className="" alt="Foss United Logo" />
          <div className="flex justify-between font-semibold text-lg items-center gap-10">
            <div className="cursor-pointer hover:text-[#8F979F]">Sponsors</div>
            <div className="cursor-pointer hover:text-[#8F979F]">
              Community Partners
            </div>
            <div className="cursor-pointer hover:text-[#8F979F]">FAQ</div>
          </div>
        </div>
        <div className="bg-green-500 h-[2px] w-[90vw] relative " />
      </div>

      <div className="flex flex-col items-center mt-24">
        <img src={IndiaFoss} className="mb-10" alt="India Foss" />
        <div className="text-3xl font-bold w-[60vw] text-center mb-10">
          The 3rd edition of the Free and Open Source Software conference +
          unconference by the FOSS United community.
        </div>
        <div className="bg-black text-white p-2 flex gap-1 font-medium mb-20 px-4">
          28-29 OCT 2023 |{" "}
          <a
            className="underline flex"
            target="blank"
            href="https://www.google.com/maps/place/NIMHANS+Convention+Centre+-+Bengaluru/@12.9414585,77.5922443,17z/data=!4m7!3m6!1s0x3bae15b78a61be57:0xc4498066da178922!8m2!3d12.9431686!4d77.5965084!15sCiROSU1IQU5TIENvbnZlbnRpb24gQ2VudHJlLCBCZW5nYWx1cnUiA4gBAZIBEWNvbnZlbnRpb25fY2VudGVy4AEA!16s%2Fg%2F1tl0vsf_?entry=tts&shorturl=1"
          >
            {" "}
            NIMHANS Convention Centre, Bengaluru
            <img src={arrow} />
          </a>{" "}
        </div>
        <div className="w-[80vw] flex gap-10 flex-wrap xl:px-32 2xl:px-40 lg:px-16">
          <div className="flex gap-10 flex-wrap grow">
            <Button>Conference Schedule</Button>
            <Button>Unconference Track</Button>
          </div>
          <div className="flex gap-10 flex-wrap grow">
            <Button>Travel Guide</Button>
            <Button>FAQ</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
