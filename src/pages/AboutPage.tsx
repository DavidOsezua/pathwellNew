import BackToHome from "../components/BackToHome";
import GetInTouch from "../components/GetInTouch";
import HeroComponent from "../components/HeroComponent";

import ThreeColumnGrid from "../components/ThreeColumnGrid";
import TwoColumnGrid from "../components/TwoColumnGrid";
import WhyChooseSection from "../components/WhyChooseSection";
import { gridData, values } from "../data/data";

const AboutPage = () => {
  return (
    <>
      <BackToHome />
      <main>
        <HeroComponent
          subheading={"Trusted Housing-Based Support"}
          imageUrl={"./about.jpg"}
          title={"About Us"}
          features1={"CIC Compliant"}
          features2={"Regulatory Oversight"}
          features3={"Transparent Reporting"}
          featureColor1={"bg-white"}
          featureColor2={"bg-white"}
          featureColor3={"bg-white"}
          subheading2={
            "PathWell was created to meet the growing need for supported living services in Southwark, Lambeth, and Lewisham. We saw that many people leaving hospital or struggling with mental health challenges needed more than a place to stay"
          }
        />
        <TwoColumnGrid gridData={gridData} />

        <ThreeColumnGrid
          data={values}
          subtitle={"The principles that guide everything we do"}
          title={"Our Values"}
        />
        <WhyChooseSection />
        <GetInTouch />
      </main>
    </>
  );
};

export default AboutPage;
