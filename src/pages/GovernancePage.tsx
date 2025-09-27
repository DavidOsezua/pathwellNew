import BackToHome from "../components/BackToHome";
import GetInTouch from "../components/GetInTouch";
import HeroComponent from "../components/HeroComponent";
import QualityAssuranceSection from "../components/QualityAssuranceSection ";
import RegulatoryComplianceSection from "../components/RegulatoryComplianceSection ";
import ThreeColumnGrid from "../components/ThreeColumnGrid";
import TwoColumnGrid from "../components/TwoColumnGrid";
import { governanceFrameworkData, governanceGridData } from "../data/data";

const GovernancePage = () => {
  return (
    <>
      <BackToHome />
      <main>
        <HeroComponent
          subheading={"Transparency, Accountability & Excellence"}
          imageUrl={"./governance.jpg"}
          title={"Governance"}
          features1={"CIC Compliant"}
          features2={"Regulatory Oversight"}
          features3={"Transparent Reporting"}
          featureColor1={"bg-white"}
          featureColor2={"bg-white"}
          featureColor3={"bg-white"}
          subheading2={
            "As a Community Interest Company, PathWell Group maintains the highest standards of governance, regulatory compliance, and transparency in all our operations."
          }
        />
        <TwoColumnGrid gridData={governanceGridData} />
        <ThreeColumnGrid
          data={governanceFrameworkData}
          subtitle={
            "Comprehensive oversight across all aspects of our operations"
          }
          title={"Governance Framework"}
        />
        <RegulatoryComplianceSection />
        <QualityAssuranceSection />
        <GetInTouch />
      </main>
    </>
  );
};

export default GovernancePage;
