import { useState, type MouseEvent } from "react";
import { useMultistepForm } from "../context/MultistepContext";

import SuccessModal from "./SuccessModal";

const FormNavigation: React.FC = () => {
  const { next, validateCurrentStep, isLastStep, formData } =
    useMultistepForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const sendEmail = async (): Promise<void> => {
    try {
      setIsSubmitting(true);

      // Using fetch API to send email via EmailJS REST API
      const response = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "service_bs7fx2i", // Replace with your EmailJS service ID
            template_id: "template_ld3d1z8", // Replace with your EmailJS template ID
            user_id: "v53LoM4mt8nL0ZxQp", // Replace with your EmailJS public key
            template_params: {
              // Referrer Information
              referrer_name: formData.fullName,
              referrer_organization: formData.organization || "N/A",
              referrer_email: formData.email,
              referrer_phone: formData.phone,

              // Referee Information
              referee_name: formData.refereeName,
              referee_dob: formData.dob,
              referee_gender: formData.gender,
              referee_email: formData.refereeEmail,
              referee_phone: formData.refereePhone,
              referee_address: formData.address,

              // Support Details
              service_type: formData.serviceType,
              current_reason: formData.currentReason,
              urgency: formData.urgency,
              concerns: formData.concerns || "None specified",
              contact_email: formData.contactEmail,
              contact_phone: formData.contactPhone,

              // Timestamp
              submission_date: new Date().toLocaleString(),
            },
          }),
        }
      );

      if (response.ok) {
        setShowSuccessModal(true);
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      console.error("Failed to send email:", error);
      alert(
        "Failed to submit referral. Please try again or contact us directly at 07438 800 134."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContinue = (): void => {
    if (validateCurrentStep()) {
      if (isLastStep) {
        sendEmail();
      } else {
        next();
      }
    }
  };

  const handleCloseModal = (): void => {
    setShowSuccessModal(false);
    // Optionally redirect or reset form
    window.location.replace("/");
  };

  return (
    <>
      <button
        onClick={handleContinue}
        disabled={isSubmitting}
        className="w-full text-white py-3 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: "#6E8F56" }}
        onMouseOver={(e: MouseEvent<HTMLButtonElement>) => {
          if (!isSubmitting) {
            e.currentTarget.style.backgroundColor = "#5a7446";
          }
        }}
        onMouseOut={(e: MouseEvent<HTMLButtonElement>) => {
          e.currentTarget.style.backgroundColor = "#6E8F56";
        }}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Submitting...
          </span>
        ) : isLastStep ? (
          "Submit Referral"
        ) : (
          "Continue"
        )}
      </button>

      {showSuccessModal && <SuccessModal onClose={handleCloseModal} />}
    </>
  );
};

export default FormNavigation;
