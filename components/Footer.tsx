import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X, Code, Users, Mail, Server, Cloud, Cpu, ArrowRight, Phone, MapPin, ArrowUpRight, Cross, CrossIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { id } from "date-fns/locale"
import Link from "next/link"

const Footer = () => {
  // State management for navigation and current page
  const [currentPage, setCurrentPage] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  // Navigation items
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Projects" },
  ]

  const socialLinks = [
    { id: "linkedin", label: "Linkedin" },
    { id: "instagram", label: "instagram" },
    { id: "facebook", label: "Facebook" },
    { id: "email", label: "Email" },
  ]

  // Handle navigation clicks
  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId)
    setMobileMenuOpen(false)
  }
  return (
    <footer className="bg-[#1a1c2d] text-white py-12 px-6 lg:px-20  rounded-3xl m-10 font-dm-sans bg-cover ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
        {/* Left Section: Chat with an inventory expert */}
        <div className="col-span-1 md:col-span-1 lg:col-span-2 flex flex-col justify-between ">
          <div>
            <h2 className="text-7xl font-semibold mb-4 leading-tight">
              Get in Touch <br></br>with <span className="text-cyan-500">Us</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Transforming businesses through expert consulting,<br></br> development, and integration services.
            </p>
            <a
              href="#"
              className="bg-cyan-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg inline-flex items-center group transition duration-300 ease-in-out mb-6"
            >
              Book a Consultation
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300 ease-in-out"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
          <div className="mt-12 md:mt-0 lg:mt-0"> {/* Adjust margin top for better spacing on smaller screens */}
            {/* <img src="/path/to/wa-solutions-logo.svg" alt="WA Solutions Logo" className="h-8" /> Replace with your logo path */}
            <Link href="/">
              <img src="images/wihte-four096.png" width={170} height={20} alt="FOUR096 Logo" />
            </Link>
          </div>
        </div>

        {/* Navigation Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-300 uppercase tracking-wider">Navigation</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Home</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">About</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Services</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-300 uppercase tracking-wider">Connect</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200 inline-flex items-center">
                {/* LinkedIn Icon - Replace with actual SVG or component */}
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.518-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200 inline-flex items-center">
                {/* Facebook Icon - Replace with actual SVG or component */}
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.844c-3.245 0-4.156 2.374-4.156 4.384v2.616z"></path>
                </svg>
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition duration-200 inline-flex items-center">
                {/* YouTube Icon - Replace with actual SVG or component */}
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.155.215-4.49 3.514-4.49 7.816 0 4.302 1.335 7.601 4.49 7.816 3.6.245 11.626.246 15.23 0 3.155-.215 4.49-3.515 4.49-7.816s-1.335-7.601-4.49-7.816zm-5.615 8.816l-4.5 2.5v-5l4.5 2.5z"></path>
                </svg>
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright and Legal Links */}
      <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <span>Copyright © Four096  {new Date().getFullYear()} </span>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.dewmindi.online/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-200">Website By Dew_Mindi</a>
          <a href="#" className="hover:text-white transition duration-200"></a>
        </div>
      </div>
    </footer>



  )
}

export default Footer
