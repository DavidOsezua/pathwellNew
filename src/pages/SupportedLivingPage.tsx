import BackToHome from "../components/BackToHome";
import GetInTouch from "../components/GetInTouch";
import ProcessFlow from "../components/ProcessFlow";
import SupportTwoColumn from "../components/SupportTwoColumn";
import ThreeColumnGrid from "../components/ThreeColumnGrid";
import {
  adultCareServices,
  referralSteps,
  supportGridData,
} from "../data/data";

const SupportedLivingPage = () => {
  return (
    <>
      <BackToHome
        title={"Back to services"}
        path={"/service"}
        arrowColor={"#F9C31F"}
        titleColor={"text-[#F9C31F]"}
      />
      <main>
        <SupportTwoColumn gridData={supportGridData} />
        <ThreeColumnGrid
          data={adultCareServices}
          subtitle={
            "Tailored Support for Adults with Complex Mental Health Needs"
          }
          title={"Our Services"}
          textColor={"text-[#F9C31F]"}
          bgColor={"bg-[#F9C31F1A]"}
        />
        <ProcessFlow
          title={"Make a Referral"}
          subtitle={"Simple and Transparent Placement Pathway"}
          steps={referralSteps}
          themeColor={"#F9C31F"}
        />
        <GetInTouch
          buttonText={"Contact Us Today"}
          bgColor={"bg-[#F9C31F]"}
          bgTransparent={"bg-[#F9C31F1A]"}
          borderColor={"border-[#F9C31F4D]"}
          textColor={"text-[#F9C31F]"}
        />
      </main>
    </>
  );
};

export default SupportedLivingPage;
