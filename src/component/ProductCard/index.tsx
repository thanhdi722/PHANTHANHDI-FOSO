'use client'
import Image from 'next/image'
import { FC } from 'react'

interface ProductCardProps {
  title: string
  image: string
  price: number
  oldPrice: number
  discount: number
}

const ProductCard: FC<ProductCardProps> = ({
  title,
  image,
  price,
  oldPrice,
  discount
}) => {
  return (
    <div className="w-60 p-3 bg-white rounded-xl border border-blue-500 flex flex-col items-start gap-2 shadow-sm">
      {/* Image */}
      <div className="w-full flex items-center justify-center">
        <Image src={image} alt={title} width={200} height={200} className="object-contain" />
      </div>

      {/* Badge */}
      <div className="px-2.5 py-0.5 bg-gradient-to-br from-orange-300 to-orange-500 rounded-[999px] inline-flex justify-start items-start gap-1.5 w-fit">
        <div className="size-4 relative rounded-[999px] overflow-hidden">
          <div className="size-10 left-[-12px] top-[-12px] absolute bg-orange-100" />
          <div className="size-3 left-[2.12px] top-[1.60px] absolute bg-orange-500" />
          <div className="size-3 left-[2.12px] top-[1.60px] absolute bg-orange-400" />
          <div className="w-2 h-2.5 left-[2.12px] top-[1.60px] absolute bg-orange-400" />
          <div className="size-1.5 left-[2.52px] top-[1.60px] absolute bg-orange-300" />
        </div>
        <div className="text-center justify-center text-[#7A0916] text-sm font-semibold font-['Epilogue'] leading-tight">Giá cực sốc</div>
      </div>

      {/* Title */}
      <p className="text-base text-gray-900 font-bold text-center line-clamp-2">{title}</p>

      {/* Price */}
      <div className="text-red-600 font-semibold text-lg">
        {price.toLocaleString()} đ
      </div>
      <div className='flex items-center gap-2'>
      <div className="text-xs text-gray-500 line-through">
        {oldPrice.toLocaleString()} đ
      </div>

      {/* Discount */}
      <div className="text-xs text-red-500">-{discount}%</div>

      </div>
      {/* Old Price */}
      
      {/* Button */}
      <button className="mt-1 bg-blue-400 text-white text-sm font-semibold py-1.5 px-4 rounded-lg hover:bg-blue-500 transition-colors w-full">
        Mua ngay
      </button>
    </div>
  )
}

export default ProductCard
