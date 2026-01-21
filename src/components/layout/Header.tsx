"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, ShoppingCart, User, Menu as MenuIcon, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { useCartStore } from "@/store/cartStore"
import CartDrawer from "@/features/cart/CartDrawer"

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const items = useCartStore((state) => state.items)
  const totalItems = items.reduce((total, item) => total + item.quantity, 0)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
      
      // Update active section based on scroll position
      const sections = navigation.map(nav => nav.href.substring(1))
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-500",
          "py-3 sm:py-4 px-4 sm:px-6 lg:px-8",
          isScrolled ? "bg-[#f3f3f5] shadow-lg" : "bg-[#f3f3f5]/90 backdrop-blur-md"
        )}
        role="banner"
      >
        <nav className="container mx-auto max-w-7xl" aria-label="Main navigation">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="inline-block focus-ring rounded-lg" aria-label="Indian Restaurant Home">
                <Image
                  src="/logo.png"
                  alt="Indian Restaurant Logo"
                  width={80}
                  height={80}
                  className="h-10 sm:h-12 lg:h-14 w-auto transition-all duration-300"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center flex-1 gap-1 xl:gap-2">
              {navigation.map((item) => {
                const sectionId = item.href.substring(1)
                const isActive = activeSection === sectionId
                
                return (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "px-4 xl:px-6 py-2.5 text-sm xl:text-base font-medium transition-all duration-300 rounded-full",
                      "hover:text-orange-500 hover:shadow-[inset_8px_8px_12px_#e2e2e2,inset_-8px_-8px_12px_#ffffff]",
                      "focus:outline-none focus:ring-2 focus:ring-orange-500/30",
                      isActive && "text-orange-500 shadow-[inset_8px_8px_12px_#e2e2e2,inset_-8px_-8px_12px_#ffffff]"
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                  </button>
                )
              })}
            </div>

            {/* Search and Actions */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              {/* Search Input */}
              <input
                type="search"
                placeholder="Search"
                aria-label="Search menu"
                className="px-4 py-2.5 w-32 xl:w-40 text-sm border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
              />
              
              {/* Search Button */}
              <button 
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-orange-500 rounded-full shadow-[inset_8px_8px_12px_#e2e2e2,inset_-8px_-8px_12px_#ffffff] hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                aria-label="Search"
              >
                <Search className="h-5 w-5" aria-hidden="true" />
              </button>

              {/* Cart */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-orange-500 rounded-full shadow-[inset_8px_8px_12px_#e2e2e2,inset_-8px_-8px_12px_#ffffff] hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                aria-label={`Shopping cart with ${totalItems} items`}
              >
                <ShoppingCart className="h-5 w-5" aria-hidden="true" />
                <AnimatePresence mode="wait">
                  {totalItems > 0 && (
                    <motion.span
                      key={totalItems}
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.5, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 500, damping: 25 }}
                      className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold shadow-md"
                      aria-live="polite"
                    >
                      {totalItems}
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>

              {/* User */}
              <button 
                className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-orange-500 rounded-full shadow-[inset_8px_8px_12px_#e2e2e2,inset_-8px_-8px_12px_#ffffff] hover:scale-105 transition-transform focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                aria-label="User account"
              >
                <User className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-orange-500 rounded-full shadow-[inset_8px_8px_12px_#e2e2e2,inset_-8px_-8px_12px_#ffffff] hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/30"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <MenuIcon className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                id="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden mt-4 pt-4 border-t border-gray-300 overflow-hidden"
              >
                <nav aria-label="Mobile navigation">
                  <div className="flex flex-col gap-2 mb-4">
                    {navigation.map((item) => {
                      const sectionId = item.href.substring(1)
                      const isActive = activeSection === sectionId
                      
                      return (
                        <button
                          key={item.name}
                          onClick={() => handleNavClick(item.href)}
                          className={cn(
                            "px-4 py-3 min-h-[44px] text-center font-medium transition-all rounded-xl",
                            "hover:text-orange-500 hover:shadow-[inset_8px_8px_12px_#e2e2e2,inset_-8px_-8px_12px_#ffffff]",
                            "focus:outline-none focus:ring-2 focus:ring-orange-500/30",
                            isActive && "text-orange-500 shadow-[inset_8px_8px_12px_#e2e2e2,inset_-8px_-8px_12px_#ffffff]"
                          )}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.name}
                        </button>
                      )
                    })}
                  </div>
                </nav>
                
                {/* Mobile Actions */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <input
                    type="search"
                    placeholder="Search"
                    aria-label="Search menu"
                    className="flex-1 px-4 py-2.5 min-h-[44px] text-sm border border-gray-300 rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:border-orange-500 transition-all"
                  />
                  <button 
                    className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-orange-500 rounded-full shadow-[inset_8px_8px_12px_#e2e2e2,inset_-8px_-8px_12px_#ffffff] hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                    aria-label="Search"
                  >
                    <Search className="h-5 w-5" aria-hidden="true" />
                  </button>
                  <button 
                    onClick={() => setIsCartOpen(true)}
                    className="relative p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-orange-500 rounded-full shadow-[inset_8px_8px_12px_#e2e2e2,inset_-8px_-8px_12px_#ffffff] hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                    aria-label={`Shopping cart with ${totalItems} items`}
                  >
                    <ShoppingCart className="h-5 w-5" aria-hidden="true" />
                    {totalItems > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold shadow-md" aria-live="polite">
                        {totalItems}
                      </span>
                    )}
                  </button>
                  <button 
                    className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-orange-500 rounded-full shadow-[inset_8px_8px_12px_#e2e2e2,inset_-8px_-8px_12px_#ffffff] hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500/30"
                    aria-label="User account"
                  >
                    <User className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}