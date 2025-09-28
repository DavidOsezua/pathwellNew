const childServicesData = [
  {
    id: 1,
    title: "Foster Care Placements",
    description:
      "Placing children with approved foster families who provide temporary or long-term care in a family environment.",
    features: [
      "Family-based care",
      "Temporary or permanent",
      "Matched to child's needs",
    ],
  },
  {
    id: 2,
    title: "Residential Care",
    description:
      "Children's homes and residential facilities with trained staff providing structured, supportive environments.",
    features: [
      "24/7 professional staff",
      "Structured environment",
      "Specialized programs",
    ],
  },
  {
    id: 3,
    title: "Emergency Placements",
    description:
      "Immediate, short-term placements for children requiring urgent removal from unsafe situations.",
    features: ["Rapid response", "Crisis intervention", "Temporary safety"],
  },
  {
    id: 4,
    title: "Specialized Placements",
    description:
      "Specialized care for children with complex needs, disabilities, or behavioral challenges.",
    features: [
      "Therapeutic support",
      "Specialized training",
      "Individual care plans",
    ],
  },
];

const TypeOfPlacement = () => {
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
          {childServicesData.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-8 shadow-sm">
              {/* Card Title */}
              <h3
                className="text-xl font-semibold mb-4"
                style={{ color: "#2BADEE" }}
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

export default TypeOfPlacement;
