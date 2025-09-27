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
          imageUrl={"./home.png"}
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
        />
        <TestimonialBlock />
        <GetInTouch />
      </main>
    </>
  );
};

export default HomePage;
