import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X, Code, Users, Mail, Server, Cloud, Cpu, ArrowRight, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ReactLenis,useLenis} from "lenis/react";

const ServicePage = () => {
      // State management for navigation and current page
      const [currentPage, setCurrentPage] = useState("home")
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
      const [currentImageIndex, setCurrentImageIndex] = useState(0);

        const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId)
    setMobileMenuOpen(false)
  }


  return (
     <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to drive your business forward
          </p>
        </div>

        <div className="space-y-16">
          {/* ERP Consulting Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-12">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Server className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">ERP Consulting</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  We provide consulting, development and integration services on top of IFS Cloud with professionals
                  with extensive experience on IFS platform.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    IFS Cloud Implementation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Custom Modifications
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Platform Integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    Business Process Optimization
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="ERP Consulting"
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>

          {/* Software Development Section */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-12 flex items-center justify-center lg:order-1">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Software Development"
                  className="rounded-lg shadow-md"
                />
              </div>
              <div className="p-12 lg:order-2">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <Code className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Software Development</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Custom Software development services specialized with Java / React / Node.Js backend with managed
                  deployments on AWS Cloud.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Java Backend Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    React Frontend Applications
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    Node.js API Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    AWS Cloud Deployment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can help transform your business with our expert solutions
          </p>
          <Button
            onClick={() => handleNavClick("contact")}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full"
          >
            Contact Us Today
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ServicePage
