import React from "react";
import { RiMailFill } from "react-icons/ri";
import { LuSmartphone, LuMonitor } from "react-icons/lu";

const Contact = () => {
  return (
    <section className="w-[90%] grid sm:grid-cols-2 grid-cols-1 mx-auto sm:py-10 pb-8">
      {/* Contact/Suscription */}
      <div className="py-10 sm:py-20 flex flex-col gap-2 sm:gap-6 pr-2">
        <h1 className="text-xl sm:text-5xl font-bold">How we can help you</h1>
        <p className="text-lg sm:text-xl text-gray-500">
          Follow our newsletter. We will regulary update our latest project and
          availability.
        </p>
        <div className="relative mt-2 rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-2xl">
              <RiMailFill />
            </span>
          </div>
          <input
            type="text"
            name="price"
            id="price"
            className="block w-full rounded-xl border-0 pl-12 sm:pl-10 text-gray-900 bg-gray-100 placeholder:text-gray-400 placeholder:text-sm sm:placeholder:text-lg p-2 sm:p-4 focus:border-white focus:outline-none"
            placeholder="Enter your email"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button className="p-2 py-2 sm:p-2 bg-primary sm:px-7 font-medium text-white sm:text-lg rounded-xl sm:mr-3">
              Suscribe
            </button>
          </div>
        </div>
      </div>
      <div className="grid sm:grid-rows-2 grid-rows-1">
        <div className="flex flex-row flex-wrap justify-center">
          <div className="p-2 sm:p-8 w-[50%] flex flex-col gap-2">
            <span className=" bg-secondary p-2 flex h-14 items-center w-14 justify-center rounded-lg">
              <LuSmartphone className="text-4xl text-primary text-center" />
            </span>
            <h3 className=" text-lg sm:text-2xl font-bold">UI/UX Design</h3>
            <p className="text-sm sm:text-lg text-gray-600">
              Sometimes features require a short description
            </p>
          </div>
          <div className="p-2 sm:p-8 w-[50%] flex flex-col gap-2">
            <span className=" bg-secondary p-2 flex w-14 h-14 items-center justify-center rounded-lg">
              <LuMonitor className="text-4xl text-primary text-center" />
            </span>
            <h3 className="text-lg sm:text-2xl font-bold">Logo Branding</h3>
            <p className="text-sm sm:text-lg text-gray-600">
              Sometimes features require a short description
            </p>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          <div className="p-2 sm:p-8 w-[50%] flex flex-col gap-2">
            <span className=" bg-secondary p-2 flex h-14 items-center w-14 justify-center rounded-lg">
              <LuSmartphone className="text-4xl text-primary text-center" />
            </span>
            <h3 className="text-lg sm:text-2xl font-bold">App Design</h3>
            <p className="text-sm sm:text-lg text-gray-600">
              Sometimes features require a short description
            </p>
          </div>
          <div className="p-2 sm:p-8 w-[50%] flex flex-col gap-2">
            <span className=" bg-secondary p-2 flex w-14 h-14 items-center justify-center rounded-lg">
              <LuMonitor className="text-4xl text-primary text-center" />
            </span>
            <h3 className="text-lg sm:text-2xl font-bold">Webiste Design</h3>
            <p className="text-sm sm:text-lg text-gray-600">
              Sometimes features require a short description
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
