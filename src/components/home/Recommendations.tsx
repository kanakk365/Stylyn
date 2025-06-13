"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function RecommendationsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const recommendations = [
    {
      id: 1,
      name: "Linen Button-Up Shirt",
      price: "$85.00",
      image: "/placeholder.svg?height=400&width=300&text=Linen+Shirt",
      category: "Recommended for you",
    },
    {
      id: 2,
      name: "Tailored Wool Trousers",
      price: "$120.00",
      image: "/placeholder.svg?height=400&width=300&text=Wool+Trousers",
      category: "Based on your last purchase",
    },
    {
      id: 3,
      name: "Cotton Crew Neck T-Shirt",
      price: "$45.00",
      image: "/placeholder.svg?height=400&width=300&text=Cotton+Tshirt",
      category: "Others also bought",
    },
    {
      id: 4,
      name: "Lightweight Bomber Jacket",
      price: "$175.00",
      image: "/placeholder.svg?height=400&width=300&text=Bomber+Jacket",
      category: "Recommended for you",
    },
    {
      id: 5,
      name: "Slim Fit Selvedge Jeans",
      price: "$135.00",
      image: "/placeholder.svg?height=400&width=300&text=Selvedge+Jeans",
      category: "Complete your look",
    },
    {
      id: 6,
      name: "Leather Belt",
      price: "$65.00",
      image: "/placeholder.svg?height=400&width=300&text=Leather+Belt",
      category: "Frequently bought together",
    },
  ]

  const itemsPerPage = 4
  const totalPages = Math.ceil(recommendations.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalPages - 1 : prevIndex - 1))
  }

  const visibleItems = recommendations.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage)

  return (    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light">Just For You</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon" onClick={prevSlide} className="rounded-full border-gray-200 hover:bg-gray-100">
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide} className="rounded-full border-gray-200 hover:bg-gray-100">
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visibleItems.map((item) => (
            <div key={item.id} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button className="bg-white text-black hover:bg-black hover:text-white">Quick View</Button>
                </div>
              </div>
              <div>
                <p className="text-sm text-primary mb-1">{item.category}</p>
                <h3 className="text-lg font-medium mb-1">{item.name}</h3>
                <p className="text-lg font-semibold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>        <div className="text-center mt-12">
          <Button className="bg-primary text-white hover:bg-primary-600 border border-primary" asChild>
            <a href="/recommendations">View All Recommendations</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
