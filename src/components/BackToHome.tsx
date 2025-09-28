import { NavLink } from "react-router";
import BackArrow from "./svgComponents/BackArrow";

interface BackToHomeProps {
  title: string;
  path: string;
  arrowColor: string;
  titleColor: string;
}

const BackToHome = ({
  title,
  path,
  arrowColor,
  titleColor,
}: BackToHomeProps) => {
  return (
    <header className="bg-white border-t-[1px] shadow-sm border-[#3e3d3d23] h-20 sticky top-20  z-40">
      <div className="sectionContainer flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
        <NavLink to={path} className={` ${titleColor} flex gap-2 items-center`}>
          <BackArrow strokeColor={arrowColor} />
          {title}
        </NavLink>
      </div>
    </header>
  );
};

export default BackToHome;
