import { ChartBar, Eye, Lock } from "lucide-react";
import GetInTouch from "../components/GetInTouch";
import HeroComponent from "../components/HeroComponent";
import Navbar2 from "../components/Navbar2";
import ServiceCards from "../components/ServiceCards";
import TestimonialBlock from "../components/TestimonialBlock";
import ThreeColumnGrid from "../components/ThreeColumnGrid";
import { ourApproachData } from "../data/data";

const HomePage = () => {
  return (
    <>
      <Navbar2 />
      <main>
        <HeroComponent
          subheading={
            "Support for Every Life Stage – Children, Adults, and Supported Living"
          }
          imageUrl={"./home.jpg"}
          title={""}
          features1={"CIC Compliant"}
          subFeature1="Community at core"
          icon1={<Lock className={`w-4 h-4 text-[#2BADEE] rounded-full`} />}
          features2={"Regulatory Oversight"}
          icon2={<Eye className={`w-4 h-4 text-[#F9C31F] `} />}
          subFeature2="Safe and accountable"
          features3={"Transparent Reporting"}
          subFeature3="Clarity for families"
          icon3={<ChartBar className={`w-4 h-4 text-[#2EB8A1] rounded-full`} />}
          subheading2={
            "Safe, compassionate care and support that empowers dignity, independence, and brighter futures"
          }
        />
        <ServiceCards />
        <ThreeColumnGrid
          data={ourApproachData}
          subtitle={
            "Safe, supportive living rooted in recovery, dignity, and community."
          }
          title={"Our Approach"}
          bgColor="bg-[#6E8F561A]"
          textColor="text-[#6E8F56]"
        />
        <TestimonialBlock />
        <GetInTouch
          buttonText3=""
          buttonText2={"Request Information"}
          bgColor={"bg-[#6E8F56]"}
          bgTransparent={"bg-[#6E8F561A]"}
          borderColor={"border-[#6E8F564D]"}
          textColor={"text-[#6E8F56]"}
        />
      </main>
    </>
  );
};

export default HomePage;
