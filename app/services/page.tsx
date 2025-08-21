"use client"
// import type React from "react"
// import { useState, useEffect } from "react"
// import { ArrowUpRight } from "lucide-react"
// import { motion } from "framer-motion"
// import { ReactLenis, useLenis } from "lenis/react";
// import Copy from "@/components/copy"
// import Navbar from "@/components/Navbar"
// import Footer from "@/components/Footer"

// const ServicePage = () => {
//   // State management for navigation and current page
//   const [currentPage, setCurrentPage] = useState("home")
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleNavClick = (pageId: string) => {
//     setCurrentPage(pageId)
//     setMobileMenuOpen(false)
//   }


//   return (
//     <ReactLenis root>

//       <div className="min-h-screen py-20 bg-[#eeede8]">
//         <Navbar />
//         <Copy delay={0.5}>
//           <div
//             className="max-w-7xl min-h-screen text-6xl px-4 sm:px-8 md:px-20 pt-20 sm:pt-32 md:pt-40 pb-20 sm:pb-32 md:pb-40 text-black font-dm-sans grid grid-cols-1  items-center mx-auto">
//             <div className="bg-white">
//               <p className="sm:text-lg md:text-9xl text-black font-dm-sans text-center  ">Services</p>
//             </div>
//             <div>
//               <p className=" sm:text-base md:text-6xl">
//                 Your trusted partner in digital transformation and business innovation
//               </p>
//             </div>
//           </div>
//         </Copy>

//         <section className="flex justify-center items-center bg-[#eeede8] min-h-[60vh] sm:min-h-[70vh] md:min-h-screen pt-20 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-32 px-4">
//           <div

//             className="text-center mb-16"
//           >
//             {/* <Copy delay={0.1}> */}
//             <div>
//               <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-cyan-500 mb-4 font-dm-sans">
//                 What We Offer?
//               </h2>
//             </div>
//             {/* </Copy> */}
//           </div>
//         </section>

// <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 py-12">
//       <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        
//         {/* Left Column - Image */}
//         <div className="relative">
//           <img
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
//             alt="Modern workspace"
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//         </div>

//         {/* Right Column - Text */}
//         <div className="flex flex-col justify-center p-10 space-y-6">
//           <h1 className="text-4xl font-bold text-gray-900 leading-tight">
//             Modern & Minimal <span className="text-indigo-600">Web Experiences</span>
//           </h1>
//           <p className="text-lg text-gray-600">
//             Build fast, beautiful, and responsive websites with Next.js and Tailwind CSS.
//             This two-column layout is fully responsive, adapting seamlessly from mobile to desktop.
//           </p>
//           <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition duration-300 w-fit">
//             Learn More
//           </button>
//         </div>
//       </div>
      
//     <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
//                 {/* Right Column - Text */}
//         <div className="flex flex-col justify-center p-10 space-y-6">
//           <h1 className="text-4xl font-bold text-gray-900 leading-tight">
//             Modern & Minimal <span className="text-indigo-600">Web Experiences</span>
//           </h1>
//           <p className="text-lg text-gray-600">
//             Build fast, beautiful, and responsive websites with Next.js and Tailwind CSS.
//             This two-column layout is fully responsive, adapting seamlessly from mobile to desktop.
//           </p>
//           <button className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-md hover:bg-indigo-700 transition duration-300 w-fit">
//             Learn More
//           </button>
//         </div>
//         {/* Left Column - Image */}
//         <div className="relative">
//           <img
//             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
//             alt="Modern workspace"
//             className="h-full w-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
//         </div>


//       </div>
      
//     </main>
    

//         {/* <section className="bg-[#eeede8] text-black pt-10 pb-10 space-y-10">
//           <Copy delay={0.1}>
//             <div className="flex flex-col md:flex-row md:items-start md:justify-between border-b-2 border-black py-10 font-dm-sans px-4 sm:px-10">
//               <div className="text-2xl md:text-3xl mb-4 md:mb-0 md:mr-8 flex-shrink-0">
//                 ERP Consulting
//               </div>
//               <div className="text-base sm:text-lg md:text-2xl md:flex-1 md:mr-8 text-justify">
//                 We provide consulting, development and integration services on top of IFS Cloud with professionals
//                 with extensive experience on IFS platform.
//               </div>
//               <div className="text-base sm:text-lg md:text-2xl text-gray-700 mt-6 md:mt-0 md:flex-shrink-0">
//                 <ul className="space-y-3 list-none">
//                   <li className="flex items-center">
//                     <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
//                     IFS Cloud Implementation
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
//                     Custom Modifications
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
//                     Platform Integration
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
//                     Business Process Optimization
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </Copy>
//           <Copy delay={0.1}>
//             <div className="flex flex-col md:flex-row md:items-start md:justify-between border-b-2 border-black py-10 font-dm-sans px-4 sm:px-10">
//               <div className="text-2xl md:text-3xl mb-4 md:mb-0 md:mr-8 flex-shrink-0">
//                 Software<br></br>Development
//               </div>
//               <div className="text-base sm:text-lg md:text-2xl md:flex-1 md:mr-8 text-justify">
//                 Custom Software development services specialized with Java / React / Node.Js backend with managed
//                 deployments on AWS Cloud.
//               </div>
//               <div className="text-base sm:text-lg md:text-2xl text-gray-700 mt-6 md:mt-0 md:flex-shrink-0">
//                 <ul className="space-y-3 list-none">
//                   <li className="flex items-center">
//                     <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
//                     IFS Cloud Implementation
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
//                     Custom Modifications
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
//                     Platform Integration
//                   </li>
//                   <li className="flex items-center">
//                     <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
//                     Business Process Optimization
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </Copy>

//         </section> */}

//         {/* <section className="bg-[#eeede8] py-20 px-4 sm:px-8 md:px-16 relative">
//           <div className="text-gray-400 opacity-50 z-20 flex items-start justify-start font-thin text-5xl sm:text-7xl">
//             +
//           </div>
//           <Copy delay={0.5}>
//             <div className="max-w-4xl">
//               <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-dm-sans mb-6 leading-snug">
//                 Transform Your Business with Expert ERP & Software Solutions.
//               </h1>
//               <span className="text-lg sm:text-xl md:text-2xl leading-relaxed">
//                 Unlock the full potential of IFS Cloud and custom-built software tailored to your unique needs. Whether you need seamless integrations,
                
//                 custom modifications, or optimized workflows — we've got the expertise to make it happen.
//               </span>
//             </div>
//           </Copy>
//           <div className="mt-10">
//             <button className="inline-flex items-center px-8 py-4 border border-cyan-500 text-black rounded-full hover:bg-cyan-500 hover:text-white transition-transform transform hover:scale-110">
//               <span>Book a Consultation</span>
//               <ArrowUpRight className="ml-2" />
//             </button>
//           </div>
//         </section> */}
//       </div>


//       <Footer />
//     </ReactLenis>
//   )
// }

// export default ServicePage


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
        // We provide consulting, development and integration services on top of IFS Cloud with professionals
        // with extensive experience on IFS platform.
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
{/* <section className="bg-[#eeede8] py-20 px-4 sm:px-8 md:px-16 relative">
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
</section>  */}
//   </div>
// </div>


import { ReactLenis } from "lenis/react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Copy from "@/components/copy"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

type Section = {
  title: string
  highlight?: string
  description: string
  image: string
  subservices: string[]
  cta?: string
}

const sections: Section[] = [
    {
    title: "ERP ",
    highlight: "Consulting",
    description:
      "We provide consulting, development and integration services on top of IFS Cloud with professionals with extensive experience on IFS platform.",
    image:
      // "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      "/images/service1.jpg",
    subservices: [
      "IFS Cloud Implementation",
      "Custom Modifications",
      "Platform Integration",
      "Business Process Optimization",
    ],
    cta: "Learn More",
  },
      {
    title: "Software ",
    highlight: "Development",
    description:
      "Custom Software development services specialized with Java / React / Node.Js backend with managed deployments on AWS Cloud.",
    image:
      // "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      "/images/service2.jpg",
    subservices: [
      "IFS Cloud Implementation",
      "Custom Modifications",
      "Platform Integration",
      "Business Process Optimization",
    ],
    cta: "Learn More",
  },
  {
    title: "Modern & Minimal",
    highlight: "Web Experiences",
    description:
      "Ship fast, beautiful, and responsive websites with a scalable Next.js architecture, component-driven UI, and accessible design. Built for performance and easy iteration.",
    image:
      // "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      "/images/service1.jpg",
     subservices: [
      "IFS Cloud Implementation",
      "Custom Modifications",
      "Platform Integration",
      "Business Process Optimization",
    ],
    cta: "Learn More",
  },
  {
    title: "Scalable",
    highlight: "Cloud Solutions",
    description:
      "Leverage AWS, containerized workloads, CI/CD, and observability to keep your apps resilient, secure, and cost-efficient as you grow.",
    image:
      // "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      "/images/service2.jpg",
    subservices: [
      "IFS Cloud Implementation",
      "Custom Modifications",
      "Platform Integration",
      "Business Process Optimization",
    ],
    cta: "Get Started",
  },
  {
    title: "Product-Led",
    highlight: "Growth & Analytics",
    description:
      "Turn insights into action with clean data pipelines, event tracking, and dashboards that give your team clarity without the noise.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
        subservices: [
      "IFS Cloud Implementation",
      "Custom Modifications",
      "Platform Integration",
      "Business Process Optimization",
    ],
    cta: "See How",
  },
]

export default function ServicePage() {
  return (
    <ReactLenis root>
      {/* Subtle SaaS background with soft gradient */}
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-slate-800 font-dm-sans">
        <Navbar />
          {/* Decorative gradient blob */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-72 w-72 md:h-96 md:w-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-indigo-300 via-sky-200 to-emerald-200 absolute -top-16 -left-10" />
          </div>
        {/* Hero */}
        <header className="relative">
          <div className="absolute inset-0 pointer-events-none">
            {/* Decorative gradient blob */}
            <div className="h-64 w-64 md:h-96 md:w-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-indigo-300 via-sky-200 to-emerald-200 absolute -top-16 -right-10" />
          </div>

          
            <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-16 md:pb-24">
              <p className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-white/70 backdrop-blur ring-1 ring-slate-200 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Trusted Partner
              </p>
              <Copy delay={0.25}>
              <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900">
                Services that scale with your{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-sky-600">
                  product ambition
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-600">
                Strategy, design, and engineering—delivered with clarity and modern craft.
              </p>
              </Copy>
            </div>
        
        </header>

        {/* Sections */}
        <main className="max-w-7xl mx-auto px-6 lg:px-10 pb-24 space-y-16 md:space-y-24">
          {sections.map((s, i) => {
            const isReversed = i % 2 === 1
            return (
              <motion.section
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-stretch"
              >
                {/* Image */}
                <div
                  className={[
                    "md:col-span-6",
                    isReversed ? "md:order-2" : "md:order-1",
                  ].join(" ")}
                >
                  <div className="relative h-72 sm:h-96 md:h-full rounded-2xl overflow-hidden bg-slate-200 ring-1 ring-slate-200 shadow-sm">
                    <img
                      src={s.image}
                      alt={`${s.title} ${s.highlight ?? ""}`.trim()}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                </div>

                {/* Text */}
                <div
                  className={[
                    "md:col-span-6 flex",
                    isReversed ? "md:order-1" : "md:order-2",
                  ].join(" ")}
                >
                  <div className="w-full bg-white/80 backdrop-blur rounded-2xl p-8 md:p-10 ring-1 ring-slate-200 shadow-sm flex flex-col justify-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                      {s.title}{" "}
                      {s.highlight && (
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-sky-600">
                          {s.highlight}
                        </span>
                      )}
                    </h2>
                    <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                      {s.description}
                    </p>
                    {s.subservices && (
                      <ul className="mt-6 space-y-3 text-slate-600">
                        {s.subservices.map((sub, idx) => (
                          <li key={idx} className="flex items-center">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3" />
                            {sub}
                          </li>
                        ))}
                      </ul>
                    )}

                    {s.cta && (
                      <div className="mt-6">
                        <Link href={"/contact"}>
                        <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-white font-medium shadow-md hover:shadow-lg hover:bg-black transition">
                          {s.cta}
                          <ArrowUpRight className="size-4" />
                        </button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </motion.section>
            )
          })}
        </main>

        <Footer />
      </div>
    </ReactLenis>
  )
}

