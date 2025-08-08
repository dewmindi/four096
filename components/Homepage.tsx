"use client"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Menu, X, Code, Users, Mail, Server, Cloud, Cpu, ArrowRight, Phone, MapPin, ArrowBigRightDash, ArrowDownToDot, ArrowDownFromLine, ArrowDownRight, ArrowDown01Icon, ArrowDownLeft, ArrowUpLeft, ArrowUpRight, Star, AlignStartHorizontalIcon, StarOff, Asterisk } from "lucide-react"
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { LampDemo } from "./ui/lamp"
import Copy from "./copy"
import ContactRef from "./ContactRef"


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
    // <div className="min-h-screen">
    //   {/* Hero Section */}

    //   <section
    //     className="relative h-screen flex items-center justify-start overflow-hidden">
    //     {/* Background Image */}
    //     <div className="absolute inset-0 z-0">
    //       <LampDemo />
    //       <img src={heroImages[currentImageIndex]} alt="Natural background" className="w-full h-full object-cover" />
    //       <div className="absolute inset-0 bg-black/30"></div>
    //     </div>

    //     {/* Hero Content */}
    //     <div className="relative z-10 text-left text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
    //       <div className="max-w-3xl mt-36">
    //         <div className="bg-white opacity-50 text-black px-4 py-2 inline-block mb-6 text-sm font-medium rounded-full">
    //           🏢 Professional Software Solutions
    //         </div>
    //         <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
    //           <span className="text-cyan-500">Four096</span>
    //           <br />
    //           <span className="text-white">Solutions & Consulting</span>
    //         </h1>
    //         <p className="text-xl sm:text-2xl mb-8 max-w-2xl leading-relaxed text-gray-200">
    //           Expert software development, ERP consulting, and integration services with over 2 decades of experience in
    //           transforming businesses.
    //         </p>
    //         <div className="flex flex-col sm:flex-row gap-4">
    //           <button
    //             onClick={() => handleNavClick("contact")}
    //             className="bg-cyan-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
    //           >
    //             Contact us via Email
    //             <Mail className="ml-2 h-5 w-5" />
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Scroll Indicator */}
    //     <div className="absolute bottom-8 right-8 text-white">
    //       <div className="flex items-center space-x-2 text-sm">
    //         <span>Scroll Down</span>
    //         <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center ">
    //           <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <Copy delay={1}>
    //     <section className="flex justify-center items-center bg-[#eeede8] min-h-96 pt-32 pb-32">
    //       <div
    //         className="text-center mb-16"
    //       >
    //         <div className="text-cyan-500 z-20 flex items-start justify-start text-4xl    font-thin ">
    //           +
    //         </div>
    //         <h2 className="text-9xl text-black mb-4 font-dm-sans">
    //           About Us
    //         </h2>
    //         <div className="text-cyan-500 z-20 flex items-end justify-end text-4xl    font-thin ">
    //           +
    //         </div>
    //       </div>
    //     </section>
    //   </Copy>
    //   <div
    //     className="bg-[#eeede8] text-4xl pt-40  text-black font-dm-sans flex flex-col gap-3 p-10">
    //     <Copy delay={0.5}>
    //       <p>
    //         We are a consulting service with professionals with over 2 decades of experience
    //         in Software Development,
    //         Integration and Consulting specializing in business software.
    //       </p>
    //     </Copy>

    //     <Copy delay={0.5}>
    //       <p>
    //         We have extensive experience in development on top of IFS ERP Solutions,
    //         including modifications and integration with various platforms.
    //       </p>
    //     </Copy>

    //     <Copy delay={0.5}>
    //       <p>
    //         In addition, we provide services for Software Development, Integration,
    //         Implementations <br></br>to fulfil your business needs from inception to delivery.
    //       </p>
    //     </Copy>

    //   </div>

    //   <section className="bg-[#eeede8] pb-16">
    //     <div className="flex sm:grid-cols-1 md:grid-cols-3 justify-between gap-6 p-10">
    //       <div className="flex flex-col justify-between bg-[#222222] rounded-md p-5">
    //         <div className="flex flex-col gap-4">
    //           <h1 className="text-4xl text-white font-dm-sans">20+ Years Experience</h1>
    //           <h1 className="text-2xl text-gray-400 font-thin">Two decades of proven expertise in software development and business consulting</h1>
    //         </div>

    //         <div className="flex justify-end mt-10"><button><ArrowUpRight color="white" /></button></div>
    //       </div>
    //       <div className="flex flex-col justify-between bg-[#222222] rounded-md p-5">
    //         <div className="flex flex-col gap-4">

    //           <h1 className="text-4xl text-white font-dm-sans">IFS ERP Specialists</h1>
    //           <h1 className="text-2xl text-gray-400 font-thin">Extensive experience in IFS ERP solutions, modifications, and platform integrations</h1>


    //         </div>

    //         <div className="flex justify-end mt-10"><button><ArrowUpRight color="white" /></button></div>
    //       </div>
    //       <div className="flex flex-col justify-between bg-[#222222] rounded-md p-5">
    //         <div className="flex flex-col gap-4">
    //           <h1 className="text-4xl text-white font-dm-sans">End-to-End Solutions</h1>
    //           <h1 className="text-2xl text-gray-400 font-thin">Complete software development lifecycle from inception to delivery and beyond</h1>
    //         </div>

    //         <div className="flex justify-end mt-10"><button><ArrowUpRight color="white" /></button></div>
    //       </div>

    //     </div>

    //     <div className="flex justify-center ">
    //       <button className="mt-10 align-middle p-6 border border-cyan-500 rounded-full flex hover:bg-cyan-500 hover:scale-110">
    //         <span className="">Learn More</span>
    //         <span className=""><ArrowUpRight /></span>
    //       </button>
    //     </div>
    //   </section>
     
    //   <section className="flex justify-center items-center bg-[#020410] min-h-screen pt-32 pb-32">
    //     <motion.div
    //       ref={ref}
    //       animate={controls}
    //       initial={{ opacity: 0, y: 50, scale: 0.95 }}
    //       className="text-center mb-16"
    //     >
    //       {/* <Copy delay={0.1}> */}
    //       <div>
    //         <h2 className="text-9xl text-white mb-4 font-dm-sans">
    //           What We Offer
    //         </h2>
    //       </div>
    //       {/* </Copy> */}
    //     </motion.div>
    //   </section>

    //   <Copy delay={0.5}>
    //     <div
    //       className=" bg-[#eeede8] text-6xl px-20 pt-40 pb-40 text-black font-dm-sans flex flex-col">
    //       <p className="text-end">
    //         Discover our comprehensive range  of
    //       </p>
    //       <p className="text">
    //         professional services designed to elevate your business
    //       </p>
    //     </div>
    //   </Copy>
    //   <section className=" bg-[#eeede8] text-black px-2 pb-10">
    //     <Copy delay={0.1}>
    //       <div className="flex flex-row justify-between border-b-2 border-black border-t-2 py-10 font-dm-sans">
    //         <div className="text-9xl mr-44 animate-pulse"><Asterisk size={120} /></div>
    //         <div className="text-2xl mr-20">ERP Consultation</div>
    //         <div className="text-2xl">We provide consulting, development and integration services
    //           on top of IFS Cloud with professionals with extensive experience
    //           on IFS platform.
    //         </div>
    //       </div>
    //     </Copy>
    //     <Copy delay={0.1}>
    //       <div className="flex flex-row justify-between border-b-2 border-black  py-10 font-dm-sans">
    //         <div className="text-9xl mr-44 animate-pulse"><Asterisk size={120} /></div>
    //         <div className="text-2xl mr-20">Software Development</div>
    //         <div className="text-2xl">Custom Software development services specialized with
    //           Java / React / Node.Js backend with managed deployments on AWS Cloud.
    //         </div>
    //       </div>
    //     </Copy>
    //     <div className="flex justify-center ">
    //       <button className="mt-10 align-middle p-6 border border-cyan-500 rounded-full flex hover:bg-cyan-500 hover:scale-110">
    //         <span className="">Learn More</span>
    //         <span className=""><ArrowUpRight /></span>
    //       </button>
    //     </div>
    //   </section>
    //   <ContactRef />
    // </div>
    <div className="min-h-screen">
  {/* Hero Section */}
  <section className="relative h-screen flex items-center justify-start overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <LampDemo />
      <img
        src={heroImages[currentImageIndex]}
        alt="Natural background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30"></div>
    </div>

    {/* Hero Content */}
    <div className="relative z-10 text-left text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
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
          <button
            onClick={() => handleNavClick("contact")}
            className="bg-cyan-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
          >
            Contact us via Email
            <Mail className="ml-2 h-4 sm:h-5 w-4 sm:w-5" />
          </button>
        </div>
      </div>
    </div>

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

  {/* About Us */}
  <Copy delay={1}>
    <section className="flex flex-col justify-center items-center bg-[#eeede8] min-h-[24rem] pt-20 sm:pt-32 pb-20 sm:pb-32 px-4 text-center">
      <div className="flex items-center justify-center gap-4">
        <div className="text-cyan-500 text-2xl sm:text-4xl font-thin">+</div>
        <h2 className="text-5xl sm:text-7xl lg:text-9xl text-black mb-4 font-dm-sans">
          About Us
        </h2>
        <div className="text-cyan-500 text-2xl sm:text-4xl font-thin">+</div>
      </div>
    </section>
  </Copy>

  <div className="bg-[#eeede8] text-lg sm:text-2xl lg:text-4xl pt-20 sm:pt-40 text-black font-dm-sans flex flex-col gap-6 p-6 sm:p-10">
    <Copy delay={0.5}>
      <p>
        We are a consulting service with professionals with over 2 decades of
        experience in Software Development, Integration and Consulting
        specializing in business software.
      </p>
    </Copy>
    <Copy delay={0.5}>
      <p>
        We have extensive experience in development on top of IFS ERP Solutions,
        including modifications and integration with various platforms.
      </p>
    </Copy>
    <Copy delay={0.5}>
      <p>
        In addition, we provide services for Software Development, Integration,
        Implementations to fulfil your business needs from inception to delivery.
      </p>
    </Copy>
  </div>

  {/* Experience Cards */}
  <section className="bg-[#eeede8] pb-16">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-10">
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
          className="flex flex-col justify-between bg-[#222222] rounded-md p-5"
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-dm-sans">
              {card.title}
            </h1>
            <h1 className="text-lg sm:text-xl lg:text-2xl text-gray-400 font-thin">
              {card.desc}
            </h1>
          </div>
          <div className="flex justify-end mt-6 sm:mt-10">
            <button>
              <ArrowUpRight color="white" />
            </button>
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-center">
      <button className="mt-8 sm:mt-10 p-4 sm:p-6 border border-cyan-500 rounded-full flex items-center gap-2 hover:bg-cyan-500 hover:scale-110 transition-all">
        <span>Learn More</span>
        <ArrowUpRight />
      </button>
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
    <div className="bg-[#eeede8] text-3xl sm:text-5xl lg:text-6xl px-6 sm:px-20 pt-20 sm:pt-40 pb-20 sm:pb-40 text-black font-dm-sans flex flex-col gap-2">
      <p className="text-end">Discover our comprehensive range of</p>
      <p>professional services designed to elevate your business</p>
    </div>
  </Copy>

  {/* Services List */}
  <section className="bg-[#eeede8] text-black px-2 pb-10">
    {[
      {
        title: "ERP Consultation",
        desc: "We provide consulting, development and integration services on top of IFS Cloud with professionals with extensive experience on IFS platform.",
      },
      {
        title: "Software Development",
        desc: "Custom Software development services specialized with Java / React / Node.Js backend with managed deployments on AWS Cloud.",
      },
    ].map((service, idx) => (
      <Copy key={idx} delay={0.1}>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between border-b-2 border-black border-t-2 py-6 sm:py-10 font-dm-sans gap-6">
          <div className="text-6xl sm:text-8xl lg:text-9xl animate-pulse">
            <Asterisk size={80} className="sm:hidden" />
            <Asterisk size={120} className="hidden sm:block" />
          </div>
          <div className="text-xl sm:text-2xl font-bold">{service.title}</div>
          <div className="text-base sm:text-xl max-w-xl">{service.desc}</div>
        </div>
      </Copy>
    ))}

    <div className="flex justify-center">
      <button className="mt-8 sm:mt-10 p-4 sm:p-6 border border-cyan-500 rounded-full flex items-center gap-2 hover:bg-cyan-500 hover:scale-110 transition-all">
        <span>Learn More</span>
        <ArrowUpRight />
      </button>
    </div>
  </section>

  <ContactRef />
</div>

  )
}

export default Homepage
