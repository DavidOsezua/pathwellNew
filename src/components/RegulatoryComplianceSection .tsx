const RegulatoryComplianceSection = () => {
  const complianceData = [
    {
      id: 1,
      title: "Care Quality Commission (CQC)",
      description:
        "Registration and compliance with CQC standards for adult social care services.",
      status: "In Progress",
      statusColor: "#F9C31F",
      statusBg: "#FEF3C7",
      titleColor: "#6E8F56",
    },
    {
      id: 2,
      title: "Ofsted Registration",
      description:
        "Registration for children's care services and placement providers.",
      status: "In Progress",
      statusColor: "#F9C31F",
      statusBg: "#FEF3C7",
      titleColor: "#6E8F56",
    },
    {
      id: 3,
      title: "CIC Regulations",
      description:
        "Full compliance with Community Interest Company regulatory requirements.",
      status: "Compliant",
      statusColor: "#10B981",
      statusBg: "#D1FAE5",
      titleColor: "#6E8F56",
    },
    {
      id: 4,
      title: "Data Protection (GDPR)",
      description:
        "Comprehensive data protection policies and procedures for client information.",
      status: "Compliant",
      statusColor: "#10B981",
      statusBg: "#D1FAE5",
      titleColor: "#6E8F56",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] md:text-[30px] font-bold text-gray-800 mb-4">
            Regulatory Compliance
          </h2>
          <p className="text-gray-600 text-lg">
            Meeting and exceeding all regulatory requirements for care services
          </p>
        </div>

        {/* Compliance Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {complianceData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-200"
            >
              {/* Header with Title and Status */}
              <div className="flex justify-between items-start mb-4">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: item.titleColor }}
                >
                  {item.title}
                </h3>
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    color: item.statusColor,
                    backgroundColor: item.statusBg,
                  }}
                >
                  {item.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegulatoryComplianceSection;
