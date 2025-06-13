"use client";

import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../ui/ProductCard";

export default function TrendingSection() {
  const [activeTab, setActiveTab] = useState("0");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollAmount = containerWidth / 4; // Scroll by one card width
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      const scrollAmount = containerWidth / 4; // Scroll by one card width
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const tabOptions = [
    { value: "0", label: "New Arrivals" },
    { value: "1", label: "Best Sellers" },
    { value: "2", label: "Featured" },
  ];

  const products = [
    {
      id: 1,
      name: "Naruto Evolution Oversized T-Shirt",
      price: "Rs. 699.00",
      originalPrice: "Rs. 1,999.00",
      image:
        "//crazymonk.in/cdn/shop/files/Naruto_CM.jpg?v=1748102668&width=1100",
      hoverImage:
        "//crazymonk.in/cdn/shop/files/Naruto_1.jpg?v=1748102668&width=1100",
      isOnSale: true,
      description:
        "Product HighlightsFabric - 240 GSM Heavy Gauge, Bio-Washed Cotton Pattern - PrintedSleeves - Half SleeveFit -...",
    },
    {
      id: 2,
      name: "Jin Woo X Shadow Monarch Solo Leveling Oversized T-Shirt - Multi Color",
      price: "Rs. 799.00",
      originalPrice: "Rs. 1,999.00",
      image:
        "//crazymonk.in/cdn/shop/files/JinWoo_CM.jpg?v=1746189962&width=1100",
      hoverImage:
        "//crazymonk.in/cdn/shop/files/JIN.jpg?v=1746189962&width=1100",
      isOnSale: true,
      description:
        "Product HighlightsFabric - 240 GSM Heavy Gauge, Bio-Washed Cotton Pattern - PrintedSleeves - Half SleeveFit -...",
    },
    {
      id: 3,
      name: "Warrior of Liberation Oversized T-Shirt - Multi Color",
      price: "Rs. 699.00",
      originalPrice: "Rs. 1,999.00",
      image:
        "//crazymonk.in/cdn/shop/files/WarriorofLiberation_2_CM.jpg?v=1746189955&width=1100",
      hoverImage:
        "//crazymonk.in/cdn/shop/files/WarriorofLiberation_1_3e393d6d-3581-46f3-9d5c-378059c57272.jpg?v=1746189955&width=1100",
      isOnSale: true,
      description:
        "Product HighlightsFabric - 240 GSM Heavy Gauge, Bio-Washed Cotton Pattern - PrintedSleeves - Half SleeveFit -...",
    },
    {
      id: 4,
      name: "Ultra Ego Oversized T-Shirt",
      price: "Rs. 699.00",
      originalPrice: "Rs. 1,199.00",
      image:
        "//crazymonk.in/cdn/shop/files/UltraEgo_2_CM.jpg?v=1746190351&width=1100",
      hoverImage:
        "//crazymonk.in/cdn/shop/files/UltraEgo_1_aa37f4b1-b2e4-413a-ba46-87adc72f2f7d.jpg?v=1746190351&width=1100",
      isOnSale: true,
      description:
        "Product HighlightsFabric - 240 GSM Heavy Gauge, Bio-Washed Cotton Pattern - PrintedSleeves - Half SleeveFit -...",
    },
    {
      id: 1,
      name: "Naruto Evolution Oversized T-Shirt",
      price: "Rs. 699.00",
      originalPrice: "Rs. 1,999.00",
      image:
        "//crazymonk.in/cdn/shop/files/Naruto_CM.jpg?v=1748102668&width=1100",
      hoverImage:
        "//crazymonk.in/cdn/shop/files/Naruto_1.jpg?v=1748102668&width=1100",
      isOnSale: true,
      description:
        "Product HighlightsFabric - 240 GSM Heavy Gauge, Bio-Washed Cotton Pattern - PrintedSleeves - Half SleeveFit -...",
    },
    {
      id: 2,
      name: "Jin Woo X Shadow Monarch Solo Leveling Oversized T-Shirt - Multi Color",
      price: "Rs. 799.00",
      originalPrice: "Rs. 1,999.00",
      image:
        "//crazymonk.in/cdn/shop/files/JinWoo_CM.jpg?v=1746189962&width=1100",
      hoverImage:
        "//crazymonk.in/cdn/shop/files/JIN.jpg?v=1746189962&width=1100",
      isOnSale: true,
      description:
        "Product HighlightsFabric - 240 GSM Heavy Gauge, Bio-Washed Cotton Pattern - PrintedSleeves - Half SleeveFit -...",
    },
    {
      id: 3,
      name: "Warrior of Liberation Oversized T-Shirt - Multi Color",
      price: "Rs. 699.00",
      originalPrice: "Rs. 1,999.00",
      image:
        "//crazymonk.in/cdn/shop/files/WarriorofLiberation_2_CM.jpg?v=1746189955&width=1100",
      hoverImage:
        "//crazymonk.in/cdn/shop/files/WarriorofLiberation_1_3e393d6d-3581-46f3-9d5c-378059c57272.jpg?v=1746189955&width=1100",
      isOnSale: true,
      description:
        "Product HighlightsFabric - 240 GSM Heavy Gauge, Bio-Washed Cotton Pattern - PrintedSleeves - Half SleeveFit -...",
    },
    {
      id: 4,
      name: "Ultra Ego Oversized T-Shirt",
      price: "Rs. 699.00",
      originalPrice: "Rs. 1,199.00",
      image:
        "//crazymonk.in/cdn/shop/files/UltraEgo_2_CM.jpg?v=1746190351&width=1100",
      hoverImage:
        "//crazymonk.in/cdn/shop/files/UltraEgo_1_aa37f4b1-b2e4-413a-ba46-87adc72f2f7d.jpg?v=1746190351&width=1100",
      isOnSale: true,
      description:
        "Product HighlightsFabric - 240 GSM Heavy Gauge, Bio-Washed Cotton Pattern - PrintedSleeves - Half SleeveFit -...",
    },
  ];

  return (
    <section className="py-16 px-10 bg-white">
      <div className="mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <h2 className="text-3xl font-semibold">You are in&nbsp;</h2>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="text-3xl font-semibold flex items-center gap-2 hover:text-gray-700 transition-colors"
              >
                {tabOptions.find((option) => option.value === activeTab)?.label}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M441.9 167.3l-19.8-19.8c-4.7-4.7-12.3-4.7-17 0L224 328.2 42.9 147.5c-4.7-4.7-12.3-4.7-17 0L6.1 167.3c-4.7 4.7-4.7 12.3 0 17l209.4 209.4c4.7 4.7 12.3 4.7 17 0l209.4-209.4c4.7-4.7 4.7-12.3 0-17z"></path>
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-[200px]">
                  {tabOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setActiveTab(option.value);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors ${
                        activeTab === option.value
                          ? "bg-gray-50 font-medium"
                          : ""
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>{" "}
        </div>{" "}
        {/* Product Slider */}
        <div className="relative group/slider">          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hover:bg-gray-50"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>{" "}          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 hover:bg-gray-50"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>{" "}          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {products.map((product) => (
              <div key={product.id} className="flex-none w-[300px] lg:w-[calc(25%-18px)] xl:w-[calc(25%-18px)] 2xl:w-[calc(25%-18px)]">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
