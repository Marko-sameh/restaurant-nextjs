"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function IntroScreen() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[99] flex items-center justify-center bg-black"
    >
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      >
        <source src="/images/Untitled video - Made with Clipchamp.mp4" type="video/mp4" />
      </video>
      
      <div className="intro-div text-center px-8 py-20 lg:py-32">
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-orange-500 text-4xl lg:text-6xl font-bold mb-8"
        >
          welcome
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 2, delay: 1.5 }}
          className="text-orange-500 text-4xl lg:text-6xl font-bold mb-8 lg:ml-48"
        >
          to
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="text-orange-500 text-4xl lg:text-6xl font-bold lg:ml-52"
        >
          our website
        </motion.p>
      </div>
    </motion.div>
  )
}