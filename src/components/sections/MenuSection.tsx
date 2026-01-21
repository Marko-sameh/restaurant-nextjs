"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Plus } from "lucide-react"
import { MenuItem } from "@/types"
import { useCartStore } from "@/store/cartStore"

const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Fresh Chicken Veggies",
    description: "Fresh ingredients with traditional spices and aromatic herbs",
    price: "188 EG",
    calories: 120,
    rating: 5,
    image: "/images/dish/1.png",
    category: "breakfast",
    type: "non-veg",
    persons: 2,
    cookTime: "15 min"
  },
  {
    id: "2",
    name: "Grilled Chicken",
    description: "Perfectly grilled with aromatic herbs and special sauce",
    price: "135 EG",
    calories: 120,
    rating: 4.3,
    image: "/images/dish/2.png",
    category: "breakfast",
    type: "non-veg",
    persons: 2,
    cookTime: "20 min"
  },
  {
    id: "3",
    name: "Paneer Noodles",
    description: "Delicious vegetarian noodles with fresh paneer cubes",
    price: "73 EG",
    calories: 120,
    rating: 4,
    image: "/images/dish/3.png",
    category: "lunch",
    type: "veg",
    persons: 2,
    cookTime: "12 min"
  },
  {
    id: "4",
    name: "Chicken Noodles",
    description: "Spicy chicken noodles with vegetables and special sauce",
    price: "143 EG",
    calories: 120,
    rating: 4.5,
    image: "/images/dish/4.png",
    category: "lunch",
    type: "non-veg",
    persons: 2,
    cookTime: "18 min"
  },
  {
    id: "5",
    name: "Bread Boiled Egg",
    description: "Healthy breakfast option with fresh bread and eggs",
    price: "37 EG",
    calories: 120,
    rating: 5,
    image: "/images/dish/5.png",
    category: "dinner",
    type: "non-veg",
    persons: 2,
    cookTime: "8 min"
  },
  {
    id: "6",
    name: "Immunity Dish",
    description: "Boost your immunity with this special nutritious dish",
    price: "60 EG",
    calories: 120,
    rating: 5,
    image: "/images/dish/6.png",
    category: "dinner",
    type: "veg",
    persons: 2,
    cookTime: "10 min"
  }
]

const categories = [
  { id: "all", name: "All", icon: "/images/menu-1.png", count: menuItems.length },
  { id: "breakfast", name: "Breakfast", icon: "/images/menu-2.png", count: menuItems.filter(item => item.category === "breakfast").length },
  { id: "lunch", name: "Lunch", icon: "/images/menu-3.png", count: menuItems.filter(item => item.category === "lunch").length },
  { id: "dinner", name: "Dinner", icon: "/images/menu-4.png", count: menuItems.filter(item => item.category === "dinner").length }
]

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const addItem = useCartStore((state) => state.addItem)

  const filteredItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <section 
      id="menu" 
      className="section-padding bg-gray-50"
      style={{
        backgroundImage: "url('/images/menu-bg.png')",
        backgroundSize: "contain",
        backgroundRepeat: "repeat"
      }}
    >
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-semibold mb-4">
            Our Menu
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Wake Up Early,<br />
            Eat Fresh & Healthy
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
          
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted menu featuring authentic Indian dishes 
            made with the finest ingredients and traditional recipes.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12 lg:mb-16">
          <div className="inline-block rounded-[60px] bg-gradient-to-br from-[#ececec] to-white shadow-[28px_28px_55px_#d4d4d4,-28px_-28px_55px_#ffffff] p-2">
            <ul className="flex space-x-1 list-none m-0 p-0">
              {categories.map((category) => (
                <li key={category.id}>
                  <motion.button
                    onClick={() => setActiveCategory(category.id)}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 sm:space-x-3 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-[30px] transition-all duration-1000 whitespace-nowrap ${
                      activeCategory === category.id
                        ? "bg-orange-500 text-white"
                        : "text-gray-600 hover:text-orange-600"
                    }`}
                  >
                    <Image
                      src={category.icon}
                      alt={category.name}
                      width={32}
                      height={32}
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                    <span className="font-medium text-sm sm:text-base lg:text-lg capitalize">{category.name}</span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="mx-auto max-w-7xl mt-12 sm:mt-16 lg:mt-[15%]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-32 sm:gap-y-36 lg:gap-y-[15%] justify-items-center"
            >
              {filteredItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.1,
                    ease: [0.22, 0.78, 0.45, 1.02]
                  }}
                  className="w-full max-w-[417px] aspect-[417/563] rounded-[30px] bg-gradient-to-br from-[#ececec] to-white shadow-[28px_28px_45px_#d4d4d4,-28px_-28px_45px_#ffffff] p-0 pb-[30px] px-[30px] hover:shadow-none transition-shadow duration-800"
                >
                  {/* Dish Image */}
                  <div className="-mt-[25%] sm:-mt-[23%] mb-[30px] flex justify-center">
                    <Image
                      src={item.image}
                      alt={`${item.name} - ${item.description}`}
                      width={280}
                      height={280}
                      className="rounded-full w-[70%] mx-auto"
                      sizes="(max-width: 640px) 196px, (max-width: 1024px) 196px, 280px"
                      loading="lazy"
                    />
                  </div>

                  {/* Rating */}
                  <p className="text-center mb-4" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                    {item.rating} <Star className="inline w-4 h-4 fill-yellow-500 text-yellow-500" aria-hidden="true" />
                  </p>

                  {/* Dish Name */}
                  <div className="mb-5">
                    <h3 className="text-center font-bold text-xl sm:text-2xl">
                      {item.name}
                    </h3>
                  </div>

                  {/* Calories */}
                  <div className="text-center mb-5">
                    <p className="text-sm sm:text-base">{item.calories} calories</p>
                  </div>

                  {/* Details */}
                  <div className="flex justify-between mx-2 pb-4 border-b border-gray-300 text-sm sm:text-base">
                    <div className="flex-1 pr-4">
                      <p className="mb-1 text-gray-600">Type</p>
                      <p className="mb-1 capitalize font-medium">{item.type}</p>
                    </div>
                    <div className="w-px border-r border-gray-300"></div>
                    <div className="flex-1 text-right pl-4">
                      <p className="mb-1 text-gray-600">Persons</p>
                      <p className="mb-1 font-medium">{item.persons}</p>
                    </div>
                  </div>

                  {/* Price and Add Button */}
                  <div className="flex justify-between items-center mt-4">
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-900">{item.price}</p>
                    </div>
                    <div className="text-right">
                      <motion.button
                        onClick={() => addItem(item)}
                        whileTap={{ scale: 0.9 }}
                        className="bg-orange-500 rounded-[25%] p-2 px-3 hover:bg-orange-600 transition-colors focus:outline-none focus:ring-4 focus:ring-orange-500/20"
                        aria-label={`Add ${item.name} to cart`}
                      >
                        <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-white" aria-hidden="true" />
                      </motion.button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* View All Menu Button */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <button className="btn-secondary">
            View Full Menu
          </button>
        </motion.div> */}
      </div>
    </section>
  )
}