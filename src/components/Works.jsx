import React from "react";

const Works = () => {
  return (
    <div className="w-[90%] m-auto py-20" id="abautUs">
      <div className=" mb-8 flex flex-col gap-3">
        <h1 className="text-[40px] font-medium">
          We create world-class digital products
        </h1>
        <p className="text-xl text-gray-500">
          By information about design the world to the best instructors, heatc
          helping By information
        </p>
      </div>
      {/* Works */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <img src="work1.png" alt="" className="w-full rounded-3xl bg-cover" />
          <p className="text-gray-500">App Design - June 20, 2022</p>
          <h3 className="text-2xl font-bold">App Redesign</h3>
          <p className="text-gray-500">
            By information about design the world to the best instructors, heatc
            helping By information about design the world to the best
            instructors, heatc helping
          </p>
        </div>
        <div className="grid grid-rows-1 sm:grid-rows-2">
          <div className="w-full flex flex-col sm:flex-row justify-around ">
            <div className="sm:w-[50%] mx-auto max-[630px]:my-4 flex justify-center flex-col sm:p-8 gap-2">
              <img src="work2.png" alt="" className="rounded-3xl" />
              <p className="text-gray-500">App Design - June 20, 2022</p>
              <h3 className="text-2xl font-bold">
                Redesign channel website landng page
              </h3>
            </div>
            <div className="sm:w-[50%] mx-auto max-[630px]:my-4 flex justify-center flex-col sm:p-8 gap-2">
              <img src="work3.png" alt="" className="rounded-3xl" />
              <p className="text-gray-500">App Design - June 20, 2022</p>
              <h3 className="text-2xl font-bold">
                Redesign channel website landng page
              </h3>
            </div>
          </div>
          <div className="w-full flex flex-col sm:flex-row justify-around ">
            <div className="sm:w-[50%] mx-auto max-[630px]:my-4 flex justify-center flex-col sm:p-8 gap-2">
              <img src="work4.png" alt="" className="rounded-3xl" />
              <p className="text-gray-500">App Design - June 20, 2022</p>
              <h3 className="text-2xl font-bold">
                Redesign channel website landng page
              </h3>
            </div>
            <div className="sm:w-[50%] mx-auto max-[640px]:my-4 flex justify-center flex-col sm:p-8 gap-2">
              <img src="work5.png" alt="" className="" />
              <p className="text-gray-500">App Design - June 20, 2022</p>
              <h3 className="text-2xl font-bold">
                Redesign channel website landng page
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
