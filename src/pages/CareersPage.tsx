import ApplicationProcess from "../components/ApplicationProcess";
import BackToHome from "../components/BackToHome";
import CareerOpportunitiesSection from "../components/CareerOpportunitiesSection ";
import GetInTouch from "../components/GetInTouch";
import HeroComponent from "../components/HeroComponent";
import ThreeColumnGrid from "../components/ThreeColumnGrid";
import TwoColumnGrid from "../components/TwoColumnGrid";
import { benefitsPerksData, careerGridData } from "../data/data";

const CareersPage = () => {
  return (
    <>
      <BackToHome />
      <main>
        <HeroComponent
          subheading={"Join Our Mission to Transform Lives"}
          imageUrl={"./careers.jpg"}
          title={"Careers"}
          features1={"Meaningful Work"}
          features2={"Career Development"}
          features3={"Supportive Environment"}
          featureColor1={"bg-[#6E8F56]"}
          featureColor2={"bg-[#6E8F56]"}
          featureColor3={"bg-[#6E8F56]"}
          subheading2={
            "Build a rewarding career with PathWell Group, where every day offers the opportunity to make a meaningful difference in the lives of vulnerable individuals and families."
          }
        />
        <TwoColumnGrid gridData={careerGridData} />
        <CareerOpportunitiesSection />
        <ThreeColumnGrid
          data={benefitsPerksData}
          subtitle={
            "Comprehensive benefits supporting your professional and personal well-beings"
          }
          title={"Benefits & Perks"}
        />
        <ApplicationProcess />
        <GetInTouch />
      </main>
    </>
  );
};

export default CareersPage;
