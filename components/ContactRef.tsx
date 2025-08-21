import { ArrowUpRight } from 'lucide-react';
import styles from './ContactRef.module.css';
import Copy from './copy';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ContactRef() {
  return (
    <section className={`bg-gradient-to-b from-slate-50 to-slate-100 py-32 px-4 md:px-8 relative ${styles.dividerContainer}`}>
      <div className="text-gray-400 opacity-50 z-20 flex items-start justify-start text-4xl    font-thin ">
        +
      </div>
      {/* <Copy delay={0.5}>
        <div>
          <h1 className="text-black text-5xl font-dm-sans">
            Let's start a conversation that turns<br></br>
            ambition into action.
          </h1>
        </div>
      </Copy>
      <div className="">
        <button className="mt-10 align-middle p-6 text-black  border border-cyan-500 rounded-full flex hover:bg-cyan-500 hover:scale-110">
          <span className="">Let's Talk</span>
          <span className=""><ArrowUpRight /></span>
        </button>
      </div> */}
      <Copy  >
        <div className=" relative max-w-5xl mx-auto text-center font-dm-sans">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold  text-gray-900 leading-snug tracking-tight"
          >
            Let's start a conversation that turns

            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              {" "} ambition into action.
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
            <Link href={"/contact"} >
            <button className="group inline-flex items-center px-8 py-4 rounded-full border border-cyan-500 text-black font-medium  transition-transform transform hover:bg-black hover:text-white">
              <span>Let's Talk</span>
              <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </Link>
          </motion.div>
        </div>
      </Copy>
    </section>
  );
}

// // components/ContactRef.js
// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import { ArrowUpRight } from 'lucide-react';
// import styles from './ContactRef.module.css';

// const ContactRef = () => {
//   return (
//     <section className={`group relative bg-gradient-to-br from-gray-50 to-gray-200 py-32 px-4 md:px-8 min-h-96 grid grid-cols-12 grid-rows-6 place-items-center ${styles.dividerContainer}`}>
      
//       {/* "Fog" Overlay that vanishes on hover */}
//       <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
      
//       {/* The large "+" on the grid */}
//       <div className="text-gray-400 opacity-50 z-20 flex items-center justify-center text-8xl font-thin col-start-2 col-span-2 row-start-2 row-end-3">
//         +
//       </div>

//       {/* Main Content */}
//       <div className="relative z-20 text-center flex flex-col items-center justify-center col-start-4 col-span-6 row-start-2 row-end-6">
//         <h2 className="text-4xl md:text-6xl font-extralight leading-tight text-white group-hover:text-gray-700 transition-colors duration-500">
//           Let's start a conversation that turns
//           <br />
//           <span className="font-medium">ambition into action.</span>
//         </h2>
        
//         <Link href="/contact" passHref className="mt-12 inline-flex items-center space-x-4 px-6 py-3 border border-gray-400 rounded-full font-medium text-white group-hover:text-gray-700 transition-colors duration-500 hover:bg-gray-200">
//           <span>LET'S TALK</span>
//           <ArrowUpRight />
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default ContactRef;

