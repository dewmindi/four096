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
    {id: "linkedin", label:"Linkedin"},
    {id: "instagram", label:"instagram"},
    {id: "facebook", label:"Facebook"},
    {id: "email", label:"Email"},
  ]

    // Handle navigation clicks
  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId)
    setMobileMenuOpen(false)
  }
  return (
// {/* <footer className="bg-black text-white pt-12 font-dm-sans ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className=" text-sm mb-4 ">Website by <Link href={"https://www.dewmindi.online/"}     target="_blank" 
//     rel="noopener noreferrer"><span className="underline">Dew_Mindi</span></Link></h3>
//             {/* <p className="text-gray-300 leading-relaxed">
//               Transforming businesses through expert consulting, development, and integration services.
//             </p> */}
//           </div>
//           <div>
            
//             <ul className="space-y-2 text-4xl">
//               {socialLinks.map((item) => (
//                 <li key={item.id}>
//                   <button
//                     onClick={() => handleNavClick(item.id)}
//                     className="text-gray-300 hover:text-white transition-colors duration-200"
//                   >
//                     {item.label}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//             <p className="text-gray-300 text-sm text-transform: uppercase">
//               Copyright © {new Date().getFullYear()} Four096 Solutions. All rights reserved.
//             </p>
//         </div>
//           {/* <div className="border-t border-gray-700 mt-8 pt-8 text-center">
//             <p className="text-gray-300">
//               Copyright © {new Date().getFullYear()} Four096 Solutions. All rights reserved.
//             </p>
//           </div> */}
//       </div>
//     </footer> */}
<footer className="bg-slate-950 text-white pt-12 pb-1 ">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-4  items-end"> {/* items-end aligns bottom */}
      
      {/* Website credit */}
      <div>
        <h3 className="text-sm text-cyan-500">
          Website by{" "}
          <Link
            href="https://www.dewmindi.online/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="underline">Dew_Mindi</span>
          </Link>
        </h3>
      </div>

      {/* Social links */}
      {/* <div>
        <ul className="space-y-2 text-5xl">
          {socialLinks.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                 <span className=""><ArrowUpRight /></span>
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div> */}
      <div>
  <ul className="space-y-2 text-5xl">
    {socialLinks.map((item) => (
      <li key={item.id} className="group overflow-hidden">
        <button
          onClick={() => handleNavClick(item.id)}
          data-cursor="hover"                      /* <-- important for the cursor */
          className="flex items-center text-gray-300 hover:text-cyan-500 transition-colors duration-300"
        >
          {/* Arrow that slides in from left */}
          <span className="inline-block opacity-0 -translate-x-6 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0">
            <ArrowUpRight />
          </span>

          {/* Label that shifts right to make room for arrow */}
          <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-2 ml-3">
             <span className="text-md mr-1">x</span>{item.label}
          </span>
        </button>
      </li>
    ))}
  </ul>
</div>


      {/* Copyright text */}
      <div className="md:col-span-2 flex justify-end items-end">
        <p className="text-cyan-500 text-sm uppercase whitespace-nowrap">
          Copyright © Four096  {new Date().getFullYear()} 
        </p>
      </div>

    </div>
  </div>
</footer>

  )
}

export default Footer
