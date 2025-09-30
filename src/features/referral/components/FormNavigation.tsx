import { useMultistepForm } from "../context/MultistepContext";

const FormNavigation: React.FC = () => {
  const { next, validateCurrentStep, isLastStep } = useMultistepForm();

  const handleContinue = (): void => {
    if (validateCurrentStep()) {
      if (isLastStep) {
        // Handle final submission
        alert("Form submitted successfully!");
      } else {
        next();
      }
    }
  };

  return (
    <button
      onClick={handleContinue}
      className="w-full text-white py-3 rounded transition-colors"
      style={{ backgroundColor: "#6E8F56" }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#5a7446")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#6E8F56")}
    >
      {isLastStep ? "Submit Referral" : "Continue"}
    </button>
  );
};

export default FormNavigation;
