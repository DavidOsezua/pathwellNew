import BackToHome from "../components/BackToHome";
import CareerOpportunitiesSection from "../components/CareerOpportunitiesSection ";
import GetInTouch from "../components/GetInTouch";
import HeroComponent from "../components/HeroComponent";
import ProcessFlow from "../components/ProcessFlow";
import ThreeColumnGrid from "../components/ThreeColumnGrid";
import TwoColumnGrid from "../components/TwoColumnGrid";
import {
  applicationSteps,
  benefitsPerksData,
  careerGridData,
} from "../data/data";

const CareersPage = () => {
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
          subheading={
            "Careers at PathWell: Be Part of a Diverse, Supportive Team"
          }
          imageUrl={"./careers.jpg"}
          title={"Careers"}
          features1={"Meaningful Work"}
          features2={"Career Development"}
          features3={"Supportive Environment"}
          featureColor1={"bg-[#6E8F56]"}
          featureColor2={"bg-[#6E8F56]"}
          featureColor3={"bg-[#6E8F56]"}
          subheading2={
            "Every day at PathWell is an opportunity to make a difference. Join a team where your work creates meaningful impact, your career can grow, and you’ll always be supported by colleagues who share the same mission: transforming lives."
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
          bgColor="bg-[#6E8F561A]"
          textColor="text-[#6E8F56]"
        />
        {/* <ApplicationProcess /> */}

        <ProcessFlow
          title={"Application Process"}
          subtitle={"Simple steps to join our team"}
          steps={applicationSteps}
          themeColor={"#6E8F56"}
        />
        <GetInTouch
          buttonText3="Make a Referral"
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

export default CareersPage;
