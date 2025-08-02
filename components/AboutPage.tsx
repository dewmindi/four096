import type React from "react"
import { useState, useEffect } from "react"
import { Menu, X, Code, Users, Mail, Server, Cloud, Cpu, ArrowRight, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ReactLenis,useLenis} from "lenis/react";

const AboutPage = () => {
  return (
    <div id="about" className="min-h-screen py-20 bg-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">About Four096 Solutions</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your trusted partner in digital transformation and business innovation
              </p>
            </div>
    
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Professional team"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Expertise</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We are a consulting service with professionals with over 2 decades of experience in Software Development,
                  Integration and Consulting specializing in business software.
                </p>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  We have extensive experience in development on top of IFS ERP Solutions, including modifications and
                  integration with various platforms.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  In addition, we provide services for Software Development, Integration, Implementations to fulfil your
                  business needs from inception to delivery.
                </p>
              </div>
            </div>
    
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            </div>
          </div>
        </div>
  )
}
export default AboutPage
