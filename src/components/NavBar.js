import { useState } from "react";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [menu, setMenu] = useState("mobile");
  const [toggleMenu, setToggleMenu] = useState(false);
  /* render different menus depending on screen size */
  /* create state here? */
  /* send state here, render out different menu based on state */
  return (
    <nav className="fixed left-0 right-0 z-10 pt-6 pl-4 pr-4 mx-auto  2xl:pl-0 2xl:pr-0 max-w-7xl font-mont">
      {/* ICONS */}
      <div className="flex justify-end md:justify-between">
        <div className="hidden gap-2 md:flex">
          <a href="https//google.se">
            <AiOutlineFacebook size={"28px"} color="white" />
          </a>

          <a href="https//google.se">
            <AiOutlineInstagram size={"28px"} color="white" />
          </a>
        </div>
        <button type="button">
          {!toggleMenu && (
            <GiHamburgerMenu
              size={"28px"}
              color="white"
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            />
          )}
          {toggleMenu && (
            <AiOutlineClose
              size={"28px"}
              color="white"
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            />
          )}
        </button>
      </div>
      {toggleMenu && <MobileMenu />}
    </nav>
  );
};

export default NavBar;
