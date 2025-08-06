import { ArrowUpRight } from 'lucide-react';
import styles from './ContactRef.module.css';
import Copy from './copy';

export default function ContactRef() {
  return (
     <section className={`bg-[#eeede8] py-32 px-4 md:px-8 relative ${styles.dividerContainer}`}>
      <div className="text-gray-400 opacity-50 z-20 flex items-start justify-start text-4xl    font-thin ">
        +
      </div>
      <Copy delay={0.5}>
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
        </div>
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

