import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Menu, X, Code, Users, Mail, Server, Cloud, Cpu, ArrowRight, Phone, MapPin, ArrowBigRightDash, ArrowDownToDot, ArrowDownFromLine, ArrowDownRight, ArrowDown01Icon, ArrowDownLeft, ArrowUpLeft, ArrowUpRight } from "lucide-react"
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import Link from "next/link"
import Script from 'next/script'
import { LampDemo } from "./ui/lamp"


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
    <div className="min-h-screen">
      {/* Hero Section */}
     
      <section 
      className="relative h-screen flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <LampDemo/>
          <img src={heroImages[currentImageIndex]} alt="Natural background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      
        {/* Hero Content */}
        <div className="relative z-10 text-left text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-3xl mt-36">
            <div className="bg-white opacity-50 text-black px-4 py-2 inline-block mb-6 text-sm font-medium rounded-full">
              🏢 Professional Software Solutions
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-cyan-500">Four096</span>
              <br />
              <span className="text-white">Solutions & Consulting</span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8 max-w-2xl leading-relaxed text-gray-200">
              Expert software development, ERP consulting, and integration services with over 2 decades of experience in
              transforming businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => handleNavClick("contact")}
                className="bg-cyan-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Contact us via Email
                <Mail className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 text-white">
          <div className="flex items-center space-x-2 text-sm">
            <span>Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center ">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center bg-[#020410] min-h-screen pt-32 pb-32">
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          className="text-center mb-16"
        >
          <h2 className="text-9xl text-white mb-4 font-dm-sans">
            What We Offer
          </h2>
        </motion.div>
      </section>

      <div
        className="bg-[#eeede8] text-6xl pt-40 pb-40 text-black font-dm-sans ">
        Discover our comprehensive range of <br></br>professional services designed to elevate your business
      </div>

      <section className=" bg-[#eeede8] text-black px-2 pb-10">
        <div className="flex flex-row justify-between border-b-2 border-black border-t-2 py-10 font-dm-sans">
          <div className="text-9xl mr-44">1</div>
          <div className="text-2xl mr-20">ERP Consultation</div>
          <div className="text-2xl">We provide consulting, development and integration services
            on top of IFS Cloud with professionals with extensive experience
            on IFS platform.
          </div>
        </div>
        <div className="flex flex-row justify-between border-b-2 border-black  py-10 font-dm-sans">
          <div className="text-9xl mr-44">2</div>
          <div className="text-2xl mr-20">Software Development</div>
          <div className="text-2xl">Custom Software development services specialized with
            Java / React / Node.Js backend with managed deployments on AWS Cloud.
          </div>
        </div>
        <div className="flex justify-center ">
          <button className="mt-10 align-middle p-6 border rounded-full flex hover:bg-yellow-400 hover:scale-110">
              <span className="">Learn More</span>
              <span className=""><ArrowUpRight/></span>
          </button>
        </div>
      </section>

      <section className="flex justify-center items-center bg-white min-h-screen pt-32 pb-32">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-9xl text-black mb-4 font-dm-sans">
            About Us
          </h2>
        </div>
      </section>
      <div
        className="bg-white text-4xl pt-40 pb-40 text-black font-dm-sans ">
        <p className="mb-4">
          We are a consulting service with professionals with over 2 decades of experience<br></br> in Software Development,
         Integration and Consulting specializing in business software.
        </p>
         
         <p className="mb-4">We have extensive experience in development on top of <span className="font-bold hover:text-emerald-700">IFS ERP</span> Solutions, 
         including<br></br> modifications and integration with various platforms.</p>
         <p>
          In addition, we provide services for Software Development, Integration, 
          Implementations <br></br>to fulfil your business needs from inception to delivery.
         </p>
         
      </div>
      <section className=" bg-white text-black px-2 pb-10">
        <div className="flex flex-row justify-between  border-black border-t-2 py-10 font-dm-sans">
          <div className="text-9xl mr-44">1</div>
          <div className="text-2xl mr-20">ERP Consultation</div>
          <div className="text-2xl">We provide consulting, development and integration services
            on top of IFS Cloud with professionals with extensive experience
            on IFS platform.
          </div>
        </div>
        <div className="flex flex-row justify-between border-b-2 border-black border-t-2 py-10 font-dm-sans">
          <div className="text-9xl mr-44">2</div>
          <div className="text-2xl mr-20">Software Development</div>
          <div className="text-2xl">Custom Software development services specialized with
            Java / React / Node.Js backend with managed deployments on AWS Cloud.
          </div>
        </div>
        <div className="flex justify-center ">
          <button className="mt-10 align-middle p-6   border-black border-2 rounded-full flex hover:bg-yellow-400 hover:scale-110">
              <span className="">Explore More</span>
              <span className=""><ArrowUpRight/></span>
          </button>
        </div>
        
      </section>
      {/* Summary Boxes Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-6xl  text-gray-900 mb-4 font-dm-sans">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive range of professional services designed to elevate your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Summary Box */}
            <Link href={'/about'}>
              <div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"

              >
                <div className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">About Us</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Over 2 decades of experience in software development, integration, and consulting with specialized
                    expertise in business solutions.
                  </p>
                  <div className="text-blue-600 font-semibold flex items-center justify-center">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Services Summary Box */}
            <Link href={'/services'}>
              <div
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => handleNavClick("services")}
              >
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Code className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Services</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    ERP consulting, custom software development, and cloud integration services tailored to your business
                    needs.
                  </p>
                  <div className="text-green-600 font-semibold flex items-center justify-center">
                    Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
            {/* Contact Summary Box */}
            <div
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => handleNavClick("contact")}
            >
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ready to transform your business? Get in touch with our team of experts for a consultation.
                </p>
                <div className="text-purple-600 font-semibold flex items-center justify-center">
                  Get In Touch <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Homepage
