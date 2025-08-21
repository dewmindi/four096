"use client"
import type React from "react"
import { useState, useEffect } from "react"
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { ReactLenis, useLenis } from "lenis/react";
import { Users, Rocket, Award } from "lucide-react";
import Copy from "@/components/copy"
import Expertise from "@/components/Expertise"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"


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
      <main className="min-h-screen  bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-slate-800 ">
        <Navbar />

        {/* Hero */}
        <header className="relative  ">
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-72 w-72 md:h-96 md:w-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-indigo-300 via-sky-200 to-emerald-200 absolute right-0 " />
          </div>
          <div className=" inset-0 pointer-events-none">
            {/* Decorative gradient blob */}
            <div className="h-64 w-64 md:h-96 md:w-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-indigo-300 via-sky-200 to-emerald-200 absolute top-0" />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-28 font-dm-sans">
            <p className="inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full bg-white/70 backdrop-blur ring-1 ring-slate-200 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Who We are
            </p>
            <Copy delay={0.25}>
              <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900">
                About{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-sky-600">
                  Four096
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg md:text-xl text-slate-600">
                Your trusted partner in digital transformation and business innovation
              </p>
            </Copy>
          </div>
        </header>

        {/* Company Story Section */}
        <main className="max-w-7xl mx-auto px-6 lg:px-10 py-12 space-y-24 font-sans">
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            {/* Image */}
            <div className="md:col-span-6 relative h-80 sm:h-[26rem] md:h-[32rem] rounded-3xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
                alt="Team collaboration"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-6 left-6 text-white font-dm-sans"
              >
                <h3 className="text-2xl font-semibold">Innovation in Action</h3>
                <p className="text-sm text-white/80 mt-1">
                  Collaborating with businesses worldwide
                </p>
              </motion.div>
            </div>

            {/* Text */}
            <div className="md:col-span-6 flex flex-col space-y-6 font-dm-sans">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Who We Are
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                At <span className="font-semibold text-cyan-600">Four096</span>, we
                are a team of innovators, engineers, and creators passionate about
                delivering next-generation digital solutions. Our mission is to help
                businesses embrace change, harness new technologies, and create
                seamless experiences customers love.
              </p>

              {/* Stats / Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md ring-1 ring-slate-200"
                >
                  <Users className="h-8 w-8 text-cyan-600 mb-2" />
                  <h4 className="text-2xl font-bold text-slate-900">50+</h4>
                  <p className="text-sm text-slate-500">Clients Worldwide</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md ring-1 ring-slate-200"
                >
                  <Rocket className="h-8 w-8 text-cyan-600 mb-2" />
                  <h4 className="text-2xl font-bold text-slate-900">10+</h4>
                  <p className="text-sm text-slate-500">Years Experience</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md ring-1 ring-slate-200"
                >
                  <Award className="h-8 w-8 text-cyan-600 mb-2" />
                  <h4 className="text-2xl font-bold text-slate-900">100+</h4>
                  <p className="text-sm text-slate-500">Projects Delivered</p>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </main>

        {/* Our Expertise */}
        <section className="flex justify-center items-center bg-[#020410] min-h-screen pt-20 sm:pt-32 pb-20 sm:pb-32 px-4">
          <motion.div
            ref={ref}
            animate={controls}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl sm:text-7xl lg:text-9xl text-white mb-4 font-dm-sans">
              Our Expertise
            </h2>
          </motion.div>
        </section>

        {/* Expertise Component */}
        <Expertise />
        <section className="relative bg-gradient-to-br from-white via-gray-50 to-gray-100 py-24 px-6 sm:px-12 md:px-20 overflow-hidden">
          {/* Decorative Element */}
          <div className="absolute top-10 left-10 text-cyan-500/10 text-7xl sm:text-8xl font-bold select-none">
            +
          </div>

          <Copy delay={0.5}>
            <div className="relative max-w-5xl mx-auto text-center font-dm-sans">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-3xl sm:text-5xl md:text-6xl font-bold  text-gray-900 leading-snug tracking-tight"
              >
                Transform Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  {" "}Expert ERP & Software Solutions
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed"
              >
                Unlock the full potential of{" "}
                <span className="font-semibold text-gray-900">IFS Cloud</span> and custom-built
                software tailored to your unique needs. From seamless integrations
                and custom modifications to optimized workflows — we’ve got the
                expertise to make it happen.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1 }}
                className="mt-10 flex justify-center"
              >
                <Link href={"/contact"}>
                <button className="group inline-flex items-center px-8 py-4 rounded-full border border-cyan-500 text-black font-medium  transition-transform transform hover:bg-black hover:text-white">
                  <span>Book a Consultation</span>
                  <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                </Link>
              </motion.div>
            </div>
          </Copy>
        </section>
        <Footer />
      </main>
    </ReactLenis>
  )
}
export default AboutPage
