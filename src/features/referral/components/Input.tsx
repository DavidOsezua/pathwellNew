import type { ChangeEvent } from "react";
import {
  useMultistepForm,
  type FormData,
  type InputProps,
} from "../context/MultistepContext";

export const Input: React.FC<InputProps> = ({
  label,
  field,
  type = "text",
  placeholder,
  className = "",
}) => {
  const { formData, updateFormData, errors } = useMultistepForm();

  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-1 text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        value={(formData[field as keyof FormData] as string) || ""}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          updateFormData(field, e.target.value)
        }
        placeholder={placeholder}
        className={`w-full p-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 transition-colors ${
          errors[field]
            ? "border-red-500 focus:ring-red-200"
            : "border-gray-300 focus:ring-[#6E8F56]/20"
        }`}
      />
      {errors[field] && (
        <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
      )}
    </div>
  );
};
