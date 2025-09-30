import type { ChangeEvent } from "react";
import { useMultistepForm } from "../context/MultistepContext";
import { Select } from "./Select";
import { Input } from "./Input";
import { ArrowLeft } from "lucide-react";

const SupportNeeds = () => {
  const { previous, formData, updateFormData, errors } = useMultistepForm();

  return (
    <div className="space-y-6 w-full">
      <div className="mb-4">
        <button
          onClick={previous}
          className="flex items-center text-gray-600 hover:text-gray-800 mb-2 transition-colors"
          type="button"
        >
          <ArrowLeft />
          Support Needs
        </button>
        <h3 className="text-base font-medium text-gray-700 mb-1"></h3>
        <p className="text-sm text-gray-500">
          Tell us what kind of placement is required
        </p>
      </div>

      <div className="w-full">
        <label className="block text-sm font-medium mb-2 text-gray-700">
          Type of Service Needed <span className="text-red-500">*</span>
        </label>
        <div className=" flex items-center gap-3 w-full">
          {["Child Care", "Supported Living", "Adult Care"].map((service) => (
            <label
              key={service}
              className={`flex items-center px-2 py-2 md:w-full   rounded cursor-pointer transition-all ${
                formData.serviceType === service
                  ? " bg-[#6E8F5633]"
                  : "bg-[#F5F5F5] hover:border-gray-400"
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
                className="mr-1"
                style={{ accentColor: "#6E8F56" }}
              />
              <span className="text-[12px] md:text-base">{service}</span>
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

      <div className="flex flex-col gap-4 md:flex-row items-center flex-1">
        <Input
          label="Email"
          field="contactEmail"
          type="email"
          className="w-full"
          placeholder="chelchi@example.com"
        />
        <Input
          label="Phone Number"
          field="contactPhone"
          className="w-full"
          type="tel"
          placeholder="+44 322 3444 5555"
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
          <span className="text-[12px] text-gray-600">
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
