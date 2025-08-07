"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X, Code, Users, Mail, Server, Cloud, Cpu, ArrowRight, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ReactLenis,useLenis} from "lenis/react";
import Homepage from "@/components/Homepage"
import AboutPage from "@/components/AboutPage"
import ServicePage from "@/components/ServicePage"
import ContactPage from "@/components/ContactPage"
import Footer from "@/components/Footer"

export default function Four096Website() {

  const lenis = useLenis(({scroll})=>{});

  // State management for navigation and current page
  const [currentPage, setCurrentPage] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Hero images for the image slider
  const heroImages = [
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
    "/placeholder.svg?height=600&width=1200",
  ]

  // Auto-rotate hero images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  // Navigation items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
  ]

  // Handle navigation clicks
  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId)
    setMobileMenuOpen(false)
  }

  // Navigation Component
  const Navigation = () => (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-2">
            {/* <h1 className="text-lg font-bold text-gray-900">FOUR096.COM</h1> */}
            <img
            src="images/four096.png"
            width={170}
            height={20}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-2 border">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  currentPage === item.id ? "bg-cyan-500 text-white shadow-md" : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("contact")}
              className="bg-cyan-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-lg"
            >
              Contact →
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-white/90 backdrop-blur-sm rounded-full p-3 text-gray-700 hover:text-green-600"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    currentPage === item.id ? "bg-green-500 text-white" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("contact")}
                className="block w-full text-left px-4 py-3 rounded-xl text-base font-medium bg-green-500 text-white mt-2"
              >
                Contact →
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )

  {<Homepage/>}

  // About Page Component
  {<AboutPage/>}

  // Services Page Component
  {<ServicePage/>}
  // Contact Page Component
  {<ContactPage/>}

  // Footer Component
  {<Footer/>}

  // Main render function that displays the current page
  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <Homepage />
      case "about":
        return <AboutPage />
      case "services":
        return <ServicePage />
      case "contact":
        return <ContactPage />
      default:
        return <Homepage />
    }
  }

  return (
    <ReactLenis root>
    <div className="min-h-screen bg-white font-sans">
      <Navigation />
      <main>{renderCurrentPage()}</main>
      <Footer />
    </div>
    </ReactLenis>
  )
}
