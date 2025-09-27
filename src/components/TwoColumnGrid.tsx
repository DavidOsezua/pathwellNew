// const TwoColumnGrid = ({ gridData }) => {
//   const renderSection = (section, index) => {
//     return (
//       <div key={index} className="mb-6 last:mb-0">
//         {section.heading && (
//           <h3 className="text-gray-800 font-semibold mb-3">
//             {section.heading}
//           </h3>
//         )}

//         {section.description && (
//           <p className="text-gray-600 text-sm leading-relaxed mb-4">
//             {section.description}
//           </p>
//         )}

//         {section.items && (
//           <ul className="space-y-2">
//             {section.items.map((item, itemIndex) => (
//               <li key={itemIndex} className="flex items-start">
//                 <div className="w-2 h-2 bg-[#608260] rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                 <span className="text-gray-600 text-sm leading-relaxed">
//                   {item}
//                 </span>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="bg-gray-50 py-16">
//       <div className="max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {gridData.map((column) => {
//             const IconComponent = column.icon;

//             return (
//               <div
//                 key={column.id}
//                 className="bg-white rounded-xl p-8 shadow-sm"
//               >
//                 {/* Header */}
//                 <div className="flex flex-col items-center gap-2 mb-6">
//                   <div className="w-12 h-12 bg-[#6E8F561A] rounded-full flex items-center justify-center mr-4">
//                     <IconComponent className="w-6 h-6 text-[#608260]" />
//                   </div>
//                   <h2 className="text-xl font-semibold text-gray-800">
//                     {column.title}
//                   </h2>
//                 </div>

//                 {/* Description (if exists at top level) */}
//                 {column.description && (
//                   <p className="text-gray-600 text-sm leading-relaxed mb-6">
//                     {column.description}
//                   </p>
//                 )}

//                 {/* Sections */}
//                 <div>
//                   {column.sections.map((section, index) =>
//                     renderSection(section, index)
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TwoColumnGrid;

import React, { type JSX } from "react";
import type { LucideIcon } from "lucide-react";

// Type definitions
interface Section {
  heading?: string;
  description?: string;
  items?: string[];
}

interface GridItem {
  id: number;
  icon: LucideIcon;
  title: string;
  description?: string;
  sections: Section[];
}

interface TwoColumnGridProps {
  gridData: GridItem[];
}

const TwoColumnGrid: React.FC<TwoColumnGridProps> = ({ gridData }) => {
  const renderSection = (section: Section, index: number): JSX.Element => {
    return (
      <div key={index} className="mb-6 last:mb-0">
        {section.heading && (
          <h3 className="text-gray-800 font-semibold mb-3">
            {section.heading}
          </h3>
        )}

        {section.description && (
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {section.description}
          </p>
        )}

        {section.items && (
          <ul className="space-y-2">
            {section.items.map((item: string, itemIndex: number) => (
              <li key={itemIndex} className="flex items-start">
                <div className="w-2 h-2 bg-[#608260] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <span className="text-gray-600 text-sm leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-[1152px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {gridData.map((column: GridItem) => {
            const IconComponent = column.icon;

            return (
              <div
                key={column.id}
                className="bg-white rounded-xl p-8 shadow-sm"
              >
                {/* Header */}
                <div className="flex flex-col items-center gap-2 mb-6">
                  <div className="w-12 h-12 bg-[#6E8F561A] rounded-full flex items-center justify-center mr-4">
                    <IconComponent className="w-6 h-6 text-[#608260]" />
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {column.title}
                  </h2>
                </div>

                {/* Description (if exists at top level) */}
                {column.description && (
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {column.description}
                  </p>
                )}

                {/* Sections */}
                <div>
                  {column.sections.map((section: Section, index: number) =>
                    renderSection(section, index)
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TwoColumnGrid;
