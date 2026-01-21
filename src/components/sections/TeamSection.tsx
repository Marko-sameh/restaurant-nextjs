"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const teamMembers = [
  {
    id: 1,
    name: "Nilay Hirpara",
    image: "/images/chef/c1.jpg",
    socialLinks: {
      facebook: "#",
      instagram: "#", 
      youtube: "#"
    }
  },
  {
    id: 2,
    name: "Ravi Kumawat", 
    image: "/images/chef/c2.jpg",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      youtube: "#"
    }
  },
  {
    id: 3,
    name: "Navnit Kumar",
    image: "/images/chef/c3.jpg", 
    socialLinks: {
      facebook: "#",
      instagram: "#",
      youtube: "#"
    }
  },
  {
    id: 4,
    name: "Pranav Badgal",
    image: "/images/chef/c4.jpg",
    socialLinks: {
      facebook: "#",
      instagram: "#", 
      youtube: "#"
    }
  },
  {
    id: 5,
    name: "Priyotosh Dey",
    image: "/images/chef/c5.jpg",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      youtube: "#"
    }
  }
]

export default function TeamSection() {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)

  return (
    <section className="py-20 bg-white overflow-hidden">
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
            OUR TEAM
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Chefs
          </h2>
          
          <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Team Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={2000}
          pagination={{
            el: '.team-swiper-pagination',
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1.2,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          onSwiper={setSwiperInstance}
          className="team-swiper mb-5"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="p-5 rounded-[30px] bg-gradient-to-br from-[#ececec] to-white shadow-[28px_28px_45px_#e6e6e6,-28px_-28px_45px_#ffffff] text-center transition-all duration-[800ms] hover:scale-[1.03]"
                style={{ transitionTimingFunction: 'cubic-bezier(0.22, 0.78, 0.45, 1.02)' }}
              >
                {/* Chef Image */}
                <div className="relative w-full h-[480px] mb-5 rounded-[20px] overflow-hidden shadow-[9px_9px_18px_rgba(194,194,194,0.5),-9px_-9px_18px_rgba(255,255,255,0.5)]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Chef Name */}
                <h3 className="text-xl font-semibold text-gray-900 mb-4 capitalize">
                  {member.name}
                </h3>

                {/* Social Links */}
                <div className="flex justify-center space-x-1.5 my-4">
                  <a
                    href={member.socialLinks.facebook}
                    className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#e6e6e6] to-white shadow-[4px_4px_8px_#d0d0d0,-4px_-4px_8px_#ffffff] text-gray-900 text-lg hover:bg-orange-500 hover:text-white transition-all duration-200"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href={member.socialLinks.instagram}
                    className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#e6e6e6] to-white shadow-[4px_4px_8px_#d0d0d0,-4px_-4px_8px_#ffffff] text-gray-900 text-lg hover:bg-orange-500 hover:text-white transition-all duration-200"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href={member.socialLinks.youtube}
                    className="w-[50px] h-[50px] flex items-center justify-center rounded-full bg-gradient-to-br from-[#e6e6e6] to-white shadow-[4px_4px_8px_#d0d0d0,-4px_-4px_8px_#ffffff] text-gray-900 text-lg hover:bg-orange-500 hover:text-white transition-all duration-200"
                  >
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
