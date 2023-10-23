import React from "react";

const Clients = () => {
  return (
    <div className="bg-gray-100 sm:p-16 py-16 flex items-center justify-center flex-col gap-8 mt-20 xl:mt-0">
      <h1 className="text-2xl w-full font-medium text-gray-800 text-center">
        Trusted by greatest companies
      </h1>
      <div className="flex flex-col flex-wrap md:flex-row justify-center items-center gap-x-16 ">
        <img src="google.png" alt="" className="sm:w-40 w-32" />
        <img src="amazon.png" alt="" className="sm:w-40 w-32 mt-8 lg:mt-0" />
        <img src="airbnb.png" alt="" className="sm:w-40 w-32 mt-8 lg:mt-0" />
        <img src="shopify.png" alt="" className="sm:w-40 w-32" />
        <img src="google.png" alt="" className="sm:w-40 w-32" />
      </div>
    </div>
  );
};

export default Clients;
