import BackToHome from "../components/BackToHome";
import GetInTouch from "../components/GetInTouch";
import HeroComponent from "../components/HeroComponent";
import ServiceHighlightCards from "../components/ServiceHighlightCards ";
import ThreeColumnGrid from "../components/ThreeColumnGrid";
import WhoWeServeSection from "../components/WhoWeServeSection";
import { additionalServicesData } from "../data/data";

const ServicePage = () => {
  return (
    <>
      <BackToHome
        title={"Back to Home"}
        path={"/"}
        arrowColor={"#6E8F56"}
        titleColor={"text-[#6E8F56]"}
      />
      <main>
        <HeroComponent
          subheading={"Comprehensive Care Solutions for Vulnerable Individuals"}
          imageUrl={"./services.png"}
          title={"Our Services"}
          features1={"Child Care Placements"}
          features2={"Supported Living"}
          features3={"Adult Home Care"}
          featureColor1={"bg-[#2BADEE]"}
          featureColor2={"bg-[#F9C31F]"}
          featureColor3={"bg-[#2EB8A1]"}
          subheading2={
            "PathWell Group provides specialized care services with 24/7 support when you need it most."
          }
        />
        <ServiceHighlightCards />
        <ThreeColumnGrid
          data={additionalServicesData}
          subtitle={""}
          title={""}
          bgColor="bg-[#6E8F561A]"
          textColor="text-[#6E8F56]"
        />
        <WhoWeServeSection />
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

export default ServicePage;
