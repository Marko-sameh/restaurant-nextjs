"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useResponsive } from "@/hooks/useResponsive"

export default function HeroSection() {
  const [showContent, setShowContent] = useState(false)
  const { isMobile } = useResponsive()
  
  // Create motion values for mouse position (disabled on mobile)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  // Create spring animations for smooth movement
  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 })
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 })
  
  // Transform values for parallax effect
  const berryX = useTransform(springX, [-0.5, 0.5], [-50, 50])
  const berryY = useTransform(springY, [-0.5, 0.5], [-50, 50])
  const leafX = useTransform(springX, [-0.5, 0.5], [30, -30])
  const leafY = useTransform(springY, [-0.5, 0.5], [30, -30])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 6000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isMobile) return
    
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) - 0.5
      const y = (e.clientY / window.innerHeight) - 0.5
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY, isMobile])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-24 lg:py-28 pt-24 sm:pt-28 lg:pt-16">
      {/* Parallax Background Elements - Hidden on mobile */}
      {!isMobile && (
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 2, delay: 1 }}
            style={{
              x: berryX,
              y: berryY
            }}
            className="absolute top-20 sm:top-28 right-0 pointer-events-none"
          >
            <Image
              src="/images/berry.png"
              alt=""
              width={150}
              height={150}
              className="blur-[3px] w-32 lg:w-[150px] opacity-60"
              loading="lazy"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 2, delay: 1.5 }}
            style={{
              x: leafX,
              y: leafY
            }}
            className="absolute top-40 sm:top-[270px] left-0 pointer-events-none"
          >
            <Image
              src="/images/leaf.png"
              alt=""
              width={410}
              height={410}
              className="blur-[6px] w-80 lg:w-[410px] opacity-40"
              loading="lazy"
            />
          </motion.div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center lg:text-left order-2 lg:order-1 space-y-6 lg:space-y-8"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-bold text-gray-900 leading-tight"
              style={{
                fontSize: "clamp(2rem, 5vw + 1rem, 2.5rem)"
              }}
            >
              Best Indian Restaurant in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                Mumbai
              </span>{" "}
              | Authentic Cuisine & Fresh Ingredients
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              style={{
                fontSize: "clamp(0.95rem, 2vw + 0.5rem, 1.25rem)"
              }}
            >
              Experience authentic Indian flavors crafted with love and traditional spices. 
              Our chefs bring you the finest dishes that celebrate the rich culinary heritage of India.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#menu"
                className="btn-primary inline-flex items-center justify-center group"
              >
                <span>Check Our Menu</span>
                <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" aria-hidden="true" />
              </Link>
              
              <button className="btn-secondary">
                Book a Table
              </button>
            </motion.div>
            
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={showContent ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="grid grid-cols-3 gap-4 sm:gap-6 pt-8 border-t border-gray-200 max-w-md mx-auto lg:mx-0"
            >
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">50+</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Dishes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">1000+</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500">5★</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">Rating</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={showContent ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-center order-1 lg:order-2"
          >
            <div className="relative max-w-lg mx-auto">
              <motion.div
                animate={{
                  borderRadius: [
                    "48% 52% 57% 43% / 34% 44% 56% 66%",
                    "62% 38% 64% 63% / 34% 55% 45% 66%",
                    "43% 57% 51% 49% / 33% 42% 58% 62%",
                    "40% 60% 43% 57% / 52% 32% 68% 48%",
                    "48% 52% 57% 43% / 34% 44% 56% 66%"
                  ]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="relative overflow-hidden shadow-2xl mx-auto w-64 h-64 sm:w-80 sm:h-80 lg:w-[33rem] lg:h-[30rem]"
              >
                <Image
                  src="/images/main-b.jpg"
                  alt="Delicious Indian Sushi Platter - Fresh ingredients and authentic flavors"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  quality={90}
                />
                
                {/* Floating Elements - Hidden on small mobile */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-white rounded-full p-2 sm:p-3 shadow-lg"
                  aria-hidden="true"
                >
                  <span className="text-xl sm:text-2xl">🍛</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white rounded-full p-2 sm:p-3 shadow-lg"
                  aria-hidden="true"
                >
                  <span className="text-xl sm:text-2xl">🌶️</span>
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={showContent ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-6 text-center"
              >
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">Authentic Indian Sushi</h2>
                <p className="text-gray-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed px-4">
                  Fresh ingredients combined with traditional techniques to create 
                  an unforgettable dining experience.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={showContent ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-gray-400 hover:text-orange-500 transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500/30 rounded-lg p-2"
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll to about section"
        >
          <span className="text-sm mb-2 hidden sm:block">Scroll Down</span>
          <ArrowDown className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      </motion.div>
    </section>
  )
}