"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const blogPosts = [
  {
    id: 1,
    title: "Energy Drink which you can make at home.",
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.",
    image: "/images/blog/blog1.jpg",
    lastUpdated: "Last updated 3 mins ago"
  },
  {
    id: 2,
    title: "Fresh Veggie and rice combo for dinner.",
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.",
    image: "/images/blog/blog2.jpg", 
    lastUpdated: "Last updated 3 mins ago"
  },
  {
    id: 3,
    title: "Chicken burger with double nugget",
    excerpt: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ipsa explicabo atque reprehenderit beatae! Accusantium soluta consequuntur blanditiis amet ad.",
    image: "/images/blog/blog3.jpg",
    lastUpdated: "Last updated 3 mins ago"
  }
]

export default function BlogSection() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section 
      id="blog"
      className="section-padding bg-white"
      style={{
        backgroundImage: "url('/images/blog-pattern-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
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
            OUR BLOG
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Latest Publications
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card-neumorphic overflow-hidden cursor-pointer group"
            >
              <div className="flex flex-col sm:flex-row h-full">
                <div className="w-full sm:w-1/3 h-48 sm:h-auto">
                  <Image
                    src={post.image}
                    alt={`${post.title} - Blog post`}
                    width={150}
                    height={200}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 640px) 100vw, 150px"
                    loading="lazy"
                  />
                </div>
                <div className="w-full sm:w-2/3 p-4 sm:p-6 flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 sm:mb-4 flex-1 line-clamp-2 sm:line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    <span className="text-xs text-gray-500">
                      {post.lastUpdated}
                    </span>
                    <button 
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      aria-label={`Read more about ${post.title}`}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden max-w-4xl mx-auto"
        >
          <Image
            src="/images/news.jpg"
            alt="Newsletter subscription background"
            width={800}
            height={400}
            className="w-full h-64 sm:h-80 lg:h-96 object-cover brightness-50"
            sizes="(max-width: 1024px) 100vw, 800px"
            loading="lazy"
          />
          
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
            <div className="text-center text-white w-full max-w-2xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
                Subscribe Our Newsletter
              </h3>
              <p className="text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 opacity-90">
                Stay updated with our latest recipes and special offers
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-0 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Email address for newsletter"
                  className="flex-1 px-4 sm:px-6 py-3 rounded-full sm:rounded-l-full sm:rounded-r-none text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-full sm:rounded-l-none sm:rounded-r-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
                  aria-label="Subscribe to newsletter"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}