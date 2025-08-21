import { ArrowDownRight, Award, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Expertise() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-12 space-y-24 font-sans">
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            {/* Text */}
            <div className="md:col-span-6 flex flex-col space-y-6 font-dm-sans">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Who We Are
              </h2>
              <p>
                                  We are a consulting service with professionals with over two
                  decades of experience in <span className="font-semibold text-gray-900">Software Development, Integration
                  and Consulting</span> specializing in business software.  
                  <br /><br />
                  Our team has deep expertise with <span className="font-semibold text-gray-900">IFS ERP Solutions</span>, 
                  delivering seamless modifications and integrations. We also provide
                  end-to-end <span className="font-semibold text-gray-900">custom software development</span>, ensuring your 
                  business vision transforms into a scalable reality.
              </p>

              {/* Stats / Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md ring-1 ring-slate-200"
                >
                  <Users className="h-8 w-8 text-cyan-600 mb-2" />
                  <h4 className="text-2xl font-bold text-slate-900">50+</h4>
                  <p className="text-sm text-slate-500">Clients Worldwide</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md ring-1 ring-slate-200"
                >
                  <Rocket className="h-8 w-8 text-cyan-600 mb-2" />
                  <h4 className="text-2xl font-bold text-slate-900">10+</h4>
                  <p className="text-sm text-slate-500">Years Experience</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-md ring-1 ring-slate-200"
                >
                  <Award className="h-8 w-8 text-cyan-600 mb-2" />
                  <h4 className="text-2xl font-bold text-slate-900">100+</h4>
                  <p className="text-sm text-slate-500">Projects Delivered</p>
                </motion.div>
              </div>
            </div>
                        {/* Image */}
            <div className="md:col-span-6 relative h-80 sm:h-[26rem] md:h-[32rem] rounded-3xl overflow-hidden shadow-xl group">
              <img
                src="/images/four0961.jpeg"
                alt="Team collaboration"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-6 left-6 text-white font-dm-sans"
              >
                <h3 className="text-2xl font-semibold">Innovation in Action</h3>
                <p className="text-sm text-white/80 mt-1">
                  Collaborating with businesses worldwide
                </p>
              </motion.div>
            </div>
          </motion.section>
        </main>
    </>
  );
}
