import { ArrowRight } from "lucide-react";

const ServiceHighlightCards = () => {
  const servicesData = [
    {
      id: 1,
      title: "Child Care Placement Services",
      subtitle:
        "Council placement services for children in care, including foster family placements, children's homes, and specialized care proceedings support.",
      keyFeatures: [
        "Foster family placements",
        "Children's home placements",
        "Care proceedings support",
      ],
      buttonText: "Learn More",
      buttonColor: "#2BADEE",
      titleColor: "#2BADEE",
      backgroundImage: "./childCare.jpg",
    },
    {
      id: 2,
      title: "Supported Living Services",
      subtitle:
        "Safe, structured supported living for adults with complex mental health needs transitioning from secure or clinical settings.",
      keyFeatures: [
        "24/7 onsite staffing trained in de-escalation",
        "Personalised risk plans for each resident",
        "Pre-placement risk assessments",
      ],
      buttonText: "Learn More",
      buttonColor: "#F9C31F",
      titleColor: "#F9C31F",
      backgroundImage:
        "./adultCare.jpg",
    },
    {
      id: 3,
      title: "Adult Home Care Services",
      subtitle:
        "Comprehensive home care services including personal care, live-in support, dementia care, and 24/7 assistance in your own home.",
      keyFeatures: [
        "24/7 home care support",
        "Personal care assistance",
        "Live-in care services",
      ],
      buttonText: "Learn More",
      buttonColor: "#2EB8A1",
      titleColor: "#2EB8A1",
      backgroundImage:
        "./support.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm"
            >
              {/* Background Image Header */}
              <div
                className="h-[200px] bg-cover bg-center"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              ></div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: service.titleColor }}
                >
                  {service.title}
                </h3>

                {/* Subtitle */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {service.subtitle}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-gray-800 font-semibold text-sm mb-3 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {service.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div
                          className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                          style={{ backgroundColor: service.buttonColor }}
                        ></div>
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Button */}
                <button
                  className="w-full text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-all duration-300 group hover:opacity-90"
                  style={{ backgroundColor: service.buttonColor }}
                >
                  {service.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlightCards;
