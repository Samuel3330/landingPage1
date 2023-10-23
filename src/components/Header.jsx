import React, { useState } from "react";

//Icons
import {
  RiCheckboxBlankCircleFill,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="max-2xl:bg-white max-2xl:shadow-sm  flex items-center fixed justify-between w-full py-4 px-8 h-[10vh] z-50 max-w-[1700px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="-top-[130px] left-0 max-2xl:hidden  absolute rotate-180 -z-10"
        viewBox="0 0 1440 320"
      >
        {/* 2E3E5C */}
        <path
          fill="#F3F4F6"
          fill-opacity="1"
          d="M0,224L480,128L960,192L1440,128L1440,320L960,320L480,320L0,320Z"
        ></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="-top-[129px] left-0 max-2xl:hidden absolute rotate-180 -z-50"
        viewBox="0 0 1440 320"
      >
        {/* 2E3E5C */}
        <path
          fill="#F1F1F1"
          fill-opacity="1"
          d="M0,224L480,128L960,192L1440,128L1440,320L960,320L480,320L0,320Z"
        ></path>
      </svg>
      <div className="xl:w-1/6 text-center -mt-4">
        <a
          href="#"
          className="text-2xl font-bold relative max-2xl:bg-white bg-[#F3F4F6] p-0"
        >
          Power<span className="text-primary text-4xl">.</span>
          <RiCheckboxBlankCircleFill className="absolute -left-3 -bottom-3 -z-10 text-primary" />
        </a>
      </div>
      <nav
        className={`fixed w-full md:w-[40%] xl:w-full h-full ${
          showMenu
            ? "left-0 bg-white justify-center text-center"
            : "-left-full bg-transparent"
        } top-0 xl:static flex-1 flex flex-col xl:flex-row items-center gap-10 justify-center transition-all duration-500 z-10 xl:pl-52`}
      >
        <a
          href="#"
          className="text-xl font-medium text-gray-800 hover:text-gray-950"
        >
          Home
        </a>
        <a
          href="#"
          className="text-xl font-medium text-gray-800 hover:text-gray-950"
        >
          Abaut us
        </a>
        <a
          href="#"
          className="text-xl font-medium text-gray-800 hover:text-gray-950"
        >
          Services
        </a>
        <a
          href="#"
          className="text-xl font-medium text-gray-800 hover:text-gray-950"
        >
          Products
        </a>
      </nav>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="text-2xl xl:hidden p-2 z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </header>
  );
};

export default Header;
