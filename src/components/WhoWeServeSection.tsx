
import { Users, AlertCircle, Heart } from "lucide-react";

const WhoWeServeSection = () => {
  const servicesData = [
    {
      id: 1,
      icon: Users,
      iconColor: "#2BADEE",
      title: "Children & Young People",
      description:
        "Children in need of our placements including those with complex needs, behavioural challenges, or requiring specialised support.",
      backgroundColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      id: 2,
      icon: AlertCircle,
      iconColor: "#F9C31F",
      title: "Adults with Complex Needs",
      description:
        "Adults transitioning from secure settings, those with mental health challenges, or requiring high-support living arrangements.",
      backgroundColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      id: 3,
      icon: Heart,
      iconColor: "#2EB8A1",
      title: "Older Adults & Families",
      description:
        "Elderly individuals requiring home care, those with dementia, and families needing respite or end-of-life care support.",
      backgroundColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Who We Serve
          </h2>
          <p className="text-gray-600 text-lg">
            Our services are designed for diverse care needs across different
            populations
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => {
            const IconComponent = service.icon;

            return (
              <div
                key={service.id}
                className={`${service.backgroundColor} ${service.borderColor} border rounded-xl p-8 text-center transition-all duration-300 hover:shadow-lg`}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <IconComponent
                      className="w-8 h-8"
                      style={{ color: service.iconColor }}
                    />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: service.iconColor }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;
