import { Instagram, Facebook, Twitter } from "lucide-react"
import { Link } from "react-router"

export default function Footer() {
  const categories = [
    { name: "Men", href: "/collections/men" },
    { name: "Women", href: "/collections/women" },
    { name: "New Arrivals", href: "/collections/new-arrivals" },
    { name: "Sale", href: "/collections/sale" },
  ]

  const company = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Press", href: "/press" },
  ]

  const help = [
    { name: "Contact Us", href: "/contact" },
    { name: "Shipping & Returns", href: "/shipping-returns" },
    { name: "Size Guide", href: "/size-guide" },
    { name: "FAQs", href: "/faqs" },
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-light mb-6">StyleIn</h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Elevate your everyday style with our thoughtfully designed clothing that combines quality, comfort, and
              timeless design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Shop</h3>
            <ul className="space-y-2">              {categories.map((category, index) => (
                <li key={index}>
                  <Link to={category.href} className="text-gray-600 hover:text-black">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Company</h3>
            <ul className="space-y-2">              {company.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} className="text-gray-600 hover:text-black">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Help</h3>
            <ul className="space-y-2">              {help.map((item, index) => (
                <li key={index}>
                  <Link to={item.href} className="text-gray-600 hover:text-black">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} StyleIn. All rights reserved.
          </p>          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-black">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-black">
              Terms of Service
            </Link>
            <Link to="/cookie-policy" className="text-gray-500 text-sm hover:text-black">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
