
import { Users, Heart, Briefcase } from "lucide-react";

const CareerOpportunitiesSection = () => {
  const careerData = [
    {
      id: 1,
      icon: Users,
      title: "Care Workers",
      description:
        "Direct care roles supporting children, adults, and individuals with complex needs in various settings.",
      availablePositions: [
        "Support Workers",
        "Care Assistants",
        "Live-in Carers",
        "Night Support Workers",
      ],
    },
    {
      id: 2,
      icon: Heart,
      title: "Specialised Roles",
      description:
        "Specialised positions requiring additional qualifications and experience in specific care areas.",
      availablePositions: [
        "Social Workers",
        "Mental Health Support",
        "Dementia Care Specialists",
        "Behaviour Support Workers",
      ],
    },
    {
      id: 3,
      icon: Briefcase,
      title: "Management & Administration",
      description:
        "Leadership and support roles ensuring smooth operations and high-quality service delivery.",
      availablePositions: [
        "Service Managers",
        "Care Coordinators",
        "Administrative Staff",
        "Quality Assurance Officers",
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[28px] md:text-[30px] font-bold mb-4"
            style={{ color: "#00334D" }}
          >
            Career Opportunities
          </h2>
          <p className="text-gray-600 text-lg">
            Diverse roles across our care services
          </p>
        </div>

        {/* Career Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {careerData.map((career) => {
            const IconComponent = career.icon;

            return (
              <div
                key={career.id}
                className="bg-white rounded-xl p-8 shadow-sm border border-gray-200"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-[#6E8F561A] rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-[#608260]" />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold text-center mb-4"
                  style={{ color: "#6E8F56" }}
                >
                  {career.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm text-center leading-relaxed mb-6">
                  {career.description}
                </p>

                {/* Available Positions */}
                <div>
                  <h4 className="text-gray-800 font-semibold text-sm mb-4">
                    Available Positions:
                  </h4>
                  <ul className="space-y-2">
                    {career.availablePositions.map((position, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-[#608260] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {position}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunitiesSection;
