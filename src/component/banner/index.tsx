import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='container mx-auto max-w-7xl w-full'>
        <div className='flex items-start gap-2 mt-4'>
            <p className='text-lg text-gray-500'>Trang chủ</p>
            <p className='text-lg text-gray-900'>{`>`}</p>
            <p className='text-lg text-blue-700'>Sản phẩm</p>
        </div>
        <div className='flex items-center justify-center mt-4'>
            <Image src='/images/banner.png' alt='banner' width={1200} height={500} className='h-full w-full object-cover' />
        </div>
    </div>
  )
}

export default Banner