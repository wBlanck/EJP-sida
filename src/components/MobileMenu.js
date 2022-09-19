import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const MobileMenu = ({ setShowMenu }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        animate={{ opacity: 1 }}
        className="fixed top-0 left-0 flex flex-col justify-center w-screen h-screen bg-[#232323] text-white -z-10">
        <ul className="flex flex-col items-center w-full h-full gap-4 p-8 justify-evenly md:flex-row">
          <li className="grid grid-cols-2 cursor-pointer sm:flex sm:justify-center sm:gap-4 sm:items-center ">
            <span className="text-lg text-orange-600 sm:text-xl">01</span>
            <a
              href="#home"
              className="text-lg transition-all justify-self-end sm:text-2xl hover:scale-110 "
              onClick={() => {
                setShowMenu(false);
              }}>
              Startsida
            </a>
          </li>
          <li className="grid grid-cols-2 cursor-pointer sm:flex sm:justify-center sm:gap-4 sm:items-center">
            <span className="text-lg text-orange-600 sm:text-xl">02</span>
            <a
              href="#about"
              className="text-lg transition-all justify-self-end sm:text-2xl hover:scale-110"
              onClick={() => {
                setShowMenu(false);
              }}>
              Om Oss
            </a>
          </li>
          <li className="grid grid-cols-2 cursor-pointer sm:flex sm:justify-center sm:gap-4 sm:items-center">
            <span className="text-lg text-orange-600 sm:text-xl">03</span>
            <a
              href="#projects"
              className="text-lg transition-all justify-self-end sm:text-2xl hover:scale-110"
              onClick={() => {
                setShowMenu(false);
              }}>
              Portfolio
            </a>
          </li>
          <li className="grid grid-cols-2 cursor-pointer sm:flex sm:justify-center sm:gap-4 sm:items-center">
            <span className="text-lg text-orange-600 sm:text-xl">04</span>
            <a
              href="#contact"
              className="text-lg transition-all justify-self-end sm:text-2xl hover:scale-110"
              onClick={() => {
                setShowMenu(false);
              }}>
              Kontakta Oss
            </a>
          </li>
        </ul>
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileMenu;
