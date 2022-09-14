import React from "react";

const MobileMenu = () => {
  return (
    <div className="fixed top-0 left-0 flex flex-col justify-center w-screen h-screen bg-[#232323] -z-10 text-white">
      <ul className="flex flex-col w-full h-full gap-4 p-8 justify-evenly">
        <li className="grid grid-cols-2">
          <span className="grid justify-start text-lg text-orange-600">01</span>
          <a href="" className="text-lg justify-self-end">
            Startsida
          </a>
        </li>
        <li className="grid grid-cols-2">
          <span className="grid justify-start text-lg text-orange-600">02</span>
          <a href="" className="text-lg justify-self-end">
            Om Oss
          </a>
        </li>
        <li className="grid grid-cols-2">
          <span className="grid justify-start text-lg text-orange-600">03</span>
          <a href="" className="text-lg justify-self-end">
            Kontakta Oss
          </a>
        </li>
        <li className="grid grid-cols-2">
          <span className="grid justify-start text-lg text-orange-600">04</span>
          <a href="" className="text-lg justify-self-end">
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
