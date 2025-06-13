import { useState } from "react";
import {
  Search,
  Heart,
  ShoppingBag,
  X,
  User,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(
    null
  );

  const navigation = [
    {
      name: "Men",
      href: "/collections/mens-clothing",
      hasSubmenu: true,
      submenu: [
        {
          name: "Oversized T-Shirts",
          href: "/collections/oversized-tshirts",
          hasSubmenu: true,
          submenu: [
            {
              name: "Graphic Oversized T-Shirts",
              href: "/collections/graphic-oversized-t-shirts",
            },
            {
              name: "Anime Oversized T-Shirts",
              href: "/collections/anime-t-shirts-collections-india",
            },
            { name: "F1 T-Shirts", href: "/collections/f1-t-shirts" },
            { name: "Music T-Shirts", href: "/collections/music-t-shirts" },
            {
              name: "Polo T-Shirts",
              href: "/collections/polo-ovesized-t-shirts",
            },
          ],
        },
        { name: "Polo T-Shirts", href: "/collections/polo-ovesized-t-shirts" },
        {
          name: "Regular T Shirts",
          href: "/collections/graphic-half-sleeve-t-shirts",
        },
        { name: "Plain T-Shirts", href: "/collections/plain-collections" },
        { name: "Joggers", href: "/collections/joggers" },
        {
          name: "Hoodie",
          href: "/collections/winter-collections",
          hasSubmenu: true,
          submenu: [
            { name: "Anime Hoodie", href: "/collections/anime-hoodies" },
            {
              name: "Anime Regular Hoodies",
              href: "/collections/anime-regular-hoodies",
            },
            {
              name: "Graphics Hoodie",
              href: "/collections/winter-collections",
            },
            { name: "Plain Hoodies", href: "/collections/plain-hoodies" },
            { name: "F1 Hoodie", href: "/collections/f1-hoodies" },
          ],
        },
        { name: "Sweatshirt", href: "/collections/sweatshirt" },
      ],
    },
    {
      name: "Women",
      href: "/collections/women",
      hasSubmenu: true,
      submenu: [
        {
          name: "Printed T-Shirts",
          href: "/collections/women-printed-oversized-t-shirts",
        },
        { name: "Plain T-Shirts", href: "/collections/women-plain-t-shirts" },
        { name: "Co-Ords", href: "/collections/women-co-ords" },
      ],
    },
    { name: "Best Sellers", href: "/collections/best-sellers" },
    { name: "New Arrivals", href: "/collections/new-arrival" },
    {
      name: "Oversized T-Shirts",
      href: "/collections/oversized-tshirts",
      hasSubmenu: true,
      submenu: [
        {
          name: "Graphic Oversized T-Shirts",
          href: "/collections/graphic-oversized-t-shirts",
        },
        {
          name: "Anime Oversized T-Shirts",
          href: "/collections/anime-t-shirts-collections-india",
        },
        { name: "F1 T-Shirts", href: "/collections/f1-t-shirts" },
        { name: "Music T Shirts", href: "/collections/music-t-shirts" },
        { name: "Polo T Shirts", href: "/collections/polo-ovesized-t-shirts" },
      ],
    },
    { name: "Joggers", href: "/collections/joggers" },
  ];

  const handleMouseEnter = (itemName: string) => {
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileSubmenu = (itemName: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === itemName ? null : itemName);
  };

  return (
    <header className="bg-white  sticky top-0 z-50">
      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-3">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center justify-center w-8 h-8"
          >
            <div className="relative w-6 h-5">
              <div
                className={`absolute w-full h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 top-2" : "top-0"
                }`}
              ></div>
              <div
                className={`absolute w-full h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : "top-2"
                }`}
              ></div>
              <div
                className={`absolute w-full h-0.5 bg-black transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 top-2" : "top-4"
                }`}
              ></div>
            </div>
          </button>

          {/* Mobile Logo */}
          <Link to="/" className="flex-1 flex justify-center">
            <span className="text-xl ml-10 text-black font-semibold ">StyleIn</span>
          </Link>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-3">
            <button className="p-2">
              <Search className="h-5 w-5 text-gray-700" />
            </button>
            <Link to="/cart" className="p-2 relative">
              <ShoppingBag className="h-5 w-5 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed left-0 top-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <span className="text-lg font-medium">Menu</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="overflow-y-auto h-full pb-20">
            <ul className="py-2">
              {navigation.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center justify-between px-4 py-3">
                    {" "}
                    <Link
                      to={item.href}
                      className="flex-1 text-gray-800 hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasSubmenu && (
                      <button
                        onClick={() => toggleMobileSubmenu(item.name)}
                        className="p-1"
                      >
                        <ChevronRight
                          className={`h-4 w-4 transition-transform ${
                            activeMobileSubmenu === item.name ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {item.hasSubmenu && activeMobileSubmenu === item.name && (
                    <ul className="bg-gray-50 pl-8">
                      {item.submenu?.map((subItem, subIndex) => (
                        <li key={subIndex} className="py-2">
                          {" "}
                          <Link
                            to={subItem.href}
                            className="text-gray-600 hover:text-primary text-sm"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Account Section */}
            <div className="border-t mt-4 pt-4 px-4">
              <div className="mb-4">
                <h3 className="text-sm font-medium text-gray-800 mb-2">
                  My Account
                </h3>
                <div className="space-y-2">
                  {" "}
                  <Link
                    to="/account/login"
                    className="block w-full bg-primary text-white text-center py-2 px-4 rounded hover:opacity-90 transition-opacity"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Log in
                  </Link>
                  <Link
                    to="/account/register"
                    className="block w-full border border-gray-300 text-gray-800 text-center py-2 px-4 rounded"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden md:block">
        <div className=" mx-auto max-w-[85%] ">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-black">
                StyleIn
              </Link>
            </div>
            {/* Desktop Navigation */}
            <nav className="flex-1 flex justify-center">
              <ul className="flex items-center space-x-8">
                {navigation.map((item, index) => (
                  <li
                    key={index}
                    className="relative group"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                    
                  >
                    {" "}
                    <Link
                      to={item.href}
                      className="flex items-center text-gray-700 hover:text-primary py-2 font-semibold  transition-colors"
                    >
                      {item.name}
                      {item.hasSubmenu && (
                        <ChevronDown className="h-4 w-4 ml-1" />
                      )}
                    </Link>
                    {/* Desktop Dropdown */}
                    {item.hasSubmenu && activeDropdown === item.name && (
                      <div className="absolute top-full left-0 bg-white shadow-lg border border-gray-200 rounded-md py-2 min-w-48 z-50">
                        {item.submenu?.map((subItem, subIndex) => (
                          <div key={subIndex} className="relative group/sub">
                            {" "}
                            <Link
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50"
                            >
                              {subItem.name}
                            </Link>
                            {/* Third level submenu */}
                            {subItem.hasSubmenu && (
                              <div className="absolute left-full top-0 bg-white shadow-lg border border-gray-200 rounded-md py-2 min-w-48 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                                {subItem.submenu?.map(
                                  (thirdItem, thirdIndex) => (
                                    <Link
                                      key={thirdIndex}
                                      to={thirdItem.href}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50"
                                    >
                                      {thirdItem.name}
                                    </Link>
                                  )
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            {/* Desktop Actions */}{" "}
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-700 hover:text-primary transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <Link
                to="/account"
                className="p-2 text-gray-700 hover:text-primary transition-colors"
              >
                <User className="h-5 w-5" />
              </Link>
              <Link
                to="/wishlist"
                className="p-2 text-gray-700 hover:text-primary transition-colors relative"
              >
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Link>
              <Link
                to="/cart"
                className="p-2 text-gray-700 hover:text-primary transition-colors relative"
              >
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
