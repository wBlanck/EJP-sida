import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { VscMenu } from "react-icons/vsc";
import { FiPhone } from "react-icons/fi";

import { AiOutlineClose } from "react-icons/ai";
import MobileMenu from "./MobileMenu";

import { motion } from "framer-motion";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  /* render different menus depending on screen size */
  /* create state here? */
  /* send state here, render out different menu based on state */
  return (
    <motion.header className="fixed left-0 right-0 z-20 pt-6 pl-4 pr-4 mx-auto 2xl:pl-0 2xl:pr-0 max-w-7xl font-mont">
      {/* ICONS */}
      <div className="flex justify-between">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          transition={{ duration: 1.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          className="flex gap-4">
          <a
            className="flex items-center justify-center gap-4 text-white transition-all hover:text-orange-600"
            href="https//google.se">
            <AiOutlineMail size={"28px"} className="inline " />
            <span className="hidden lg:inline">byggarebob@gmail.com</span>
          </a>

          <a
            className="flex items-center justify-center gap-4 text-white transition-all hover:text-orange-600"
            href="https//google.se">
            <FiPhone size={"28px"} className="inline " />
            <span className="hidden tracking-widest lg:inline">
              076-5481685
            </span>
          </a>
        </motion.div>
        <motion.button
          initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
          }}
          transition={{ duration: 1.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          type="button">
          {!showMenu && (
            <VscMenu
              className="text-white transition-all hover:text-orange-600 hover:scale-125"
              size={"28px"}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          )}
          {showMenu && (
            <AiOutlineClose
              className="text-white transition-all hover:text-orange-600 hover:scale-125"
              size={"28px"}
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          )}
        </motion.button>
      </div>
      {showMenu && <MobileMenu setShowMenu={setShowMenu} />}
    </motion.header>
  );
};

export default NavBar;
