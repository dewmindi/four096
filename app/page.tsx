"use client"

import type React from "react"
import { ReactLenis, useLenis } from "lenis/react";
import Homepage from "@/components/Homepage"
import Footer from "@/components/Footer"
import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Four096Website() {

  const lenis = useLenis(({ scroll }) => { });

  return (
    <ReactLenis root>
      <div className="min-h-screen bg-[#eeede8] font-sans">
        <Navbar/>
        <Homepage/>
        <Footer />
      </div>
    </ReactLenis>
  )
}
