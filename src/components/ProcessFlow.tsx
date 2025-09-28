import React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

interface ProcessStep {
  number: number;
  title: string;
  description?: string;
}

interface ProcessFlowProps {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
  themeColor: string;
  footerText?: string;
}

export default function ProcessFlow({
  title,
  subtitle,
  steps,
  themeColor,
  footerText,
}: ProcessFlowProps) {
  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-[28px] lg:text-[30px] font-bold mb-4"
            style={{ color: "#00334D" }}
          >
            {title}
          </h2>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>

        {/* Mobile Layout - Vertical with arrows */}
        <div className="lg:hidden">
          {steps.map((step, index) => (
            <div key={step.number} className="mb-8">
              {/* Step Card */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center space-x-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                    style={{ backgroundColor: themeColor }}
                  >
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-base text-gray-900">
                      {step.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Arrow Down (except for last item) */}
              {index < steps.length - 1 && (
                <div className="flex justify-center py-4">
                  <ChevronDown className="w-6 h-6 text-gray-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Layout - Horizontal with arrows */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                {/* Step Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex-1 mx-2">
                  <div className="text-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold mx-auto mb-4"
                      style={{ backgroundColor: themeColor }}
                    >
                      {step.number}
                    </div>
                    <h3 className="text-base     text-gray-900 leading-tight mb-2">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Arrow Right (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="flex items-center justify-center px-4">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Footer Text */}
        {footerText && (
          <div className="text-center mt-12">
            <p className="text-gray-600 max-w-2xl mx-auto">{footerText}</p>
          </div>
        )}
      </div>
    </section>
  );
}
