// import { ArrowDownRight } from 'lucide-react';
// import Head from 'next/head';
// import Copy from './copy';

// export default function Expertise() {
//     return (
//         <>
//             <main className="bg-[#eeede8] min-h-screen text-black font-sans">
//                 <div className="container mx-auto px-4 py-8 md:py-16">

//                     {/* Top Section */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//                         <Copy delay={0.5}>
//                             {/* Left Column - Text */}
//                             <div className="flex flex-col space-y-4 md:space-y-6 ">
//                                 {/* Logo/Icon placeholder */}<ArrowDownRight size={100} />



//                                 <p className="text-sm md:text-xl text-black max-w-lg leading-relaxed font-dm-sans">
//                                     We are a consulting service with professionals with over 2 decades of experience in Software Development,
//                                     Integration and Consulting specializing in business software.We have extensive experience in development on top of IFS ERP Solutions, including modifications and
//                                     integration with various platforms.In addition, we provide services for Software Development, Integration, Implementations to fulfil your
//                                     business needs from inception to delivery.
//                                 </p>

//                             </div>
//                         </Copy>
//                         {/* Right Column - Image */}
//                         <div className="relative">
//                             {/* Replace with your image component or a simple img tag */}
//                             <img
//                                 src="/images/four0961.jpeg" // Replace this with the actual path to your image
//                                 alt="A man walking with a briefcase"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                     </div>

//                     {/* Bottom Section - Large Text */}
//                     <Copy delay={0.5}>
//                         <div className="relative mt-16 md:mt-32 px-10 md:px-0">
//                             <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-cyan-500 opacity-80">
//                                 TWENTY
//                             </h1>
//                             <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-cyan-500 opacity-80  text-center">
//                                 YEARS
//                             </h1>

//                             {/* Button */}
//                             <div className="absolute  bottom-4 right-0 mt-8 md:mt-0">
//                                 <button className="flex items-center px-6 py-2 border border-black text-black text-sm font-medium hover:bg-yellow-500 hover:text-gray-900 transition-colors">
//                                     Contact Us
//                                     <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                                         <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
//                                     </svg>
//                                 </button>
//                             </div>
//                         </div>
//                     </Copy>

//                 </div>
//             </main>
//         </>
//     );
// }

import { ArrowDownRight } from "lucide-react";
import Head from "next/head";
import Copy from "./copy";

export default function Expertise() {
  return (
    <>
      <main className="bg-[#eeede8] min-h-screen text-black font-sans">
        <div className="container mx-auto px-4 py-8 md:py-16">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Copy delay={0.5}>
              {/* Left Column - Text */}
              <div className="flex flex-col space-y-4 md:space-y-6">
                <ArrowDownRight
                  size={64}
                  className="text-cyan-500 sm:size-20 md:size-[100px]"
                />

                <p className="text-base sm:text-lg md:text-xl leading-relaxed font-dm-sans max-w-prose">
                  We are a consulting service with professionals with over two
                  decades of experience in Software Development, Integration
                  and Consulting specializing in business software. We have
                  extensive experience in development on top of IFS ERP
                  Solutions, including modifications and integration with
                  various platforms. In addition, we provide services for
                  Software Development, Integration, and Implementations to
                  fulfill your business needs from inception to delivery.
                </p>
              </div>
            </Copy>

            {/* Right Column - Image */}
            <div className="relative w-full h-64 sm:h-80 md:h-full rounded-lg overflow-hidden shadow-lg">
              <img
                src="/images/four0961.jpeg"
                alt="A man walking with a briefcase"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Section - Large Text */}
          <Copy delay={0.5}>
            <div className="relative mt-12 sm:mt-16 md:mt-32 px-4 md:px-0">
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-cyan-500 opacity-80">
                TWENTY
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif text-cyan-500 opacity-80 text-center">
                YEARS
              </h1>

              {/* Button */}
              <div className="flex justify-center md:justify-end mt-8 md:mt-0">
                <button className="flex items-center px-5 sm:px-6 py-2 border border-black text-black text-sm sm:text-base font-medium hover:bg-yellow-500 hover:text-gray-900 transition-colors">
                  Contact Us
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </Copy>
        </div>
      </main>
    </>
  );
}
