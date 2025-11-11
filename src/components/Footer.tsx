const Footer = () => {
  return (
    <footer className="bg-white border-[4px] border-t border-[#6E8F56] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4">
          {/* Left side - Logo */}
          <div className="flex items-center order-1 lg:order-1">
            <img src="/logo.png" alt="PathWell Group" className="h-8 sm:h-10" />
          </div>

          {/* Center - Contact Information with Circle Background */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 order-2 lg:order-2">
            {/* Phone with circle */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700 whitespace-nowrap">
                07438 800 134
              </span>
            </div>

            {/* Email with icon */}
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-600 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-sm text-gray-700 break-all sm:break-normal">
                info@pathwellgroup.com
              </span>
            </div>
          </div>

          {/* Right side - Q Logo with purple background */}
          <div className="flex items-center gap-3 order-3 lg:order-3">
            <div className="bg-[#5F2861] px-4 sm:px-6 py-2 flex items-center gap-2">
              <img
                src="/Q.png"
                alt="Q Logo"
                className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0"
              />
              <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">
                1-19505787176
              </span>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright section */}
        <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-200 text-center">
          <p className="text-xs">
            Powered by{" "}
            <span className="text-[#5F2861]">Enrich Home Care Ltd</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © 2025 PathWell Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
