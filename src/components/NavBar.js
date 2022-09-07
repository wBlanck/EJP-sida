import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  return (
    <nav className="container fixed left-0 right-0 pt-6 pl-4 pr-4 mx-auto 2xl:pl-0 2xl:pr-0 max-w-7xl font-mont">
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
          <GiHamburgerMenu size={"28px"} color="white" />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
