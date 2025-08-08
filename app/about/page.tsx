"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { ReactLenis, useLenis } from "lenis/react";
import Copy from "@/components/copy"
import Expertise from "@/components/Expertise"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"


const AboutPage = () => {
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
    <ReactLenis root>
      <div className="min-h-screen bg-[#eeede8]">
        <Navbar />
        {/* flex  items-center */}
        <Copy delay={0.5}>
          <div
            className="max-w-7xl min-h-screen text-6xl px-4 sm:px-8 md:px-20 pt-20 sm:pt-32 md:pt-40 pb-20 sm:pb-32 md:pb-40 text-black font-dm-sans grid grid-cols-1  items-center mx-auto">
            <div className="bg-cyan-500">
              <p className="sm:text-lg md:text-9xl text-black font-dm-sans text-center  ">About Four096</p>
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
          <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            className="text-center mb-16"
          >
            {/* <Copy delay={0.1}> */}
            <div>
              <h2 className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl text-cyan-500 mb-4 font-dm-sans">
                Our Expertise
              </h2>
            </div>
            {/* </Copy> */}
          </motion.div>
        </section>
        <Expertise />
        <Footer />
      </div>
    </ReactLenis>
  )
}
export default AboutPage


// {/* <ReactLenis root>
//   <div className="min-h-screen bg-[#eeede8]">
//     <Navbar />

//     {/* About Four096 Section */}
//     <Copy delay={0.5}>
//       <div className="max-w-7xl min-h-screen px-4 sm:px-8 md:px-20 pt-20 sm:pt-32 md:pt-40 pb-20 sm:pb-32 md:pb-40 text-black font-dm-sans grid grid-cols-1 items-center mx-auto gap-8">
        
//         {/* Title */}
//         <div className="bg-cyan-500 p-4 sm:p-6 md:p-8 rounded-lg">
//           <p className="text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-bold text-black text-center">
//             About Four096
//           </p>
//         </div>

//         {/* Subtext */}
//         <div className="space-y-2 sm:space-y-4">
//           <p className="text-lg sm:text-2xl md:text-5xl lg:text-6xl text-end">
//             Your trusted partner in digital
//           </p>
//           <p className="text-lg sm:text-2xl md:text-5xl lg:text-6xl">
//             transformation and business innovation
//           </p>
//         </div>
//       </div>
//     </Copy>

//     {/* Our Expertise Section */}
//     <section className="flex justify-center items-center bg-[#eeede8] min-h-[60vh] sm:min-h-[70vh] md:min-h-screen pt-20 sm:pt-28 md:pt-32 pb-20 sm:pb-28 md:pb-32 px-4">
//       <motion.div
//         ref={ref}
//         animate={controls}
//         initial={{ opacity: 0, y: 50, scale: 0.95 }}
//         className="text-center mb-10"
//       >
//         <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl text-cyan-500 mb-4 font-dm-sans">
//           Our Expertise
//         </h2>
//       </motion.div>
//     </section>

//     <Expertise />
//     <Footer />
//   </div>
// </ReactLenis> */}
