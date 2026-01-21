import IntroScreen from "@/components/sections/IntroScreen"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import HeroSection from "@/components/sections/HeroSection"
import BrandsSection from "@/components/sections/BrandsSection"
import AboutSection from "@/components/sections/AboutSection"
import MenuSection from "@/components/sections/MenuSection"
import FeaturedDishesSection from "@/components/sections/FeaturedDishesSection"
import GallerySection from "@/components/sections/GallerySection"
import TeamSection from "@/components/sections/TeamSection"
import TestimonialsSection from "@/components/sections/TestimonialsSection"
import FAQSection from "@/components/sections/FAQSection"
import BlogSection from "@/components/sections/BlogSection"
import Breadcrumb from "@/components/Breadcrumb"

export default function Home() {
  return (
    <>
      <IntroScreen />
      <Header />
      <main id="main-content" className="min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }]} />
        </div>
        <HeroSection />
        <BrandsSection />
        <AboutSection />
        <MenuSection />
        <FeaturedDishesSection />
        <GallerySection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  )
}
