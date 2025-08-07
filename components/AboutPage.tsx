import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X, Code, Users, Mail, Server, Cloud, Cpu, ArrowRight, Phone, MapPin, ArrowDownLeft, ArrowDownRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Copy from "./copy"
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import Expertise from "./Expertise"

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

    <div className="min-h-screen bg-[#eeede8]">
      {/* flex  items-center */}
      <Copy delay={0.5}>
        <div
          className="max-w-7xl min-h-screen text-6xl px-20 pt-40 pb-40 text-black font-dm-sans grid grid-cols-1  items-center mx-auto">
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

      {/* <Copy delay={0.5}>
        <div
          className="  text-6xl px-20 pt-40 pb-40 text-black font-dm-sans flex flex-col">
          <div>
            <p className="sm:text-lg md:text-9xl text-black font-dm-sans text-end">About Four096</p>
          </div>
          <p className="text-end sm:text-base">
            Your trusted partner in digital
          </p>
          <p className="text sm:text-base">
            transformation and business innovation
          </p>
        </div>
      </Copy> */}



      <section className="flex justify-center items-center bg-[#eeede8] min-h-screen pt-32 pb-32">
        <motion.div
          ref={ref}
          animate={controls}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          className="text-center mb-16"
        >
          {/* <Copy delay={0.1}> */}
          <div>
            <h2 className="text-9xl text-cyan-500 mb-4 font-dm-sans">
              Our Expertise
            </h2>
          </div>
          {/* </Copy> */}
        </motion.div>
      </section>
      <Expertise/>

      {/* Key Features */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Server className="h-8 w-8 text-blue-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">20+ Years Experience</h3>
          <p className="text-gray-600">
            Two decades of proven expertise in software development and business consulting
          </p>
        </div>
        <div className="text-center p-6">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Cloud className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">IFS ERP Specialists</h3>
          <p className="text-gray-600">
            Extensive experience in IFS ERP solutions, modifications, and platform integrations
          </p>
        </div>
        <div className="text-center p-6">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Cpu className="h-8 w-8 text-purple-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Solutions</h3>
          <p className="text-gray-600">
            Complete software development lifecycle from inception to delivery and beyond
          </p>
        </div>
      </div> */}
    </div>

  )
}
export default AboutPage
