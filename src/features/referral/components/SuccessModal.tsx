const SuccessModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-8 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Success Icon */}
        <div className="flex justify-center mb-4">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#6E8F56" }}
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center">
          <p className="text-sm mb-2" style={{ color: "#6E8F56" }}>
            Referral submitted successfully
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You</h2>
          <p className="text-gray-600 text-sm mb-2">
            Our team will contact you within 24 hours.
          </p>
          <p className="text-gray-600 text-sm">
            For urgent cases, please call our 24/7 referral hotline:{" "}
            <span className="font-semibold">07438 800 134</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
