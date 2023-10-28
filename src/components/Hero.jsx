import React from "react";

import {
  RiCheckboxBlankCircleFill,
  RiPlayFill,
  RiStarFill,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section
      className="min-h-[100vh] pt-32 pb-8 grid grid-cols-1 md:grid-cols-8"
      id="hero"
    >
      {/* Infomration */}
      <div className="md:col-span-5 flex items-center justify-center content-box p-8 xl:p-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl xl:text-6xl font-bold xl:leading-[7.5rem] leading-[3.5rem]">
            Web Design Impacful Digital{" "}
            <span className="px-4 text-primary border-8 border-primary relative inline-block mt-2 md:mt-0">
              Products
              <RiCheckboxBlankCircleFill className="text-base absolute text-white p-2 bg-primary rounded-full box-content -top-5 -left-5" />
              <RiCheckboxBlankCircleFill className="text-base absolute text-white p-2 bg-primary rounded-full box-content -top-5 -right-5" />
              <RiCheckboxBlankCircleFill className="text-base absolute text-white p-2 bg-primary rounded-full box-content -bottom-5 -left-5" />
              <RiCheckboxBlankCircleFill className="text-base absolute text-white p-2 bg-primary rounded-full box-content -bottom-5 -right-5" />
            </span>
          </h1>
          <p className="text-gray-500 text-lg leading-[2.5rem] ">
            Help find solutions with intitutive and in accordance with client
            business goals. we provide a high-quality services.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full md:w-auto bg-primary text-white py-2 px-8 rounded-xl text-lg">
              Contact Us
            </button>
            <button className="w-full md:w-auto py-2 text-left flex items-center gap-4 px-8 rounded-xl text-lg">
              <RiPlayFill className="bg-secondary text-primary p-4 box-content rounded-full" />{" "}
              Watch our <br />
              introduction video
            </button>
          </div>
        </div>
        <div className=""></div>
      </div>
      {/* Image Hero */}
      <div className="md:col-span-3 flex items-center justify-center relative p-4 ">
        <div className="md:w-[80%] w-full">
          <img
            src="Hero.png"
            alt=""
            className="w-auto object-cover xl:-mt-28"
          />
          <div className="bg-white shadow-lg flex flex-col justify-center gap-2 p-4 max-w-[250px] mx-auto relative ">
            <div className="block h-12">
              <div className="flex flex-items-center relative">
                <img
                  src="1.jpg"
                  alt=""
                  className="object-contain w-12 h-12 border-[3px] border-white rounded-full absolute left-0 "
                />
                <img
                  src="2.jpg"
                  alt=""
                  className="object-contain w-12 h-12 border-[3px] border-white rounded-full absolute left-[20px]"
                />
                <img
                  src="3.jpg"
                  alt=""
                  className="object-contain w-12 h-12 border-[3px] border-white rounded-full absolute left-[40px]"
                />
                <img
                  src="4.jpg"
                  alt=""
                  className="object-contain w-12 h-12 border-[3px] border-white rounded-full absolute left-[60px]"
                />
                <img
                  src="5.jpg"
                  alt=""
                  className="object-contain w-12 h-12 border-[3px] border-white rounded-full absolute left-[80px]"
                />
              </div>
            </div>
            <h2 className="text-xl font-bold tracking-[1px] text-gray-800">
              120 + Employees
            </h2>
            <div className="flex items-center gap-2 text-lg text-gray-500">
              <RiStarFill className="text-primary" />
              5.0 (3.1k reviews)
            </div>
            <div className="absolute h-60 w-60 bg-white -bottom-[6px] -right-[6px] -z-10 max-[500px]:hidden"></div>
            <RiCheckboxBlankCircleFill className="absolute text-primary text-[60px] lg:text-8xl -bottom-9 lg:-bottom-[54px] -right-9 lg:-right-[54px] -z-20 max-[350px]:hidden" />
          </div>
        </div>
        {/* Circle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 lg:w-[380px] w-[290px] h-[290px] lg:h-[380px] bg-secondary -z-10  rounded-full border-[10px] border-primary"></div>
        {/* Logos */}
        <div className="max-[500px]:left-12 max-[500px]:w-16 md:-left-4 w-20 absolute -rotate-12 top-36 xl:left-24 left-24 rounded-full">
          <img
            src="adobe.png"
            alt=""
            className="object-contain p-2 bg-[#470137] border-l-[6px] border-gray-400 rounded-full -mt-16 ml-[5px]"
          />
        </div>

        <div className="rounded-full max-[500px]:w-16 max-[500px]:h-16 max-[500px]:right-16 bg-gray-400 z-10  w-20 h-20 absolute -rotate-12 top-16 md:right-4 right-24 xl:right-24">
          <img
            src="figma.png"
            alt=""
            className="object-cover rounded-full w-20 h-20 max-[500px]:w-16 max-[500px]:h-16 ml-2"
          />
        </div>

        <img
          src="sketch.png"
          alt=""
          className="w-12 h-12 absolute top-2 left-2 object-cover rounded-full -rotate-12 bg-gray-700 p-3"
        />
      </div>
    </section>
    /* #470137 */
  );
};

export default Hero;
