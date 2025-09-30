import { useMultistepForm } from "../context/MultistepContext";

export const ProgressIndicator: React.FC = () => {
  const { currentStep, totalSteps, stepNames } = useMultistepForm();

  return (
    <div className="mb-6">
      <div className="flex gap-2 mb-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded transition-colors duration-300`}
            style={{
              backgroundColor: index <= currentStep ? "#6E8F56" : "#e5e7eb",
            }}
          />
        ))}
      </div>
      {stepNames && (
        <p className="text-sm text-gray-600">
          Step {currentStep + 1} of {totalSteps}: {stepNames[currentStep]}
        </p>
      )}
    </div>
  );
};
