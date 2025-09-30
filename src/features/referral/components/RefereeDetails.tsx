import { useMultistepForm } from "../context/MultistepContext";
import { Input } from "./Input";
import { Select } from "./Select";

const RefereeDetails = () => {
  const { previous } = useMultistepForm();
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
          Referee Details
        </h3>
        <p className="text-sm text-gray-500">
          Enter details of the individual being referred
        </p>
      </div>

      <Input
        label="Full Name"
        field="refereeName"
        placeholder="Chelsea Yacch"
      />

      <div className="grid grid-cols-2 gap-4">
        <Input label="Date of birth" field="dob" type="date" />
        <Select
          label="Gender"
          field="gender"
          options={["Male", "Female", "Other", "Prefer not to say"]}
          placeholder="Select gender"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Email"
          field="refereeEmail"
          type="email"
          placeholder="chelchi@example.com"
        />
        <Input
          label="Phone Number"
          field="refereePhone"
          type="tel"
          placeholder="+61 322 3444 5555"
        />
      </div>

      <Input
        label="Current Address"
        field="address"
        placeholder="Banaba-Fati"
      />
    </div>
  );
};

export default RefereeDetails;
