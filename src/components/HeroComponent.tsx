import type { ReactNode } from "react";

interface HeroComponentProps {
  title: string;
  features1: string;
  features2: string;
  features3: string;
  featureColor1?: string;
  featureColor2?: string;
  featureColor3?: string;
  icon1?: ReactNode;
  icon2?: ReactNode;
  icon3?: ReactNode;
  subFeature1?: string;
  subFeature2?: string;
  subFeature3?: string;
  subheading: string;
  subheading2: string;
  imageUrl: string;
}

const HeroComponent = ({
  subheading,
  imageUrl,
  featureColor1,
  featureColor2,
  featureColor3,
  icon1,
  icon2,
  icon3,
  subFeature1,
  subFeature2,
  subFeature3,
  features1,
  features2,
  features3,
  title,
  subheading2,
}: HeroComponentProps) => {
  return (
    <div className="relative w-full h-[395px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${imageUrl})`,
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-10">
          <div>
            {/* Main Heading */}
            <h1 className="font-semibold text-[32px] lg:text-[48px]">
              {title}
            </h1>

            {/* Subheading */}
            <h1 className="font-semibold text-[28px] md:text-[30px] leading-9">
              {subheading}
            </h1>
          </div>

          {/* Subheading2 */}
          <p className="font-light text-base max-w-[650px] w-full mx-auto">
            {subheading2}
          </p>

          {/* Features */}
          <div className="flex  items-center justify-center  gap-4">
            <div className="flex items-center space-x-2">
              {featureColor1 && (
                <div className={`w-2 h-2 ${featureColor1} rounded-full`}></div>
              )}
              {icon1}
              <div className="flex flex-col text-left ">
                <span className="text-[10px] sm:text-[13px] font-semibold">
                  {features1}
                </span>
                <span className="text-[10px] sm:text-[13px] font-light">
                  {subFeature1}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {featureColor2 && (
                <div className={`w-2 h-2 ${featureColor2} rounded-full`}></div>
              )}
              {icon2}

              <div className="flex flex-col text-left ">
                <span className="text-[10px] sm:text-[13px] font-semibold">
                  {features2}
                </span>
                <span className="text-[10px] sm:text-[13px] font-light">
                  {subFeature2}
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {featureColor3 && (
                <div className={`w-2 h-2 ${featureColor3} rounded-full`}></div>
              )}
              {icon3}
              <div className="flex flex-col text-left ">
                <span className="text-[10px] sm:text-[13px] font-semibold">
                  {features3}
                </span>
                <span className="text-[10px] sm:text-[13px] font-light">
                  {subFeature3}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30 pointer-events-none" />
    </div>
  );
};

export default HeroComponent;
