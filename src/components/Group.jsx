import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Group = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="flex flex-col w-[90%] mx-auto justify-center py-20 gap-12">
        <h1 className="md:text-4xl text-xl font-bold text-center flex flex-col justify-center">
          Let’s hear What they says
        </h1>
        {/* Description */}
        <div className="text-center w-[98%] md:w-[60%] mx-auto flex">
          <span className="text-4xl md:text-[60px] text-primary">
            <RiDoubleQuotesL />
          </span>
          <p className="text-md md:text-lg text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus vel
            lobortis tincidunt fames quisque mauris at diam. Nullam morbi ipsum
            turpis amet id posuere torto quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore.
          </p>
          <span className="text-4xl md:text-[60px] text-primary">
            <RiDoubleQuotesR />
          </span>
        </div>
        {/* Images */}
        <div className="mt-4 flex flex-wrap justify-center sm:gap-8 gap-2">
          <img src="1.jpg" alt="" className="w-20 rounded-full" />
          <img src="2.jpg" alt="" className="w-20 rounded-full" />
          <img
            src="3.jpg"
            alt=""
            className="w-20 rounded-full sm:ring-offset-4 sm:ring-4 sm:ring-primary"
          />
          <img src="4.jpg" alt="" className="w-20 rounded-full" />
          <img src="5.jpg" alt="" className="w-20 rounded-full" />
        </div>
        {/* Autor */}
        <div className="w-full">
          <h2 className="text-xl md:text-3xl text-center font-bold">
            Ricky Aprilia
          </h2>
          <p className="text-lg md:text-2xl text-center text-gray-600">
            Founder of Varibo
          </p>
        </div>
      </div>
    </div>
  );
};

export default Group;
