import React from "react";

const MobileMenu = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col justify-center w-screen h-screen bg-[#232323] -z-10 text-white">
      <ul className="flex flex-col w-full h-full gap-4 p-8 justify-evenly md:flex-row">
        <li className="grid grid-cols-2 cursor-pointer sm:flex sm:justify-center sm:gap-4 sm:items-center">
          <span className="grid justify-start text-lg text-orange-600 sm:text-xl">
            01
          </span>
          <a href="" className="text-lg justify-self-end sm:text-2xl">
            Startsida
          </a>
        </li>
        <li className="grid grid-cols-2 cursor-pointer sm:flex sm:justify-center sm:gap-4 sm:items-center">
          <span className="grid justify-start text-lg text-orange-600 sm:text-xl">
            02
          </span>
          <a href="" className="text-lg justify-self-end sm:text-2xl">
            Om Oss
          </a>
        </li>
        <li className="grid grid-cols-2 cursor-pointer sm:flex sm:justify-center sm:gap-4 sm:items-center">
          <span className="grid justify-start text-lg text-orange-600 sm:text-xl">
            03
          </span>
          <a href="" className="text-lg justify-self-end sm:text-2xl">
            Kontakta Oss
          </a>
        </li>
        <li className="grid grid-cols-2 cursor-pointer sm:flex sm:justify-center sm:gap-4 sm:items-center">
          <span className="grid justify-start text-lg text-orange-600 sm:text-xl">
            04
          </span>
          <a href="" className="text-lg justify-self-end sm:text-2xl">
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
