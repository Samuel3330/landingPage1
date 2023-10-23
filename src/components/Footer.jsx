import React from "react";
import {
  RiInstagramLine,
  RiFacebookFill,
  RiGithubLine,
  RiTwitterLine,
} from "react-icons/ri";
const Footer = () => {
  return (
    <footer className="bg-[#2E3E5C] py-20">
      <div className="w-[90%] m-auto flex flex-col">
        <div className="flex flex-row items-center py-10 justify-between border-b-2 border-gray-500 flex-wrap gap-y-3">
          <a href="#" className="text-3xl text-white font-bold relative p-0">
            Power<span className="text-primary text-4xl">.</span>
          </a>
          <div className="flex flex-row gap-4 items-center">
            <a
              href="#"
              className=" bg-primary flex p-2 sm:w-14 sm:h-14 items-center justify-center rounded-full cursor-pointer"
            >
              <RiInstagramLine className="text-xl text-white text-center" />
            </a>
            <a
              href="#"
              className=" bg-primary p-2 flex sm:w-14 sm:h-14 items-center justify-center rounded-full cursor-pointer"
            >
              <RiFacebookFill className="text-xl text-white text-center" />
            </a>
            <a
              href="#"
              className=" bg-primary p-2 flex sm:w-14 sm:h-14 items-center justify-center rounded-full cursor-pointer"
            >
              <RiGithubLine className="text-xl text-white text-center" />
            </a>
            <a
              href="#"
              className=" bg-primary p-2 flex sm:w-14 sm:h-14 items-center justify-center rounded-full cursor-pointer"
            >
              <RiTwitterLine className="text-xl text-white text-center" />
            </a>
          </div>
        </div>
        <div className="py-8">
          <h2 className="text-xl text-white font-bold">Company</h2>
        </div>
        <div className="flex max-[320px]:justify-center justify-between items-center flex-wrap gap-y-8">
          <a
            href="#"
            className="text-gray-400 w-36 text-center text-lg hover:text-gray-100"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-gray-400 w-36 text-center text-lg hover:text-gray-100"
          >
            Press
          </a>
          <a
            href="#"
            className="text-gray-400 w-36 text-center text-lg hover:text-gray-100"
          >
            Investors
          </a>
          <a
            href="#"
            className="text-gray-400 w-36 text-center text-lg hover:text-gray-100"
          >
            Events
          </a>
          <a
            href="#"
            className="text-gray-400 w-36 text-center text-lg hover:text-gray-100"
          >
            Terms of use
          </a>
          <a
            href="#"
            className="text-gray-400 w-36 text-center text-lg hover:text-gray-100"
          >
            Privacy policy
          </a>
          <button className="text-white p-2 px-5 text-sm sm:text-lg font-bold bg-primary rounded-xl">
            Contact Us
          </button>
        </div>
        <div className="mt-20 sm:p-20 flex justify-center items-center">
          <p className="text-sm sm:text-lg text-gray-300">
            © samyvisioncraft 2023 - All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
