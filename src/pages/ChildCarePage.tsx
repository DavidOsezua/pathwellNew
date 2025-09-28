import BackToHome from "../components/BackToHome";
import ChildCareTwoColumn from "../components/ChildCareTwoColumn";
import GetInTouch from "../components/GetInTouch";
import ProcessFlow from "../components/ProcessFlow";
import ThreeColumnGrid from "../components/ThreeColumnGrid";
import TypeOfPlacement from "../components/TypeOfPlacement";
import {
  childCareGridData,
  childCareServices,
  placementSteps,
} from "../data/data";

const ChildCarePage = () => {
  return (
    <>
      <BackToHome
        title={"Back to services"}
        path={"/service"}
        arrowColor={"#2BADEE"}
        titleColor={"text-[#2BADEE]"}
      />
      <main>
        <ChildCareTwoColumn gridData={childCareGridData} />
        <ThreeColumnGrid
          data={childCareServices}
          subtitle={"Comprehensive Support for Children in Care"}
          title={"Our Placement Services"}
          textColor={"text-[#2BADEE]"}
          bgColor={"bg-[#2BADEE1A]"}
        />
        <TypeOfPlacement />
        <ProcessFlow
          title={"Our Placement Process"}
          subtitle={"Ensuring Safe and Appropriate Placements"}
          steps={placementSteps}
          themeColor={"#2BADEE"}
        />
        <GetInTouch
          buttonText={"Discuss Placement Needs"}
          bgColor={"bg-[#2BADEE]"}
          bgTransparent={"bg-[#2BADEE1A]"}
          borderColor={"border-[#2BADEE4D]"}
          textColor={"text-[#2BADEE]"}
        />
      </main>
    </>
  );
};

export default ChildCarePage;
