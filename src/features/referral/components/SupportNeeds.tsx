import type { ChangeEvent } from "react";
import { useMultistepForm } from "../context/MultistepContext";
import { Select } from "./Select";
import { Input } from "./Input";

const SupportNeeds = () => {
  const { previous, formData, updateFormData, errors } = useMultistepForm();

  return (
    <div className="space-y-4">
      <button
        onClick={previous}
        className="flex items-center text-gray-600 hover:text-gray-800 mb-2 transition-colors"
        type="button"
      >
        <span className="mr-1">←</span> Back
      </button>

      <div className="mb-4">
        <h3 className="text-base font-medium text-gray-700 mb-1">
          Support Needs
        </h3>
        <p className="text-sm text-gray-500">
          Tell us what kind of placement is required
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2 text-gray-700">
          Type of Service Needed <span className="text-red-500">*</span>
        </label>
        <div className="space-y-2">
          {["Child Care", "Supported Living", "Adult Care"].map((service) => (
            <label
              key={service}
              className={`flex items-center p-3 border rounded cursor-pointer transition-all ${
                formData.serviceType === service
                  ? "border-[#6E8F56] bg-[#6E8F56]/5"
                  : "border-gray-300 hover:border-gray-400"
              }`}
            >
              <input
                type="radio"
                name="serviceType"
                value={service}
                checked={formData.serviceType === service}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  updateFormData("serviceType", e.target.value)
                }
                className="mr-3"
                style={{ accentColor: "#6E8F56" }}
              />
              <span className="text-sm">{service}</span>
            </label>
          ))}
        </div>
        {errors.serviceType && (
          <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Select
          label="Current Reason"
          field="currentReason"
          options={["Transition", "Emergency", "Planned", "Assessment"]}
          placeholder="Select reason"
        />
        <Select
          label="Urgency"
          field="urgency"
          options={["Standard", "Urgent", "Emergency"]}
          placeholder="Select urgency"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-gray-700">
          Risk or Safeguarding Concerns?
        </label>
        <textarea
          value={formData.concerns || ""}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            updateFormData("concerns", e.target.value)
          }
          placeholder="Please describe any concerns..."
          className="w-full p-2 border border-gray-300 rounded bg-gray-50 h-20 focus:outline-none focus:ring-2 focus:ring-[#6E8F56]/20 transition-colors"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Email"
          field="contactEmail"
          type="email"
          placeholder="chelchi@example.com"
        />
        <Input
          label="Phone Number"
          field="contactPhone"
          type="tel"
          placeholder="+61 322 3444 5555"
        />
      </div>

      <div>
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent || false}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              updateFormData("consent", e.target.checked)
            }
            className="mt-1"
            style={{ accentColor: "#6E8F56" }}
          />
          <span className="text-sm text-gray-600">
            I confirm that I have consent from the individual or legal guardian
            to share this information with Banaba Support Group.{" "}
            <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="text-red-500 text-xs mt-1">{errors.consent}</p>
        )}
      </div>
    </div>
  );
};

export default SupportNeeds;
