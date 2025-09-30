import type { ReactNode } from "react";
import { useMultistepForm } from "../context/MultistepContext";

const StepContainer: React.FC<{ steps: ReactNode[] }> = ({ steps }) => {
  const { currentStep } = useMultistepForm();

  return (
    <div className="mt-6">
      {steps.map((step, index) => (
        <div
          key={index}
          style={{ display: currentStep === index ? "block" : "none" }}
        >
          {step}
        </div>
      ))}
    </div>
  );
};

export default StepContainer;
