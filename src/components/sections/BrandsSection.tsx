"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const brands = [
  { id: 1, name: "Brand 1", image: "/images/brands/b1.png" },
  { id: 2, name: "Brand 2", image: "/images/brands/b2.png" },
  { id: 3, name: "Brand 3", image: "/images/brands/b3.png" },
  { id: 4, name: "Brand 4", image: "/images/brands/b4.png" },
  { id: 5, name: "Brand 5", image: "/images/brands/b5.png" },
]

export default function BrandsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
            Trusted by{" "}
            <span className="text-4xl text-orange-500 font-bold">70+</span>{" "}
            Companies
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  fill
                  className="object-contain transition-all duration-300 group-hover:brightness-75 group-hover:opacity-90"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}