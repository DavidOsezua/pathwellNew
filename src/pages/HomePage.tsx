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
            "Support that feels like home - for children, spa adults, and supported living."
          }
          imageUrl={"./home.jpg"}
          title={""}
          features1={"CIC Compliant"}
          features2={"Regulatory Oversight"}
          features3={"Transparent Reporting"}
          featureColor1={"bg-white"}
          featureColor2={"bg-white"}
          featureColor3={"bg-white"}
          subheading2={
            "At PathWell, we stand beside people at every stage of life, offering stability, independence, and hope for brighter futures."
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
          buttonText={"Make a Referral"}
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
