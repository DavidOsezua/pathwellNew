import type { ChangeEvent } from "react";
import {
  useMultistepForm,
  type FormData,
  type SelectProps,
} from "../context/MultistepContext";

export const Select: React.FC<SelectProps> = ({
  label,
  field,
  options,
  placeholder,
  className = "",
}) => {
  const { formData, updateFormData, errors } = useMultistepForm();

  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-1 text-gray-700">
        {label} <span className="text-red-500">*</span>
      </label>
      <select
        value={(formData[field as keyof FormData] as string) || ""}
        onChange={(e: ChangeEvent<HTMLSelectElement>) =>
          updateFormData(field, e.target.value)
        }
        className={`w-full p-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 transition-colors ${
          errors[field]
            ? "border-red-500 focus:ring-red-200"
            : "border-gray-300 focus:ring-[#6E8F56]/20"
        }`}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {errors[field] && (
        <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
      )}
    </div>
  );
};
