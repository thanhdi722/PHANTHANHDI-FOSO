'use client'
import React, { useState } from 'react'

const SortFilter = () => {
  const [selectedSort, setSelectedSort] = useState('relevant')
  const [priceOrder, setPriceOrder] = useState('low-to-high')

  const sortOptions = [
    { id: 'relevant', label: 'Liên quan' },
    { id: 'best-selling', label: 'Bán chạy' },
    { id: 'newest', label: 'Mới nhất' },
    { id: 'featured', label: 'Nổi bật' }
  ]

  const priceOptions = [
    { id: 'low-to-high', label: 'Thấp -> Cao' },
    { id: 'high-to-low', label: 'Cao -> Thấp' }
  ]

  return (
    <div className="mb-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <p className='text-sm text-black'>Danh sách sản phẩm</p>
        <div className="flex items-center gap-4">
          <span className="text-gray-700 font-medium">Sắp xếp theo:</span>
          <div className="flex gap-2">
            {sortOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setSelectedSort(option.id)}
                className={`relative px-4 py-2 rounded-lg border transition-colors ${
                  selectedSort === option.id
                    ? 'bg-white text-blue-600 border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
                }`}
              >
                {option.label}
                {selectedSort === option.id && (
                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-blue-600">
                    <div className="absolute -top-6 -right-0 w-3 h-3 flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1 4L3 6L7 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                )}
              </button>
            ))}
              <div className="flex items-center gap-2">
          
          <div className="relative">
            <button
              onClick={() => setPriceOrder(priceOrder === 'low-to-high' ? 'high-to-low' : 'low-to-high')}
              className="flex items-center gap-1 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:border-gray-400 transition-colors"
            >
              <span className="text-gray-700">
                {priceOptions.find(opt => opt.id === priceOrder)?.label}
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
          </div>
        </div>

       
      
      </div>
    </div>
  )
}

export default SortFilter 