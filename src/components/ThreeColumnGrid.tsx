// const ThreeColumnGrid = ({ data, subtitle, title }) => {
//   return (
//     <section className="bg-[#6E8F561A] py-16 md:py-20">
//       <div className="max-w-[1152px] w-full mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
//           <p className="text-gray-600 text-lg">{subtitle}</p>
//         </div>

//         {/* Values Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {data.map((value, index) => {
//             const IconComponent = value.icon;

//             return (
//               <div
//                 key={index}
//                 className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
//               >
//                 {/* Icon */}
//                 <div className="flex justify-center mb-6">
//                   <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
//                     <IconComponent className="w-6 h-6 text-[#6E8F56]" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <div className="text-center">
//                   <h3 className="text-xl font-semibold text-gray-800 mb-4">
//                     {value.title}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     {value.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ThreeColumnGrid;

import type { LucideIcon } from "lucide-react";

// Type definitions
interface ValueItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ThreeColumnGridProps {
  data: ValueItem[];
  subtitle: string;
  title: string;
}

const ThreeColumnGrid: React.FC<ThreeColumnGridProps> = ({
  data,
  subtitle,
  title,
}) => {
  return (
    <section className="bg-[#6E8F561A] py-16 md:py-20">
      <div className="max-w-[1152px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 text-lg">{subtitle}</p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((value: ValueItem, index: number) => {
            const IconComponent = value.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-[#6E8F56]" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ThreeColumnGrid;
