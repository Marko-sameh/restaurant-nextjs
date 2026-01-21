"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Phone, X } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {
//   Navigation,
//   Pagination,
//   Autoplay,
//   EffectCoverflow,
// } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";

const galleryImages = [
  {
    src: "/images/bt1.jpg",
    title: "Elegant Dining Area",
    description: "Experience fine dining in our beautifully designed space",
  },
  {
    src: "/images/bt2.jpg",
    title: "Private Dining Room",
    description: "Perfect for intimate gatherings and special occasions",
  },
  {
    src: "/images/bt3.jpg",
    title: "Chef's Special Corner",
    description: "Watch our master chefs create culinary masterpieces",
  },
  {
    src: "/images/bt4.jpg",
    title: "Outdoor Terrace",
    description: "Enjoy your meal under the stars in our garden terrace",
  },
];

export default function GallerySection() {
  // const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxImage(index);
    setIsLightboxOpen(true);
  };

  const nextLightboxImage = () => {
    setLightboxImage((prev) => (prev + 1) % galleryImages.length);
  };

  const prevLightboxImage = () => {
    setLightboxImage(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  // ------------------------
  const sliderRef = useRef<HTMLDivElement>(null);
  const currentSlide = useRef(0);
  const totalSlides = 8;
  const autoplayInterval = useRef<NodeJS.Timeout>(null);

  const images = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200",
    "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200",
    "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1200",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1200",
    "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1200",
  ];

  const goToSlide = (index: number) => {
    currentSlide.current = index;
    updateSlider();
    updatePagination();
  };

  const updateSlider = () => {
    if (sliderRef.current) {
      const slides = sliderRef.current.querySelectorAll(".slide");
      slides.forEach((slide, index) => {
        const offset = index - currentSlide.current;
        const el = slide as HTMLElement;

        if (offset === 0) {
          // الصورة الرئيسية في المنتصف
          el.style.transform = "translateX(0%) scale(1) translateZ(0px)";
          el.style.opacity = "1";
          el.style.zIndex = "3";
        } else if (offset === -1) {
          // الصورة على اليسار
          el.style.transform =
            "translateX(-85%) scale(0.75) translateZ(-200px) rotateY(15deg)";
          el.style.opacity = "0.5";
          el.style.zIndex = "2";
        } else if (offset === 1) {
          // الصورة على اليمين
          el.style.transform =
            "translateX(85%) scale(0.75) translateZ(-200px) rotateY(-15deg)";
          el.style.opacity = "0.5";
          el.style.zIndex = "2";
        } else {
          // باقي الصور مخفية
          el.style.transform =
            offset < 0
              ? "translateX(-100%) scale(0.5) translateZ(-400px)"
              : "translateX(100%) scale(0.5) translateZ(-400px)";
          el.style.opacity = "0";
          el.style.zIndex = "1";
        }
      });
    }
  };

  const nextSlide = () => {
    const next = (currentSlide.current + 1) % totalSlides;
    goToSlide(next);
  };

  const prevSlide = () => {
    const prev = (currentSlide.current - 1 + totalSlides) % totalSlides;
    goToSlide(prev);
  };

  const updatePagination = () => {
    const bullets = document.querySelectorAll(".pagination-bullet");
    bullets.forEach((bullet, index) => {
      if (index === currentSlide.current) {
        bullet.classList.add("active");
      } else {
        bullet.classList.remove("active");
      }
    });
  };

  useEffect(() => {
    updateSlider();
    autoplayInterval.current = setInterval(nextSlide, 3000);
    return () => {
      if (autoplayInterval.current) {
        clearInterval(autoplayInterval.current);
      }
    };
  }, []);

  return (
    <>
      <section id="gallery" className="section-padding bg-gray-50">
        <div className="container mx-auto container-padding">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 items-center mb-12 lg:mb-16 gap-8">
            <div className="hidden lg:flex justify-start">
              <Image
                src="/images/table-leaves-shape.png"
                alt="Decorative leaves"
                width={200}
                height={100}
                className="w-full max-w-xs opacity-60"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-block bg-orange-100 text-orange-600 px-6 py-2 rounded-full text-sm font-semibold mb-4">
                BOOK TABLE
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Visit Our Restaurant
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto rounded-full"></div>
            </motion.div>

            <div className="hidden lg:flex justify-end">
              <Image
                src="/images/table-leaves-shape.png"
                alt="Decorative leaves"
                width={200}
                height={100}
                className="w-full max-w-xs scale-x-[-1] opacity-60"
              />
            </div>
          </div>

          {/* Opening Hours and Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-center mb-12 lg:mb-16">
            {/* Monday to Thursday */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <p className="text-2xl font-bold text-gray-900">
                Monday To Thursday
              </p>
              <p className="text-lg text-gray-600">9:00 Am - 22:00 Pm</p>
            </motion.div>

            {/* Contact - Center with borders */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="border-l-0 lg:border-l-4 border-r-0 lg:border-r-4 border-gray-300 space-y-3"
            >
              <div className="w-[90px] h-[90px] mx-auto rounded-full flex items-center justify-center text-orange-500 text-5xl shadow-[10px_10px_14px_rgb(213,213,213),-10px_-10px_14px_rgb(239,239,239)]">
                <Phone className="w-12 h-12" />
              </div>
              <p className="text-2xl font-bold text-gray-900">
                +91 - 8866998866
              </p>
            </motion.div>

            {/* Friday to Sunday */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <p className="text-2xl font-bold text-gray-900">
                Friday To Sunday
              </p>
              <p className="text-lg text-gray-600">11:00 Am To 20:00 Pm</p>
            </motion.div>
          </div>

          {/* Image Gallery Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-10/12 mx-auto pt-[120px]"
          >
            {/* Gallery Slider - Coverflow Effect */}
            <div className="w-full px-4">
              <div className="slider-container mb-8">
                <div ref={sliderRef} className="slider-wrapper">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="slide"
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  ))}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mb-8 max-w-4xl mx-auto">
                <button
                  onClick={prevSlide}
                  className="nav-button"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={30} />
                </button>

                <div className="pagination">
                  {[...Array(totalSlides)].map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`pagination-bullet ${index === 0 ? "active" : ""}`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSlide}
                  className="nav-button nav-button-next"
                  aria-label="Next slide"
                >
                  <ChevronRight size={30} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {isLightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setIsLightboxOpen(false)}
            >
              <div
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors p-2 rounded-full hover:bg-white/10 focus-ring"
                  aria-label="Close lightbox"
                >
                  <X className="w-8 h-8" />
                </button>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <Image
                    src={galleryImages[lightboxImage].src}
                    alt={galleryImages[lightboxImage].title}
                    width={1000}
                    height={600}
                    className="w-full h-auto rounded-2xl shadow-2xl"
                    sizes="(max-width: 1024px) 90vw, 1000px"
                  />

                  {/* Navigation in lightbox */}
                  <button
                    onClick={prevLightboxImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all focus-ring"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  <button
                    onClick={nextLightboxImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all focus-ring"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>

                  {/* Image info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
                    <h3 className="text-white text-xl font-bold mb-2">
                      {galleryImages[lightboxImage].title}
                    </h3>
                    <p className="text-white/90">
                      {galleryImages[lightboxImage].description}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
