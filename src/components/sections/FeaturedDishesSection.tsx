"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const featuredDishes = [
  {
    id: 1,
    name: "Chicken Pepperoni",
    image: "/images/pizza.png",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti maxime quam, id iste ipsam rem aspernatur! Maxime praesentium quos explicabo est quibusdam quas! Fuga delectus ratione possimus modi architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, animi suscipit? Labore, qui, reprehenderit quaerat aut, voluptates consequuntur architecto quis facere nam inventore nesciunt rem illum earum molestiae eligendi cupiditate.",
    additionalText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum eius nihil velit laudantium eveniet odio voluptate cumque inventore, natus, aspernatur, debitis alias perferendis assumenda harum consequuntur optio possimus nemo?",
    imageLeft: false
  },
  {
    id: 2,
    name: "Sushi",
    image: "/images/sushi.png", 
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti maxime quam, id iste ipsam rem aspernatur! Maxime praesentium quos explicabo est quibusdam quas! Fuga delectus ratione possimus modi architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, animi suscipit? Labore, qui, reprehenderit quaerat aut, voluptates consequuntur architecto quis facere nam inventore nesciunt rem illum earum molestiae eligendi cupiditate.",
    additionalText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum eius nihil velit laudantium eveniet odio voluptate cumque inventore, natus, aspernatur, debitis alias perferendis assumenda harum consequuntur optio possimus nemo?",
    imageLeft: true
  }
]

export default function FeaturedDishesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        {featuredDishes.map((dish, index) => (
          <motion.div
            key={dish.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${
              index === featuredDishes.length - 1 ? "mb-0" : ""
            }`}
          >
            {/* Image */}
            <div className={`text-center ${dish.imageLeft ? "lg:order-1" : "lg:order-2"}`}>
              <Image
                src={dish.image}
                alt={`${dish.name} - Featured dish`}
                width={500}
                height={400}
                className="w-full max-w-md lg:max-w-lg mx-auto h-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className={`${dish.imageLeft ? "lg:order-2" : "lg:order-1"}`}>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                {dish.name}
              </h2>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                {dish.description}
              </p>
              
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                {dish.additionalText}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}