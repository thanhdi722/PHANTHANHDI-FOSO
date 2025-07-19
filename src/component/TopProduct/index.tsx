'use client'
import React, { useState } from 'react'
import ProductCard from '../ProductCard'

const TopProduct = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Sample product data based on the image
  const products = [
    {
      id: 1,
      title: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Tr...",
      image: "/images/product-demo.png",
      price: 299000,
      oldPrice: 329000,
      discount: 10
    },
    {
      id: 2,
      title: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Tr...",
      image: "/images/product-demo.png",
      price: 299000,
      oldPrice: 329000,
      discount: 10
    },
    {
      id: 3,
      title: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Tr...",
      image: "/images/product-demo.png",
      price: 299000,
      oldPrice: 329000,
      discount: 10
    },
    {
      id: 4,
      title: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Tr...",
      image: "/images/product-demo.png",
      price: 299000,
      oldPrice: 329000,
      discount: 10
    },
    {
      id: 5,
      title: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Tr...",
      image: "/images/product-demo.png",
      price: 299000,
      oldPrice: 329000,
      discount: 10
    },
    {
      id: 6,
      title: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Tr...",
      image: "/images/product-demo.png",
      price: 299000,
      oldPrice: 329000,
      discount: 10
    },
    {
      id: 7,
      title: "Lọc gió động cơ Air Filter - Chevrolet Colorado, Tr...",
      image: "/images/product-demo.png",
      price: 299000,
      oldPrice: 329000,
      discount: 10
    },
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 5 >= products.length ? 0 : prevIndex + 5
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 5 < 0 ? Math.max(0, products.length - 5) : prevIndex - 5
    )
  }

  return (
    <div className="bg-blue-900 py-8 container mx-auto max-w-7xl w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
            aria-label="Previous products"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-blue-400 hover:bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
            aria-label="Next products"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Products Container - Full Width */}
          <div className="w-full">
            <div className="grid grid-cols-5 gap-4">
              {products.slice(currentIndex, currentIndex + 5).map((product) => (
                <div key={product.id} className="transition-transform duration-300">
                  <ProductCard
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    oldPrice={product.oldPrice}
                    discount={product.discount}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: Math.ceil(products.length / 5) }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i * 5)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  i === Math.floor(currentIndex / 5) 
                    ? 'bg-blue-400' 
                    : 'bg-blue-600 hover:bg-blue-500'
                }`}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopProduct