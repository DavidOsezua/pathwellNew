import { Phone } from "lucide-react";

interface GetInTouchProps {
  buttonText: string;
  buttonText2?: string;
  bgColor: string;
  bgTransparent: string;
  borderColor: string;
  textColor: string;
}

const GetInTouch = ({
  buttonText,
  buttonText2,
  bgColor,
  bgTransparent,
  borderColor,
  textColor,
}: GetInTouchProps) => {
  return (
    <div className="relative min-h-96 rounded-2xl overflow-hidden mx-4 my-8 max-w-[800px] lg:mx-auto">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('./getInTouch.png')`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6 justify-center text-center px-6 py-16 min-h-96">
        {/* Main Heading */}
        <h2 className="text-[28px] md:text-[30px] font-bold text-white ">
          Get in Touch
        </h2>

        {/* Description */}
        <p className="text-white text-base font-light md:text-[18px]  ">
          Contact our team to discuss your care needs or make a referral. We're
          available 24/7 for urgent situations.
        </p>

        {/* Phone Number */}
        <div className="flex items-center justify-center ">
          <div
            className={`flex rounded-lg items-center border ${bgTransparent} ${borderColor}  py-4 px-6 backdrop-blur-md rounded-xl"`}
          >
            <Phone className={`w-6 h-6 ${textColor} mr-3`} />
            <span className={`${textColor}  text-2xl font-semibold`}>
              07438 800 134
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 w-full">
          <button
            className={`${bgColor} text-white px-4 py-2  rounded-lg font-semibold transition-colors duration-300`}
          >
            {buttonText}
          </button>
          {buttonText2 && (
            <button className="bg-white  text-[#6E8F56] bg-opacity-20 hover:bg-opacity-30  px-4 py-2 rounded-lg font-semibold backdrop-blur-sm border border-white border-opacity-30 transition-all duration-300">
              {buttonText2}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
