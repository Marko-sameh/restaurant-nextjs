import Image from "next/image"
import Link from "next/link"
import { Clock, Facebook, Instagram, Youtube, Github, MapPin, Mail, Phone } from "lucide-react"

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Menu", href: "#menu" },
  { name: "Gallery", href: "#gallery" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" }
]

const companyLinks = [
  { name: "Terms & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Cookie Policy", href: "#" }
]

const socialLinks = [
  { name: "Facebook", href: "#", icon: Facebook },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "YouTube", href: "#", icon: Youtube },
  { name: "GitHub", href: "#", icon: Github }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12 sm:py-16 lg:py-20" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4 sm:space-y-5">
            <Image
              src="/logo.png"
              alt="Indian Restaurant Logo"
              width={80}
              height={80}
              className="h-14 sm:h-16 lg:h-18 w-auto"
            />
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Experience authentic Indian cuisine with fresh ingredients and traditional recipes. 
              Creating memorable dining experiences since our establishment.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4" role="list" aria-label="Social media links">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 sm:w-11 sm:h-11 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                    aria-label={`Visit our ${social.name} page`}
                    role="listitem"
                  >
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Phone</p>
                  <a href="tel:+918866998866" className="text-gray-300 text-sm hover:text-orange-500 transition-colors">
                    +91 - 8866998866
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Email</p>
                  <a href="mailto:info@indianrestaurant.com" className="text-gray-300 text-sm hover:text-orange-500 transition-colors">
                    info@indianrestaurant.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Location</p>
                  <p className="text-gray-300 text-sm">123 Restaurant Street<br />Mumbai, Maharashtra 400001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4 sm:space-y-5">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Opening Hours</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Monday - Thursday</p>
                  <p className="text-gray-300 text-sm">9:00 AM - 10:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Friday - Sunday</p>
                  <p className="text-gray-300 text-sm">11:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <nav className="space-y-4 sm:space-y-5" aria-label="Footer navigation">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="block text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm sm:text-base focus:outline-none focus:text-orange-500 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 sm:mt-12 lg:mt-16 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm sm:text-base text-center sm:text-left">
              Copyright © {currentYear}{" "}
              <span className="text-orange-500 font-semibold">Marko Sameh</span>.
              All Rights Reserved.
            </p>
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6" aria-label="Legal links">
              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-orange-500 transition-colors text-xs sm:text-sm focus:outline-none focus:text-orange-500"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}