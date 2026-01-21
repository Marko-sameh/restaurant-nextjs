"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Play, X, Award, Users, Clock } from "lucide-react"

export default function AboutSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const stats = [
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Happy Customers", value: "10K+" },
    { icon: Clock, label: "Daily Orders", value: "500+" }
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-semibold mb-4">
            About Us
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Discover Our <br />
            Restaurant Story
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-8 rounded-full"></div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Our journey began with a passion for authentic Indian cuisine and a commitment to using only the freshest ingredients. 
              We believe that great food brings people together, creating memorable experiences that last a lifetime. 
              Our skilled chefs combine traditional recipes with modern techniques to deliver exceptional flavors that celebrate 
              the rich culinary heritage of India.
            </p>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-orange-50 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/about.jpg"
              alt="Restaurant Interior"
              width={1000}
              height={600}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1000px"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
            
            {/* Video Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsVideoOpen(true)}
                className="bg-white/95 backdrop-blur-sm rounded-full p-6 lg:p-8 shadow-2xl hover:bg-white transition-all duration-300 group/btn focus-ring"
                aria-label="Play video"
              >
                <Play className="w-8 h-8 lg:w-12 lg:h-12 text-orange-500 ml-1 group-hover/btn:text-orange-600 group-hover/btn:scale-110 transition-all duration-300" />
              </motion.button>
            </div>
            
            {/* Video Label */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
              <span className="text-white font-semibold text-sm sm:text-lg bg-black/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                Watch Our Story
              </span>
            </div>
          </div>
        </motion.div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To serve authentic Indian cuisine that brings families and friends together, 
                creating unforgettable dining experiences with every meal.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most beloved Indian restaurant, known for our exceptional 
                food quality, warm hospitality, and commitment to tradition.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors p-2 rounded-full hover:bg-white/10 focus-ring"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <video
                controls
                autoPlay
                className="w-full h-auto max-h-[70vh]"
                poster="/images/about.jpg"
              >
                <source src="/images/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  )
}