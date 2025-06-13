"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TrendingSection() {
  const [activeTab, setActiveTab] = useState("men")

  const products = {
    men: [
      {
        id: 1,
        name: "Classic Oxford Shirt",
        price: "$89.00",
        image: "/placeholder.svg?height=400&width=300&text=Oxford+Shirt",
        category: "Shirts",
        isNew: true,
      },
      {
        id: 2,
        name: "Slim Fit Chinos",
        price: "$75.00",
        image: "/placeholder.svg?height=400&width=300&text=Chinos",
        category: "Pants",
        isNew: false,
      },
      {
        id: 3,
        name: "Merino Wool Sweater",
        price: "$120.00",
        image: "/placeholder.svg?height=400&width=300&text=Wool+Sweater",
        category: "Knitwear",
        isNew: true,
      },
      {
        id: 4,
        name: "Leather Derby Shoes",
        price: "$195.00",
        image: "/placeholder.svg?height=400&width=300&text=Derby+Shoes",
        category: "Footwear",
        isNew: false,
      },
    ],
    women: [
      {
        id: 5,
        name: "Silk Blouse",
        price: "$110.00",
        image: "/placeholder.svg?height=400&width=300&text=Silk+Blouse",
        category: "Tops",
        isNew: true,
      },
      {
        id: 6,
        name: "High-Waisted Jeans",
        price: "$95.00",
        image: "/placeholder.svg?height=400&width=300&text=High+Waisted+Jeans",
        category: "Pants",
        isNew: false,
      },
      {
        id: 7,
        name: "Cashmere Cardigan",
        price: "$145.00",
        image: "/placeholder.svg?height=400&width=300&text=Cashmere+Cardigan",
        category: "Knitwear",
        isNew: true,
      },
      {
        id: 8,
        name: "Leather Ankle Boots",
        price: "$220.00",
        image: "/placeholder.svg?height=400&width=300&text=Ankle+Boots",
        category: "Footwear",
        isNew: false,
      },
    ],
    combos: [
      {
        id: 9,
        name: "Business Casual Set",
        price: "$250.00",
        image: "/placeholder.svg?height=400&width=300&text=Business+Casual+Set",
        category: "Outfit Sets",
        isNew: true,
        includes: "Shirt, Pants, Belt",
      },
      {
        id: 10,
        name: "Weekend Getaway Set",
        price: "$180.00",
        image: "/placeholder.svg?height=400&width=300&text=Weekend+Set",
        category: "Outfit Sets",
        isNew: false,
        includes: "T-shirt, Jeans, Cap",
      },
      {
        id: 11,
        name: "Date Night Ensemble",
        price: "$320.00",
        image: "/placeholder.svg?height=400&width=300&text=Date+Night+Set",
        category: "Outfit Sets",
        isNew: true,
        includes: "Blazer, Shirt, Trousers",
      },
      {
        id: 12,
        name: "Athleisure Collection",
        price: "$210.00",
        image: "/placeholder.svg?height=400&width=300&text=Athleisure+Set",
        category: "Outfit Sets",
        isNew: false,
        includes: "Hoodie, Joggers, Sneakers",
      },
    ],
  }

  return (
    <section className="py-20 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-light mb-4">Top Trending Outfits</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most popular styles that everyone's talking about
          </p>
        </div>

        <Tabs defaultValue="men" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-10">
            <TabsList className="bg-white border border-gray-200">
              <TabsTrigger value="men" className="px-8 py-3 text-lg">
                MEN
              </TabsTrigger>
              <TabsTrigger value="women" className="px-8 py-3 text-lg">
                WOMEN
              </TabsTrigger>
              <TabsTrigger value="combos" className="px-8 py-3 text-lg">
                COMBOS
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="men" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.men.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="women" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.women.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="combos" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.combos.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>        <div className="text-center mt-12">
          <Button
            className="bg-primary text-white hover:opacity-90 border border-primary px-8 py-6 text-lg transition-opacity"
            asChild
          >
            <a href={`/collections/${activeTab}`}>
              View All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}'s Collection
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

interface ProductCardProps {
  product: {
    id: number
    name: string
    price: string
    image: string
    category: string
    isNew: boolean
    includes?: string
  }
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group">
      <div className="relative overflow-hidden rounded-lg mb-4">        {product.isNew && (
          <div className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 z-10">NEW</div>
        )}
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <Button className="bg-white text-black hover:bg-black hover:text-white">Quick View</Button>
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <h3 className="text-lg font-medium mb-1">{product.name}</h3>
        <p className="text-lg font-semibold">{product.price}</p>
        {product.includes && <p className="text-sm text-gray-500 mt-1">Includes: {product.includes}</p>}
      </div>
    </div>
  )
}

