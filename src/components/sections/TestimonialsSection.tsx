"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const testimonials = [
  {
    id: 1,
    name: "Nilay Hirpara",
    image: "/images/testimonials/t1.jpg",
    rating: "/images/4star.png",
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nostrum!"
  },
  {
    id: 2,
    name: "Ravi Kumawat",
    image: "/images/testimonials/t2.jpg", 
    rating: "/images/five-stars.png",
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nostrum!"
  },
  {
    id: 3,
    name: "Navnit Kumar",
    image: "/images/testimonials/t3.jpg",
    rating: "/images/five-stars.png", 
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nostrum!"
  },
  {
    id: 4,
    name: "Somyadeep Bhowmik",
    image: "/images/testimonials/t4.jpg",
    rating: "/images/4star.png",
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, nostrum!"
  }
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-semibold mb-4">
            WHAT THEY SAY
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our Customers <br />
            Say About Us
          </h2>
          
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonial Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <Image
              src="/images/testimonial-img.png"
              alt="Happy customers"
              width={500}
              height={400}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Testimonials Grid */}
          <div className="order-1 lg:order-2 grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="card-neumorphic p-6"
              >
                {/* Header with image and rating */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-20 h-20 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-shrink-0">
                    <Image
                      src={testimonial.rating}
                      alt="Rating"
                      width={60}
                      height={12}
                      className="w-auto h-3"
                    />
                  </div>
                </div>

                {/* Name and Comment */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {testimonial.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {testimonial.comment}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}