import { NavLink, useLocation } from "react-router";
import Close from "./svgComponents/Close";
import Phone from "./svgComponents/Phone";

interface NavLinks {
  link: string;
  path: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLinks[];
  scrollTo: (section: string) => void;
}

const MobileMenu = ({ isOpen, onClose, links }: MobileMenuProps) => {
  const location = useLocation();

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
        isOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div
        className={`fixed backdrop-blur-md bg-black/40 bg-opacity-50 inset-0 transition-opacity duration-300 ${
          isOpen ? "bg-opacity-50" : "bg-opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-semibold text-gray-800">Menu</span>
          <button onClick={onClose} className="p-2 cursor-pointer">
            <Close />
          </button>
        </div>
        <div className="p-4">
          <ul className="space-y-4">
            {links.map((link, index) => (
              <NavLink
                to={link.path}
                key={index}
                onClick={onClose}
                className={`block py-2 cursor-pointer text-gray-700 hover:text-[#5F815E] transition-colors ${
                  location.pathname === link.path
                    ? "text-[#5F815E] font-bold"
                    : ""
                }`}
              >
                {link.link}
              </NavLink>
            ))}
          </ul>
          <div className="w-full space-y-6 mt-6 ">
            <p className="flex items-center gap-2 text-sm text-[#67777E]">
              {" "}
              <Phone /> 07438 800 134
            </p>
            <NavLink
              to="/careers"
              className="px-2 py-1 w-full  flex justify-center rounded-lg text-[#00334D] border-[1px] border-[#00334D]  transition-colors text-sm"
            >
              Refer a Client
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
