
import { FileCheck, Users, BarChart } from "lucide-react";

const QualityAssuranceSection = () => {
  const qualityData = [
    {
      id: 1,
      icon: FileCheck,
      title: "Regular Audits",
      description:
        "Internal and external audits ensure compliance with all care standards and identify areas for improvement.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 2,
      icon: Users,
      title: "Staff Training",
      description:
        "Continuous professional development ensures our teams maintain the highest standards of care delivery.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 3,
      icon: BarChart,
      title: "Performance Monitoring",
      description:
        "Regular monitoring of outcomes and performance indicators drives continuous service improvement.",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[28px] md:text-[30px] font-bold mb-4"
            style={{ color: "#00334D" }}
          >
            Quality Assurance
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Continuous monitoring and improvement processes ensure we deliver
            exceptional care
          </p>
        </div>

        {/* Quality Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {qualityData.map((item) => {
            const IconComponent = item.icon;

            return (
              <div
                key={item.id}
                className="bg-gray-50 rounded-xl p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`${item.iconBg} w-16 h-16 rounded-full flex items-center justify-center`}
                  >
                    <IconComponent className={`w-8 h-8 ${item.iconColor}`} />
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ color: "#6E8F56" }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QualityAssuranceSection;
