// 

"use client";

import Copy from "@/components/copy";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReactLenis from "lenis/react";
import React, { useState } from "react";

// Next.js App Router page component
// Place this file at: app/contact/page.tsx
// Tailwind CSS is assumed. If you're not using Tailwind yet, run:
//   npm i -D tailwindcss postcss autoprefixer
//   npx tailwindcss init -p
//   (and wire it up per Tailwind docs)

export default function Page() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    jobTitle: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: wire to your API route (e.g., /api/contact) or a service like Formspree
    setSubmitted(true);
  }

  return (
    <ReactLenis root>
      <main className="min-h-screen flex flex-col bg-white text-slate-900 ">
        <Navbar />


        {/* Hero */}
        <section className="relative isolate sm:pt-32 md:pt-40 bg-gradient-to-b from-slate-50 to-white font-dm-sans ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 ">
            <Copy delay={0.5}>
              <p className="text-2xl sm:text-3xl font-bold tracking-tight">Get in touch</p>
              <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold">Book a Demo</h1>
              <p className="mt-4 max-w-2xl text-slate-600">
                Let’s change the way you handle inventory management
              </p>
            </Copy>


            <div className="mt-10 grid gap-10 lg:grid-cols-3 ">
              {/* Left: Form + value props */}
              <div className="lg:col-span-2">
                <div className="grid gap-8 md:grid-cols-2 ">
                  <form onSubmit={onSubmit} className="md:col-span-2 rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm bg-white">
                    <div className="grid gap-4 md:grid-cols-2 ">
                      <Copy delay={0.5}>
                        <div>
                          <label className="block text-sm font-medium">First Name<span className="text-rose-600">*</span></label>
                          <input required value={form.firstName} onChange={(e) => update("firstName", e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                        </div>
                      </Copy>
                      <Copy delay={0.5}>
                         <div>
                        <label className="block text-sm font-medium">Last Name<span className="text-rose-600">*</span></label>
                        <input required value={form.lastName} onChange={(e) => update("lastName", e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                      </div>
                      </Copy>
                     
                      <Copy delay={0.5}>
                                             <div>
                        <label className="block text-sm font-medium">Email<span className="text-rose-600">*</span></label>
                        <input type="email" required value={form.email} onChange={(e) => update("email", e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                      </div>
                      </Copy>
 
                      <Copy delay={0.5}>
                                              <div>
                        <label className="block text-sm font-medium">Phone</label>
                        <input value={form.phone} onChange={(e) => update("phone", e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                      </div>
                      </Copy>

                      <Copy delay={0.5}>
                                           <div>
                        <label className="block text-sm font-medium">Company Name<span className="text-rose-600">*</span></label>
                        <input required value={form.company} onChange={(e) => update("company", e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                      </div>
                      </Copy>
   
                      <Copy delay={0.5}>
                         <div>
                        <label className="block text-sm font-medium">Job Title</label>
                        <input value={form.jobTitle} onChange={(e) => update("jobTitle", e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                      </div>
                      </Copy>
                     
                      <Copy delay={0.5}>
                                              <div className="md:col-span-2">
                        <label className="block text-sm font-medium">Subject<span className="text-rose-600">*</span></label>
                        <select required value={form.subject} onChange={(e) => update("subject", e.target.value)} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400 bg-white">
                          <option value="">Please select...</option>
                          <option>General Enquiry</option>
                          <option>Career Opportunities</option>
                          <option>Technical Support</option>
                          <option>Partnership Opportunities</option>
                          <option>Press & Media</option>
                          <option>Other</option>
                        </select>
                      </div>
                      </Copy>

                      <Copy delay={0.5}>
                          <div className="md:col-span-2">
                        <label className="block text-sm font-medium">Message<span className="text-rose-600">*</span></label>
                        <textarea required value={form.message} onChange={(e) => update("message", e.target.value)} rows={6} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400" />
                      </div>
                      </Copy>
                    
                     
                    </div>
               
                    <Copy delay={0.5}>
                           <div className="mt-6 flex items-center justify-between gap-4">
                      <p className="text-xs text-slate-500">By submitting, you agree to our Terms & Privacy.</p>
                      <button type="submit" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-white font-medium hover:bg-slate-800">
                        Book a Demo
                      </button>
                    </div>
                      </Copy>
                    {submitted && (
                      <p className="mt-4 text-sm text-emerald-600">Thanks! We received your message and will get back to you shortly.</p>
                    )}
                  </form>

                  {/* Value props */}
                  <div className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white">
                    <h3 className="text-base font-semibold">Talk to an expert at WA Solutions to see how our innovative IMS software will help you</h3>
                    <ul className="mt-4 space-y-3 text-sm text-slate-700">
                      <li className="flex gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-slate-900" aria-hidden /> Reduce costs and streamline processes</li>
                      <li className="flex gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-slate-900" aria-hidden /> Adapt and scale with agility</li>
                      <li className="flex gap-3"><span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-slate-900" aria-hidden /> Make data-driven decisions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right: CTA card */}
              <aside className="lg:col-span-1">
                <div className="sticky top-24 rounded-2xl border border-slate-200 p-6 shadow-sm bg-white">
                  <p className="text-sm uppercase tracking-wider text-slate-500">Chat with an inventory expert</p>
                  <p className="mt-2 text-slate-700">Transform your inventory distribution process with innovative IMS software.</p>
                  <a href="#contact-form" className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-white font-medium hover:bg-slate-800">Book a Demo</a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer/>
      </main>
    </ReactLenis>
  );
}
