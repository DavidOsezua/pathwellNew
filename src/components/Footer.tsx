const Footer = () => {
  return (
    <footer className="bg-white border-[4px] border-t border-[#6E8F56] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile and Tablet Layout */}
        <div className="lg:hidden">
          {/* Top row - Logo and Q box */}
          <div className="flex justify-between items-center mb-6">
            <img src="/logo.png" alt="PathWell Group" className="h-8 sm:h-10" />
            <div className="bg-[#5F2861] px-4 py-2 flex items-center gap-2 ">
              <img
                src="/Q.png"
                alt="Q Logo"
                className="h-5 w-5 flex-shrink-0"
              />
              <span className="text-white text-xs font-medium whitespace-nowrap">
                1-19505787176
              </span>
            </div>
          </div>

          {/* Contact Information */}
          <div className="flex  sm:flex-row items-center justify-between gap-4 sm:gap-8 mb-6">
            {/* Phone */}
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm text-gray-700 whitespace-nowrap">
                07438 800 134
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-1">
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
              <span className="text-sm text-gray-700">
                info@pathwellgroup.com
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between items-center gap-4">
          {/* Left side - Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="PathWell Group" className="h-10" />
          </div>

          {/* Center - Contact Information */}
          <div className="flex items-center gap-6">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="text-sm text-gray-700 whitespace-nowrap">
                07438 800 134
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 text-gray-600"
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
              <span className="text-sm text-gray-700">
                info@pathwellgroup.com
              </span>
            </div>
          </div>

          {/* Right side - Q Logo with purple background */}
          <div className="flex items-center gap-3">
            <div className="bg-[#5F2861] px-6 py-2 flex items-center gap-2 rounded">
              <img
                src="/Q.png"
                alt="Q Logo"
                className="h-6 w-6 flex-shrink-0"
              />
              <span className="text-white text-sm font-medium whitespace-nowrap">
                1-19505787176
              </span>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright section */}
        <div className="mt-6 sm:mt-8 pt-4 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-600">
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
