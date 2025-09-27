import { useState } from "react";

import { NavLink, useLocation } from "react-router";
import { navLinks } from "../data/data";
import Hamburger from "./svgComponents/Hamburger";
import MobileMenu from "./MobileMenu";
import Phone from "./svgComponents/Phone";

interface NavLink {
  link: string;
  path: string;
}

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const location = useLocation();

  const toggleHandler = () => {
    setToggle((prev) => !prev);
  };

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section);
    element?.scrollIntoView({
      behavior: "smooth",
    });
  };

  console.log(location.pathname);
  return (
    <header className="bg-white shadow-sm h-20 sticky top-0  z-50 ">
      <nav className="sectionContainer flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center">
          <img src="/logo.png" alt="" className="w-[80px] md:w-[120px]" />
        </NavLink>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex items-center space-x-6">
            {navLinks.map((link: NavLink) => (
              <li
                className={`hover:text-[#5F815E] text-[12px] ${
                  location.pathname === link.path
                    ? "text-[#5F815E] font-bold"
                    : ""
                }`}
                key={link.link}
              >
                <NavLink to={link.path}>{link.link}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className=" hidden lg:flex items-center space-x-6">
          <p className="flex items-center gap-2 text-sm text-[#67777E]">
            {" "}
            <Phone /> 07438 800 134
          </p>
          <NavLink
            to="/careers"
            className="px-2 py-1 rounded-lg text-[#00334D] border-[1px] border-[#00334D]  transition-colors text-sm"
          >
            Refer a Client
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            onClick={toggleHandler}
            className="p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
          >
            <Hamburger />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={toggle}
        onClose={() => setToggle(false)}
        links={navLinks}
        scrollTo={scrollToSection}
      />
    </header>
  );
};
export default Navbar;
