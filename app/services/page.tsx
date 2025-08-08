"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"
import { ReactLenis, useLenis } from "lenis/react";
import Copy from "@/components/copy"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const ServicePage = () => {
  // State management for navigation and current page
  const [currentPage, setCurrentPage] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId)
    setMobileMenuOpen(false)
  }


  return (
    <ReactLenis root>
      
      <div className="min-h-screen py-20 bg-[#eeede8]">
        <Navbar />
        
          {/* <Copy delay={0.5}>
            <div
              className="max-w-7xl min-h-screen  px-20 pt-40 pb-40 text-black font-dm-sans grid grid-cols-1  items-center mx-auto">
              <div className="bg-cyan-500">
                <p className="sm:text-5xl  md:text-9xl text-black font-dm-sans text-center  ">Services</p>
              </div>
              <div>
                <p className="text-end  text-6xl">
                  Your trusted partner in digital
                </p>
                <p className="text  text-6xl">
                  transformation and business innovation
                </p>
              </div>
            </div>
          </Copy> */}

                  <Copy delay={0.5}>
                    <div
                      className="max-w-7xl min-h-screen text-6xl px-4 sm:px-8 md:px-20 pt-20 sm:pt-32 md:pt-40 pb-20 sm:pb-32 md:pb-40 text-black font-dm-sans grid grid-cols-1  items-center mx-auto">
                      <div className="bg-cyan-500">
                        <p className="sm:text-lg md:text-9xl text-black font-dm-sans text-center  ">Services</p>
                      </div>
                      <div>
                        <p className="text-end  sm:text-base md:text-6xl">
                          Your trusted partner in digital
                        </p>
                        <p className="text sm:text-base md:text-6xl">
                          transformation and business innovation
                        </p>
                      </div>
                    </div>
                  </Copy>

          <section className="flex justify-center items-center bg-[#eeede8] min-h-[60vh] sm:min-h-[70vh] md:min-h-screen pt-20 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-32 px-4">
            <div

              className="text-center mb-16"
            >
              {/* <Copy delay={0.1}> */}
              <div>
                <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-cyan-500 mb-4 font-dm-sans">
                  What We Offer?
                </h2>
              </div>
              {/* </Copy> */}
            </div>
          </section>

    <section className="bg-[#eeede8] text-black pt-10 pb-10 space-y-10">

      {/* Service Item */}
      <Copy delay={0.1}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between border-b-2 border-black py-10 font-dm-sans px-4 sm:px-10">
          <div className="text-2xl md:text-3xl mb-4 md:mb-0 md:mr-8 flex-shrink-0">
            ERP Consulting
          </div>
          <div className="text-base sm:text-lg md:text-2xl md:flex-1 md:mr-8 text-justify">
            We provide consulting, development and integration services on top of IFS Cloud with professionals
            with extensive experience on IFS platform.
          </div>
          <div className="text-base sm:text-lg md:text-2xl text-gray-700 mt-6 md:mt-0 md:flex-shrink-0">
            <ul className="space-y-3 list-none">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                IFS Cloud Implementation
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                Custom Modifications
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                Platform Integration
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                Business Process Optimization
              </li>
            </ul>
          </div>
        </div>
      </Copy>
                 <Copy delay={0.1}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between border-b-2 border-black py-10 font-dm-sans px-4 sm:px-10">
          <div className="text-2xl md:text-3xl mb-4 md:mb-0 md:mr-8 flex-shrink-0">
            Software<br></br>Development
          </div>
          <div className="text-base sm:text-lg md:text-2xl md:flex-1 md:mr-8 text-justify">
            Custom Software development services specialized with Java / React / Node.Js backend with managed
            deployments on AWS Cloud.
          </div>
          <div className="text-base sm:text-lg md:text-2xl text-gray-700 mt-6 md:mt-0 md:flex-shrink-0">
            <ul className="space-y-3 list-none">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                IFS Cloud Implementation
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                Custom Modifications
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                Platform Integration
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                Business Process Optimization
              </li>
            </ul>
          </div>
        </div>
      </Copy>

          </section>

          <section className="bg-[#eeede8] py-20 px-4 sm:px-8 md:px-16 relative">
      <div className="text-gray-400 opacity-50 z-20 flex items-start justify-start font-thin text-5xl sm:text-7xl">
        +
      </div>
      <Copy delay={0.5}>
        <div className="max-w-4xl">
          <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-dm-sans mb-6 leading-snug">
            Transform Your Business with Expert <br />
            ERP & Software Solutions.
          </h1>
          <span className="text-lg sm:text-xl md:text-2xl leading-relaxed">
            Unlock the full potential of IFS Cloud and custom-built software tailored to your unique needs. Whether you need seamless integrations,
            <br />
            custom modifications, or optimized workflows — we've got the expertise to make it happen.
          </span>
        </div>
      </Copy>
      <div className="mt-10">
        <button className="inline-flex items-center px-8 py-4 border border-cyan-500 text-black rounded-full hover:bg-cyan-500 hover:text-white transition-transform transform hover:scale-110">
          <span>Book a Consultation</span>
          <ArrowUpRight className="ml-2" />
        </button>
      </div>
    </section>
        </div>

      
      <Footer />
    </ReactLenis>
  )
}

export default ServicePage


// <div className="min-h-screen py-10 sm:py-20 bg-[#eeede8]">
//   <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

//     {/* Header */}
//     <Copy delay={0.5}>
//       <div className="min-h-screen grid grid-cols-1 gap-8 items-center text-black font-dm-sans">
//         <div className="bg-cyan-500 p-4 sm:p-6 md:p-10 rounded-lg">
//           <p className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-center text-black">
//             Services
//           </p>
//         </div>

//         <div className="space-y-2 sm:space-y-4">
//           <p className="text-lg sm:text-2xl md:text-5xl text-end">
//             Your trusted partner in digital
//           </p>
//           <p className="text-lg sm:text-2xl md:text-5xl">
//             transformation and business innovation
//           </p>
//         </div>
//       </div>
//     </Copy>

//     {/* What We Offer */}
//     <section className="flex justify-center items-center bg-black min-h-[60vh] sm:min-h-[70vh] md:min-h-[90vh] pt-16 pb-16 px-4 sm:px-6">
//       <div className="text-center mb-12 max-w-5xl">
//         <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-cyan-500 mb-4 font-dm-sans">
//           What We Offer?
//         </h2>
//       </div>
//     </section>

//     {/* Services Details */}
    // <section className="bg-[#eeede8] text-black pt-10 pb-10 space-y-10">

    //   {/* Service Item */}
    //   <Copy delay={0.1}>
    //     <div className="flex flex-col md:flex-row md:items-start md:justify-between border-b-2 border-black py-10 font-dm-sans px-4 sm:px-10">
    //       <div className="text-2xl md:text-3xl mb-4 md:mb-0 md:mr-8 flex-shrink-0">
    //         ERP Consulting
    //       </div>
    //       <div className="text-base sm:text-lg md:text-2xl md:flex-1 md:mr-8 text-justify">
    //         We provide consulting, development and integration services on top of IFS Cloud with professionals
    //         with extensive experience on IFS platform.
    //       </div>
    //       <div className="text-base sm:text-lg md:text-2xl text-gray-700 mt-6 md:mt-0 md:flex-shrink-0">
    //         <ul className="space-y-3 list-none">
    //           <li className="flex items-center">
    //             <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
    //             IFS Cloud Implementation
    //           </li>
    //           <li className="flex items-center">
    //             <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
    //             Custom Modifications
    //           </li>
    //           <li className="flex items-center">
    //             <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
    //             Platform Integration
    //           </li>
    //           <li className="flex items-center">
    //             <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
    //             Business Process Optimization
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </Copy>

//       {/* Service Item */}
      // <Copy delay={0.1}>
      //   <div className="flex flex-col md:flex-row md:items-start md:justify-between border-b-2 border-black py-10 font-dm-sans px-4 sm:px-10">
      //     <div className="text-2xl md:text-3xl mb-4 md:mb-0 md:mr-8 flex-shrink-0">
      //       Software Development
      //     </div>
      //     <div className="text-base sm:text-lg md:text-2xl md:flex-1 md:mr-8 text-justify">
      //       Custom Software development services specialized with Java / React / Node.Js backend with managed
      //       deployments on AWS Cloud.
      //     </div>
      //     <div className="text-base sm:text-lg md:text-2xl text-gray-700 mt-6 md:mt-0 md:flex-shrink-0">
      //       <ul className="space-y-3 list-none">
      //         <li className="flex items-center">
      //           <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
      //           IFS Cloud Implementation
      //         </li>
      //         <li className="flex items-center">
      //           <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
      //           Custom Modifications
      //         </li>
      //         <li className="flex items-center">
      //           <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
      //           Platform Integration
      //         </li>
      //         <li className="flex items-center">
      //           <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
      //           Business Process Optimization
      //         </li>
      //       </ul>
      //     </div>
      //   </div>
      // </Copy>
//     </section>

//     {/* Call To Action */}
    // <section className="bg-[#eeede8] py-20 px-4 sm:px-8 md:px-16 relative">
    //   <div className="text-gray-400 opacity-50 z-20 flex items-start justify-start font-thin text-5xl sm:text-7xl">
    //     +
    //   </div>
    //   <Copy delay={0.5}>
    //     <div className="max-w-4xl">
    //       <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-dm-sans mb-6 leading-snug">
    //         Transform Your Business with Expert <br />
    //         ERP & Software Solutions.
    //       </h1>
    //       <span className="text-lg sm:text-xl md:text-2xl leading-relaxed">
    //         Unlock the full potential of IFS Cloud and custom-built software tailored to your unique needs. Whether you need seamless integrations,
    //         <br />
    //         custom modifications, or optimized workflows — we've got the expertise to make it happen.
    //       </span>
    //     </div>
    //   </Copy>
    //   <div className="mt-10">
    //     <button className="inline-flex items-center px-8 py-4 border border-cyan-500 text-black rounded-full hover:bg-cyan-500 hover:text-white transition-transform transform hover:scale-110">
    //       <span>Book a Consultation</span>
    //       <ArrowUpRight className="ml-2" />
    //     </button>
    //   </div>
    // </section>
//   </div>
// </div>
