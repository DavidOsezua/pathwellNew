import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Colon from "./svgComponents/Colon";

export default function TestimonialBlock() {
  const [, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "My son got help with domestic hygiene was she learned from a medium secure unit under Section 117. At PathWell, he engaged in structured routines, received consistent care support, and within 18 months transitioned into semi-independent housing. Today, it is working part-time and has reconnected safely with family.",
      author: "Former Resident, Southwark",
    },
    {
      quote:
        "My son got help with domestic hygiene was she learned from a medium secure unit under Section 117. At PathWell, he engaged in structured routines, received consistent care support, and within 18 months transitioned into semi-independent housing. Today, it is working part-time and has reconnected safely with family.",
      author: "Former Resident, Southwark",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className=" bg-[#F6F8F5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-black mb-3">
            Testimonial Block
          </h2>
          <p className="text-gray-600 text-base mb-2">
            Every outcome is a person's journey.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
            Data matters, but the best way to see our impact is through
            individual stories. Each case study is anonymised but reflects the
            very real progress made by our residents.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end mb-8">
          <div className="flex space-x-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              style={{ backgroundColor: "#6E8F56" }}
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
              style={{ backgroundColor: "#6E8F56" }}
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Testimonial */}
          <div className="bg-white p-4 rounded-lg">
            <div className="mb-4">
              <Colon />
            </div>
            <blockquote className="text-gray-700 text-sm leading-relaxed mb-6">
              "My son got help with domestic hygiene was she learned from a
              medium secure unit under Section 117. At PathWell, he engaged in
              structured routines, received consistent care support, and within
              18 months transitioned into semi-independent housing. Today, it is
              working part-time and has reconnected safely with family."
            </blockquote>
            <cite className="text-gray-500 text-xs not-italic">
              - Former Resident, Southwark
            </cite>
          </div>

          {/* Right Testimonial */}
          <div className="bg-white p-4 rounded-lg">
            <div className="mb-4">
              <Colon />
            </div>
            <blockquote className="text-gray-700 text-sm leading-relaxed mb-6">
              "My son got help with domestic hygiene was she learned from a
              medium secure unit under Section 117. At PathWell, he engaged in
              structured routines, received consistent care support, and within
              18 months transitioned into semi-independent housing. Today, it is
              working part-time and has reconnected safely with family."
            </blockquote>
            <cite className="text-gray-500 text-xs not-italic">
              - Former Resident, Southwark
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
