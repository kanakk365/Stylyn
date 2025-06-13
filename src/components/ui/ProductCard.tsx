interface ProductCardProps {
  product: {
    id: number
    name: string
    price: string
    originalPrice: string
    image: string
    hoverImage: string
    isOnSale: boolean
    description: string
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group w-full">
      <div className="relative overflow-hidden rounded-lg mb-3 bg-white border border-gray-100">
        {product.isOnSale && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded z-10">
            SALE
          </div>
        )}
        
        {/* Product Images */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src={product.hoverImage}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />        </div>
      </div>

      {/* Product Info */}
      <div className="text-left">
        <h3 className="font-medium text-gray-900 mb-1 text-sm line-clamp-2 hover:text-gray-700 transition-colors">
          <a href={`/products/${product.id}`} className="hover:underline">
            {product.name}
          </a>
        </h3>
        
        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-base font-semibold text-gray-900">{product.price}</span>
          {product.isOnSale && (
            <span className="text-xs text-gray-500 line-through">{product.originalPrice}</span>
          )}        </div>
      </div>
    </div>
  )
}
