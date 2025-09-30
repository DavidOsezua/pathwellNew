import { MultistepFormProvider } from "../context/MultistepContext";
import AboutYou from "./AboutYou";
import FormNavigation from "./FormNavigation";
import { ProgressIndicator } from "./ProgressIndicator";
import RefereeDetails from "./RefereeDetails";
import StepContainer from "./StepContainer";
import SupportNeeds from "./SupportNeeds";

const ReferralMultiform = () => {
  const steps = [<AboutYou />, <RefereeDetails />, <SupportNeeds />];
  const stepNames = ["About you", "Referee Details", "Support Needs"];

  return (
    <MultistepFormProvider steps={steps} stepNames={stepNames}>
      <div className="min-h-screen bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          {/* Left Side - Image */}
          <div className="hidden lg:block relative">
            <img
              src="./referralPage.jpg"
              alt="Support consultation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>

          {/* Right Side - Form */}
          <div className="flex items-center justify-center p-6 lg:p-12">
            <div className="w-full max-w-xl">
              <h1 className="text-2xl font-bold mb-6 text-gray-800">
                Referral Form
              </h1>
              <ProgressIndicator />
              <StepContainer steps={steps} />
              <div className="mt-6">
                <FormNavigation />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MultistepFormProvider>
  );
};

export default ReferralMultiform;
