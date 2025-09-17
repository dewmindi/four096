"use client"

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
      // "IFS Cloud Implementation",
      // "Custom Modifications",
      // "Platform Integration",
      // "Business Process Optimization",
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
      "/images/four0964.jpeg",
    subservices: [
      // "IFS Cloud Implementation",
      // "Custom Modifications",
      // "Platform Integration",
      // "Business Process Optimization",
    ],
    cta: "Get Started",
  },
]

export default function ServicePage() {
  return (
    <ReactLenis root>
      {/* Subtle SaaS background with soft gradient */}
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 text-slate-800 font-dm-sans">
        <Navbar />
        {/* Decorative gradient blob */}
                  <div className="absolute inset-0 pointer-events-none">
            <div className="h-72 w-72 md:h-96 md:w-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-indigo-300 via-sky-200 to-emerald-200 absolute right-0 " />
          </div>
        {/* Hero */}
        <header className="relative">

<div className=" inset-0 pointer-events-none">
            {/* Decorative gradient blob */}
            <div className="h-64 w-64 md:h-96 md:w-96 rounded-full blur-3xl opacity-40 bg-gradient-to-tr from-indigo-300 via-sky-200 to-emerald-200 absolute top-0" />
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

            </Copy>
          </div>

        </header>

        {/* Sections */}
        <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24 space-y-16 md:space-y-24">
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
        </div>

        <Footer />
      </main>
    </ReactLenis>
  )
}

