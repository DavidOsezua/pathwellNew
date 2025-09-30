import { createContext, useContext, useState, type ReactNode } from "react";

//create the context

//provide the context
export interface FormData {
  fullName?: string;
  organization?: string;
  email?: string;
  phone?: string;
  refereeName?: string;
  dob?: string;
  gender?: string;
  refereeEmail?: string;
  refereePhone?: string;
  address?: string;
  serviceType?: string;
  currentReason?: string;
  urgency?: string;
  concerns?: string;
  contactEmail?: string;
  contactPhone?: string;
  consent?: boolean;
}

export interface FormErrors {
  [key: string]: string;
}

export interface MultistepFormContextType {
  previous: () => void;
  steps: ReactNode[];
  next: () => void;
  step: ReactNode;
  currentStep: number;
  stepNames?: string[];
  goToStep: (step: number) => void;
  totalSteps: number;
  isFirstStep: boolean;
  isLastStep: boolean;
  formData: FormData;
  updateFormData: (field: string, value: string | boolean) => void;
  errors: FormErrors;
  validateCurrentStep: () => boolean;
}

export interface MultistepFormProviderProps {
  children: ReactNode;
  steps: ReactNode[];
  stepNames?: string[];
}

export interface InputProps {
  label: string;
  field: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

export interface SelectProps {
  label: string;
  field: string;
  options: string[];
  placeholder?: string;
  className?: string;
}

// Create Context
const MultistepFormContext = createContext<MultistepFormContextType | null>(
  null
);

// Provider Component
export const MultistepFormProvider: React.FC<MultistepFormProviderProps> = ({
  children,
  steps,
  stepNames,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<FormErrors>({});

  function next(): void {
    setCurrentStep((i) => (i >= steps.length - 1 ? i : i + 1));
  }

  function previous(): void {
    setCurrentStep((i) => (i <= 0 ? i : i - 1));
  }

  function goToStep(step: number): void {
    setCurrentStep(step);
  }

  function updateFormData(field: string, value: string | boolean): void {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field when user types
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  }

  function validateCurrentStep(): boolean {
    const newErrors: FormErrors = {};

    if (currentStep === 0) {
      if (!formData.fullName?.trim())
        newErrors.fullName = "Full name is required";
      if (!formData.email?.trim()) newErrors.email = "Email is required";
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Please enter a valid email";
      }
      if (!formData.phone?.trim()) newErrors.phone = "Phone number is required";
    }

    if (currentStep === 1) {
      if (!formData.refereeName?.trim())
        newErrors.refereeName = "Full name is required";
      if (!formData.dob?.trim()) newErrors.dob = "Date of birth is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
      if (!formData.refereeEmail?.trim())
        newErrors.refereeEmail = "Email is required";
      if (!formData.refereePhone?.trim())
        newErrors.refereePhone = "Phone number is required";
      if (!formData.address?.trim()) newErrors.address = "Address is required";
    }

    if (currentStep === 2) {
      if (!formData.serviceType)
        newErrors.serviceType = "Please select a service type";
      if (!formData.currentReason)
        newErrors.currentReason = "Current reason is required";
      if (!formData.urgency) newErrors.urgency = "Urgency level is required";
      if (!formData.consent)
        newErrors.consent = "You must provide consent to continue";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const value: MultistepFormContextType = {
    previous,
    steps,
    next,
    step: steps[currentStep],
    currentStep,
    stepNames,
    goToStep,
    totalSteps: steps.length,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    formData,
    updateFormData,
    errors,
    validateCurrentStep,
  };

  return (
    <MultistepFormContext.Provider value={value}>
      {children}
    </MultistepFormContext.Provider>
  );
};

// Custom Hook to use the context
export const useMultistepForm = (): MultistepFormContextType => {
  const context = useContext(MultistepFormContext);
  if (!context) {
    throw new Error(
      "useMultistepForm must be used within MultistepFormProvider"
    );
  }
  return context;
};
