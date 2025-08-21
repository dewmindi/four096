"use client"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Menu, X, Code, Users, Mail, Server, Cloud, Cpu, ArrowRight, Phone, MapPin, ArrowBigRightDash, ArrowDownToDot, ArrowDownFromLine, ArrowDownRight, ArrowDown01Icon, ArrowDownLeft, ArrowUpLeft, ArrowUpRight, Star, AlignStartHorizontalIcon, StarOff, Asterisk } from "lucide-react"
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { LampDemo } from "./ui/lamp"
import Copy from "./copy"
import ContactRef from "./ContactRef"
import Link from "next/link"


const Homepage = () => {
  // State management for navigation and current page
  const [currentPage, setCurrentPage] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    "/images/four0963.jpeg?height=600&width=1200",
    "/images/four0964.jpeg?height=600&width=1200",
    "/images/four0962.jpeg?height=600&width=1200",
    "/images/four0961.jpeg?height=600&width=1200",
  ]

  // Auto-rotate hero images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  // Handle navigation clicks
  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId)
    setMobileMenuOpen(false)
  }

  const { ref, inView } = useInView({
    threshold: 0.3,
  })

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1.05,
        transition: {
          duration: 1,
          ease: 'easeOut',
        },
      })
    } else {
      controls.start({
        opacity: 0,
        y: 50,
        scale: 0.95,
        transition: {
          duration: 0.8,
          ease: 'easeIn',
        },
      })
    }
  }, [inView, controls])
  return (

    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div className=" absolute inset-0 z-0">
          <LampDemo />
          <img
            src={heroImages[currentImageIndex]}
            alt="Natural background"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.5)" }}
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-left text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full font-dm-sans">
          <div className="max-w-3xl mt-28 sm:mt-36">
            <div className="bg-white opacity-50 text-black px-3 py-1 sm:px-4 sm:py-2 inline-block mb-4 sm:mb-6 text-xs sm:text-sm font-medium rounded-full">
              🏢 Professional Software Solutions
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-cyan-500">Four096</span>
              <br />
              <span className="text-white">Solutions & Consulting</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 max-w-2xl leading-relaxed text-gray-200">
              Expert software development, ERP consulting, and integration services
              with over 2 decades of experience in transforming businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href={"/contact"} >
                <button className="px-6 py-3 bg-transparent border border-cya text-white rounded-xl font-medium hover:bg-cyan-700 transition flex items-center gap-2">
                Get Started <ArrowRight size={18} />
              </button>
              </Link>
              <Link href={"/about"} >
                            <button className="px-6 py-3 bg-white border border-slate-300 rounded-xl font-medium hover:bg-slate-100 transition text-black">
                Learn More
              </button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 text-white">
          <div className="flex items-center space-x-2 text-xs sm:text-sm">
            <span>Scroll Down</span>
            <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us bg-[#eeede8] */}
      <Copy delay={1}>
        <section className=" flex flex-col justify-center items-center bg-white min-h-[24rem] pt-20 sm:pt-32 pb-20 sm:pb-32 px-4 text-center">
          <div className="flex items-center justify-center gap-4">
            <div className="text-cyan-500 text-2xl sm:text-4xl font-thin">+</div>
            <h2 className="text-5xl sm:text-7xl lg:text-9xl text-black mb-4 font-dm-sans">
              About Us
            </h2>
            <div className="text-cyan-500 text-2xl sm:text-4xl font-thin">+</div>
          </div>
        </section>
      </Copy>
      <div className="max-w-7xl mx-auto bg-white text-xl sm:text-2xl lg:text-3xl text-slate-700 font-light leading-relaxed px-6 sm:px-16 lg:px-24 py-20 space-y-10 font-dm-sans">
        <Copy delay={0.5}>
          <p>
            We are a consulting service with over 20 years of experience in
            Software Development, ERP Integration, and Business Consulting.
          </p>
        </Copy>
        <Copy delay={0.5}>
          <p>
            Our team specializes in IFS ERP Solutions, from modifications to
            integrations with enterprise platforms.
          </p>
        </Copy>
        <Copy delay={0.5}>
          <p>
            We also deliver end-to-end custom software development tailored to
            your business needs, ensuring growth and scalability.
          </p>
        </Copy>
      </div>

      {/* Key Features Section */}
      <section className="max-w-7xl mx-auto bg-gradient-to-b from-slate-50 to-white py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 sm:px-16">
          {[
            {
              title: "20+ Years Experience",
              desc: "Two decades of proven expertise in software development and business consulting",
            },
            {
              title: "IFS ERP Specialists",
              desc: "Extensive experience in IFS ERP solutions, modifications, and platform integrations",
            },
            {
              title: "End-to-End Solutions",
              desc: "Complete software development lifecycle from inception to delivery and beyond",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white shadow-lg hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
                {card.title}
              </h3>
              <p className="text-slate-300 text-lg">{card.desc}</p>
              <div className="flex justify-end mt-8">
                <ArrowUpRight className="text-cyan-400" />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link href={"/about"} >
          <button className="mt-12 px-6 py-4 border border-cyan-500 text-cyan-600 rounded-full hover:bg-cyan-500 hover:text-white transition-all shadow-sm flex items-center gap-2">
            <span>Learn More</span>
            <ArrowUpRight />
          </button>
          </Link>
        </div>
      </section>

      {/* What We Offer */}
      <section className="flex justify-center items-center bg-[#020410] min-h-screen pt-20 sm:pt-32 pb-20 sm:pb-32 px-4">
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-7xl lg:text-9xl text-white mb-4 font-dm-sans">
            What We Offer
          </h2>
        </motion.div>
      </section>

      <Copy delay={0.5}>
        <div className="max-w-7xl mx-auto bg-white text-3xl sm:text-5xl lg:text-6xl px-6 sm:px-20 pt-20 sm:pt-40 pb-20 sm:pb-40 text-black font-dm-sans flex flex-col gap-2">
          <p className="text-end">Discover our comprehensive range of</p>
          <p>professional services designed to elevate your business</p>
        </div>
      </Copy>

      {/* Services List */}
      <section className="max-w-7xl mx-auto bg-white text-black px-2 pb-10 mb-20">
        <Copy delay={0.1}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between  border-black border-t-2 py-6 sm:py-10 font-dm-sans gap-6">
            <div className="text-6xl sm:text-8xl lg:text-9xl">
              <Asterisk size={80} className="sm:hidden" />
              <Asterisk size={120} className="hidden sm:block" />
            </div>
            <div className="text-xl sm:text-2xl font-bold">ERP Consultation</div>
            <div className="text-base sm:text-xl max-w-xl">We provide consulting, development and integration services on top of IFS Cloud with professionals with extensive experience on IFS platform.</div>
          </div>
        </Copy>
        <Copy delay={0.1}>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between  border-black border-t-2 border-b-2 py-6 sm:py-10 font-dm-sans gap-6">
            <div className="text-6xl sm:text-8xl lg:text-9xl">
              <Asterisk size={80} className="sm:hidden" />
              <Asterisk size={120} className="hidden sm:block" />
            </div>
            <div className="text-xl sm:text-2xl font-bold">Software Development</div>
            <div className="text-base sm:text-xl max-w-xl">Custom Software development services specialized with Java / React / Node.Js backend with managed deployments on AWS Cloud.</div>
          </div>
        </Copy>
        {/* ))} */}

        <div className="flex justify-center">
          <Link href={"/services"} >
          <button  className="mt-8 sm:mt-10 p-4 sm:p-6 border border-cyan-500 rounded-full flex items-center gap-2 hover:bg-cyan-500 hover:scale-110 transition-all">
            <span>Learn More</span>
            <ArrowUpRight />
          </button>
          </Link>
        </div>
      </section>

      <ContactRef />
    </div>

  )
}

export default Homepage

// app/page.tsx (Next.js 13+ with app directory)
// "use client";

// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// export default function Home() {
//   return (
//     <main className="font-sans text-slate-900">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-cyan-50 via-white to-indigo-50 min-h-screen">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           {/* Text */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="space-y-6"
//           >
            
//             <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
//               Powering Businesses with{" "}
//               <span className="text-cyan-600">Smart SaaS Solutions</span>
//             </h1>
//             <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
//               We design, build, and scale digital products that help you stay
//               ahead in a rapidly evolving world. From ERP to custom apps, we
//               bring your vision to life.
//             </p>
//             <div className="flex gap-4">
//               <button className="px-6 py-3 bg-cyan-600 text-white rounded-xl font-medium hover:bg-cyan-700 transition flex items-center gap-2">
//                 Get Started <ArrowRight size={18} />
//               </button>
//               <button className="px-6 py-3 bg-white border border-slate-300 rounded-xl font-medium hover:bg-slate-100 transition">
//                 Learn More
//               </button>
//             </div>
//           </motion.div>

//           {/* Image */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             className="relative"
//           >
//             <img
//               src="https://plus.unsplash.com/premium_photo-1719839720591-d43eb07de1da?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="SaaS Dashboard"
//               className="rounded-2xl shadow-xl border border-slate-200"
//             />
//           </motion.div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-24 max-w-7xl mx-auto px-6 lg:px-12">
//         <div className="text-center mb-14">
//           <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//             Why Choose Us?
//           </h2>
//           <p className="text-slate-600 max-w-2xl mx-auto">
//             We deliver scalable SaaS and ERP solutions tailored to your unique
//             business needs. Here’s what sets us apart.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {[
//             {
//               title: "Custom ERP Solutions",
//               desc: "Tailored systems to optimize workflows and unlock business potential.",
//             },
//             {
//               title: "Seamless Integrations",
//               desc: "Connect your tools and processes for a smooth, unified experience.",
//             },
//             {
//               title: "Scalable Architecture",
//               desc: "Future-proof solutions designed to grow alongside your business.",
//             },
//           ].map((f, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: i * 0.2 }}
//               className="p-8 rounded-2xl border border-slate-200 shadow-sm bg-white hover:shadow-md transition"
//             >
//               <h3 className="text-xl font-semibold mb-3 text-cyan-600">
//                 {f.title}
//               </h3>
//               <p className="text-slate-600">{f.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* About Preview */}
//       <section className="py-20 bg-slate-50">
//         <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <img
//             src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1600"
//             alt="Team working"
//             className="rounded-2xl shadow-md border border-slate-200"
//           />
//           <div>
//             <h2 className="text-3xl font-bold mb-4">About Us</h2>
//             <p className="text-slate-600 mb-6">
//               We are a team of engineers, innovators, and problem-solvers
//               passionate about building SaaS solutions that create measurable
//               impact. Our expertise lies in ERP, integrations, and custom
//               software tailored to your unique goals.
//             </p>
//             <button className="px-6 py-3 bg-cyan-600 text-white rounded-xl font-medium hover:bg-cyan-700 transition">
//               Learn More
//             </button>
//           </div>
//         </div>
//       </section>


//     </main>
//   );
// }

