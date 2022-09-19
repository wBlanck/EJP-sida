import { useState } from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import MobileMenu from "./MobileMenu";

import { motion } from "framer-motion";

const NavBar = () => {
  const [menu, setMenu] = useState("mobile");
  const [showMenu, setShowMenu] = useState(false);
  /* render different menus depending on screen size */
  /* create state here? */
  /* send state here, render out different menu based on state */
  return (
    <motion.header className="fixed left-0 right-0 z-10 pt-6 pl-4 pr-4 mx-auto 2xl:pl-0 2xl:pr-0 max-w-7xl font-mont">
      {/* ICONS */}
      <div className="flex justify-end md:justify-between">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          transition={{ duration: 1.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          className="hidden gap-2 md:flex">
          <a href="https//google.se">
            <AiOutlineFacebook size={"28px"} color="white" />
          </a>

          <a href="https//google.se">
            <AiOutlineInstagram size={"28px"} color="white" />
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
            <GiHamburgerMenu
              size={"28px"}
              color="white"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          )}
          {showMenu && (
            <AiOutlineClose
              size={"28px"}
              color="white"
              onClick={() => {
                setShowMenu(!showMenu);
              }}
            />
          )}
        </motion.button>
      </div>
      {showMenu && <MobileMenu />}
    </motion.header>
  );
};

export default NavBar;
