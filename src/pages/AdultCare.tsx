import AdultCareTwoColumn from "../components/AdultCareTwoColumn";
import BackToHome from "../components/BackToHome";
import GetInTouch from "../components/GetInTouch";
import ProcessFlow from "../components/ProcessFlow";
import ThreeColumnGrid from "../components/ThreeColumnGrid";
import {
  adultCareGridData,
  adultCareServices,
  carePathwaySteps,
} from "../data/data";

const AdultCare = () => {
  return (
    <>
      <BackToHome
        title={"Back to services"}
        path={"/service"}
        arrowColor={"#2EB8A1"}
        titleColor={"text-[#2EB8A1]"}
      />
      <main>
        <AdultCareTwoColumn gridData={adultCareGridData} />
        <ThreeColumnGrid
          data={adultCareServices}
          subtitle={"Comprehensive Support for Adults with Ongoing Needs"}
          title={"Adult Care Services"}
          textColor={"text-[#2EB8A1]"}
          bgColor={"bg-[#2EB8A11A]"}
        />
        <ProcessFlow
          title={"Our Care Pathway"}
          subtitle={"Comprehensive Support for Adults with Ongoing Needs"}
          steps={carePathwaySteps}
          themeColor={"#2EB8A1"}
        />
        <GetInTouch
          buttonText={"Discuss Your Care Needs"}
          bgColor={"bg-[#2EB8A1]"}
          bgTransparent={"bg-[#2EB8A11A]"}
          borderColor={"border-[#2EB8A14D]"}
          textColor={"text-[#2EB8A1]"}
        />
      </main>
    </>
  );
};

export default AdultCare;
