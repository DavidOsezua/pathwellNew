import { Input } from "./Input";

const AboutYou = () => {
  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h3 className="text-base font-medium text-gray-700 mb-1">About you</h3>
        <p className="text-sm text-gray-500">Enter your details as referrer</p>
      </div>

      <Input label="Full Name" field="fullName" placeholder="Chelsea Yacch" />

      <Input
        label="Organization / Agency (Optional)"
        field="organization"
        placeholder="Banaba-Fati"
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Email"
          field="email"
          type="email"
          placeholder="chelchi@example.com"
        />
        <Input
          label="Phone Number"
          field="phone"
          type="tel"
          placeholder="+61 322 3444 5555"
        />
      </div>
    </div>
  );
};

export default AboutYou;
