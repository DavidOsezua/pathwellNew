
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t-2 border-[#6E8F56]">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
            {/* Phone */}
            <div className="flex items-center text-gray-700">
              <Phone className="w-4 h-4 text-[#608260] mr-2" />
              <span className="text-sm">07438 800 134</span>
            </div>

            {/* Email */}
            <div className="flex items-center text-gray-700">
              <Mail className="w-4 h-4 text-[#608260] mr-2" />
              <span className="text-sm">info@pathwellgroup.com</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-gray-600 text-sm">
            © 2025 PathWell Group. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
