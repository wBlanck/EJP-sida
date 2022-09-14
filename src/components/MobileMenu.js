import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const MobileMenu = () => {
  return (
    <div className="fixed flex flex-col items-center justify-center w-screen h-screen bg-slate-400">
      <AiOutlineClose size={34} className="self-end" />
      <ul className="w-full p-8">
        <li className="grid grid-cols-2">
          <span className="grid justify-start text-2xl">01</span>
          <a href="" className="justify-self-end">
            Startsida
          </a>
        </li>
        <li className="grid grid-cols-2">
          <span className="grid justify-center text-2xl">02</span>
          <a href="" className="justify-self-end">
            Om Oss
          </a>
        </li>
        <li className="grid grid-cols-2">
          <span className="grid justify-center text-2xl">03</span>
          <a href="" className="justify-self-end">
            Kontakta Oss
          </a>
        </li>
        <li className="grid grid-cols-2">
          <span className="grid justify-center text-2xl">04</span>
          <a href="" className="justify-self-end">
            Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
