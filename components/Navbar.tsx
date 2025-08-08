"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState } from "react"
import { Menu, X } from "lucide-react"

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname() // Get the current route

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
  ]

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="bg-white/90 backdrop-blur-sm rounded-full px-6 py-2">
            <Link href="/">
              <img src="images/four096.png" width={170} height={20} alt="FOUR096 Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-2 py-2 border font-dm-sans">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className={`px-6 py-3 font-dm-sans rounded-full font-medium transition-all duration-200 shadow-lg ${
                pathname === "/contact"
                  ? "bg-cyan-500 text-white"
                  : "bg-cyan-500 hover:bg-cyan-600 text-white"
              }`}
            >
              Contact →
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-white/90 backdrop-blur-sm rounded-full p-3 text-gray-700 hover:tebg-cyan-600"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-cyan-500 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              })}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium mt-2 ${
                  pathname === "/contact"
                    ? "bg-cyan-500 text-white"
                    : "bg-cyan-500 text-white"
                }`}
              >
                Contact →
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

