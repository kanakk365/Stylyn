"use client";

import { useState, useEffect } from "react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      desktopImage:
        "https://images.pexels.com/photos/7987589/pexels-photo-7987589.jpeg",
      mobileImage:
        "https://images.pexels.com/photos/7987589/pexels-photo-7987589.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&dpr=1",
      title: "Summer Collection",
      subtitle: "Effortless style for warmer days",
      buttonText: "Shop Now",
      buttonLink: "/collections/summer",
    },
    {
      desktopImage:
        "https://images.pexels.com/photos/32504585/pexels-photo-32504585/free-photo-of-bicycle-by-new-year-mural-in-urban-tunnel.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      mobileImage:
        "https://images.pexels.com/photos/32504585/pexels-photo-32504585/free-photo-of-bicycle-by-new-year-mural-in-urban-tunnel.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&dpr=1",
      title: "New Arrivals",
      subtitle: "Fresh looks for the season",
      buttonText: "Explore",
      buttonLink: "/collections/new-arrivals",
    },
    {
      desktopImage:
        "https://images.pexels.com/photos/30395221/pexels-photo-30395221/free-photo-of-scenic-cape-point-landscape-with-lighthouse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      mobileImage:
        "https://images.pexels.com/photos/30395221/pexels-photo-30395221/free-photo-of-scenic-cape-point-landscape-with-lighthouse.jpeg?auto=compress&cs=tinysrgb&w=800&h=1200&dpr=1",
      title: "Exclusive Styles",
      subtitle: "Limited edition pieces you'll love",
      buttonText: "Discover",
      buttonLink: "/collections/exclusive",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
  return (
    <div className="rounded-t-3xl rounded-b-lg relative h-[80vh] md:h-[90vh] lg:h-[91vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-x-2 sm:inset-x-3 inset-y-0  transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Desktop Image */}
          <img
            src={slide.desktopImage || "/placeholder.svg"}
            alt={slide.title}
            className="hidden md:block w-full h-full object-cover rounded-b-lg rounded-t-3xl"
          />
          {/* Mobile Image */}
          <img
            src={slide.mobileImage || "/placeholder.svg"}
            alt={slide.title}
            className="block md:hidden w-full h-full object-cover rounded-b-lg rounded-t-2xl"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10 rounded-b-lg rounded-t-3xl" />
          {/* Content */}
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
