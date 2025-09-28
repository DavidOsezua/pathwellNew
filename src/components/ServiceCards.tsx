import { Users, Heart, Stethoscope, ArrowRight } from "lucide-react";
import { NavLink } from "react-router";

const ServiceCards = () => {
  const servicesData = [
    {
      id: 1,
      logo: "PathWell Child",
      icon: Users,
      path: "/childcare",
      image: "./child.jpg",
      iconColor: "text-blue-500",
      title: "Child Care",
      titleColor: "text-blue-500",
      description:
        "Council placement services for children in care, including foster family placements, children's homes, and specialized care proceedings support.",
      features: [
        "Foster family placements",
        "Children's home placements",
        "Care proceedings support",
        "Placement planning and assessment",
        "Multi-authority consortium work",
      ],
      buttonText: "Learn More",
      buttonColor: "#2BADEE",
      gradient:
        "linear-gradient(135deg, rgba(43, 173, 238, 0.1) 0%, #FCFCFC 50%, rgba(110, 143, 86, 0.05) 100%)",
      borderColor: "rgba(43, 173, 238, 0.2)",
    },
    {
      id: 2,
      logo: "PathWell Supported Living",
      icon: Heart,
      path: "/supportedliving",
      image: "./supportedLiving.jpg",
      iconColor: "text-yellow-500",
      title: "Supported Living",
      titleColor: "text-yellow-500",
      description:
        "Safe, structured supported living for adults with complex mental health needs transitioning from secure or clinical settings.",
      features: [
        "24/7 onsite staffing trained in de-escalation",
        "Personalised risk plans for each resident",
        "Pre-placement risk assessments",
        "NHS & MDT collaboration",
        "Section 117 aftercare support",
      ],
      buttonText: "Learn More",
      buttonColor: "#F9C31F",
      gradient:
        "linear-gradient(135deg, rgba(249, 195, 31, 0.1) 0%, #FCFCFC 50%, rgba(110, 143, 86, 0.05) 100%)",
      borderColor: "rgba(249, 195, 31, 0.2)",
    },
    {
      id: 3,
      logo: "PathWell Adult",
      icon: Stethoscope,
      path: "/adultcare",
      image: "./adult.jpg",
      iconColor: "text-teal-500",
      title: "Adult Care",
      titleColor: "text-teal-500",
      description:
        "Comprehensive home care services including personal care, live-in support, dementia care, and 24/7 assistance in your own home.",
      features: [
        "24/7 home care support",
        "Personal care assistance",
        "Live-in care services",
        "Dementia and end-of-life care",
        "Companionship and respite care",
      ],
      buttonText: "Learn More",
      buttonColor: "#2EB8A1",
      gradient:
        "linear-gradient(135deg, rgba(46, 184, 161, 0.1) 0%, #FCFCFC 50%, rgba(110, 143, 86, 0.05) 100%)",
      borderColor: "rgba(46, 184, 161, 0.2)",
    },
  ];

  return (
    <div className="py-16 px-4 bg-gray-50">
      <div className="max-w-[1154px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className="border rounded-2xl p-4 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                style={{
                  background: service.gradient,
                  borderColor: service.borderColor,
                }}
              >
                {/* Logo Circle */}
                <div className="flex justify-center mb-8">
                  <img
                    src={service.image}
                    alt=""
                    className="w-[128px] h-[128px] rounded-full "
                  />
                </div>

                {/* Title with Icon */}
                <div className="flex items-center justify-center mb-4">
                  <IconComponent
                    className={`w-6 h-6 ${service.iconColor} mr-2`}
                  />
                  <h3 className={`text-xl font-bold ${service.titleColor}`}>
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm text-center mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-[#6E8F56] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Learn More Button */}
                <NavLink
                  to={service.path}
                  className="w-full text-white py-1 px-6 rounded-md font-semibold flex items-center justify-center transition-all duration-300 group hover:opacity-90"
                  style={{ backgroundColor: service.buttonColor }}
                >
                  {service.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </NavLink>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
