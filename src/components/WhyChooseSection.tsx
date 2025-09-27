const WhyChooseSection = () => {
  const whyChooseData = [
    {
      id: 1,
      title: "Experienced Leadership",
      description:
        "Our management team brings decades of experience in social care, health services, and community support.",
      features: [
        "Qualified social care professionals",
        "Regulatory compliance expertise",
        "Continuous professional development",
      ],
    },
    {
      id: 2,
      title: "Community Interest Focus",
      description:
        "As a CIC, we're committed to social purpose over profit, ensuring resources benefit the communities we serve.",
      features: [
        "Profits reinvested in services",
        "Transparent governance",
        "Community impact reporting",
      ],
    },
    {
      id: 3,
      title: "24/7 Availability",
      description:
        "We understand that care needs don't follow a schedule. Our teams are available around the clock.",
      features: [
        "24/7 referral hotline",
        "Emergency placement support",
        "Continuous care monitoring",
      ],
    },
    {
      id: 4,
      title: "Person-Centred Approach",
      description:
        "Every individual we support receives tailored care plans designed around their unique needs and goals.",
      features: [
        "Individual care planning",
        "Regular review processes",
        "Outcome-focused support",
      ],
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-[28px] md:text-[30px] font-bold mb-4"
            style={{ color: "#00334D" }}
          >
            Why Choose PathWell Group?
          </h2>
          <p className="text-gray-600 text-lg">
            Experience, expertise, and genuine care
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {whyChooseData.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-8 shadow-sm">
              {/* Card Title */}
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: "#6E8F56" }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3">
                {item.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#608260] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
