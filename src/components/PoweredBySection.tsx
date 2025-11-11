const PoweredBySection = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Title with circle icon */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Powered by Enrich Home Care Ltd
          </h2>
        </div>

        {/* Description text */}
        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
          PathWell is powered by Enrich Home Care Ltd, a trusted name in
          community support and care services across London. With a shared
          commitment to dignity, independence, and growth, we provide
          housing-based support that truly feels like home, helping people of
          all ages build brighter, more stable futures.
        </p>

        {/* Link */}
        <div className="mt-6">
          <a
            href="#"
            className="text-[#5F2861] underline hover:text-[#4a1e4a] transition-colors text-sm"
          >
            Enrich Home Care Ltd CQC Registration →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PoweredBySection;
