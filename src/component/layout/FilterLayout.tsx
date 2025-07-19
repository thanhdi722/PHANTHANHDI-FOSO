'use client';

import { useState } from 'react';
import Image from 'next/image';

const categories = [
  { id: 'dau', name: 'Bộ Lọc Dầu', icon: '/images/product-demo.png' },
  { id: 'khongkhi', name: 'Bộ Lọc Không Khí', icon: '/images/product-demo.png' },
  { id: 'nhienlieu', name: 'Bộ Lọc Nhiên Liệu', icon: '/images/product-demo.png' },
  { id: 'cabin', name: 'Bộ Lọc Cabin', icon: '/images/product-demo.png' },
  { id: 'nước', name: 'Bộ Lọc Nước', icon: '/images/product-demo.png' },
  { id: 'gió', name: 'Bộ Lọc Gió', icon: '/images/product-demo.png' },
];

const topProducts = [
  { name: 'Bộ lọc dầu', img: '/images/product-demo.png' },
  { name: 'Bộ lọc không khí', img: '/images/product-demo.png' },
  { name: 'Bộ lọc nhiên liệu', img: '/images/product-demo.png' },
  { name: 'Bộ lọc cabin', img: '/images/product-demo.png' },
  { name: 'Bộ lọc gió', img: '/images/product-demo.png' },
  { name: 'Bộ lọc nước', img: '/images/product-demo.png' },
];

const bestSellers = Array(5).fill({
  name: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer (52046262)',
  img: '/images/product-demo.png',
  price: 299000,
  oldPrice: 329000,
  discount: '-10%',
});

export default function CategoryModal() {
  const [activeCategory, setActiveCategory] = useState('dau');

  return (
    <div className="flex w-full h-[600px] bg-[#efefef] rounded-xl overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r overflow-y-auto">
        {categories.map(cat => (
          <div
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 transition ${
              activeCategory === cat.id ? 'bg-blue-100 border-l-4 border-blue-600' : ''
            }`}
          >
            <div className="flex items-center gap-3">
              <Image src={cat.icon} alt={cat.name} width={32} height={32} className="rounded" />
              <span className="font-medium text-sm text-gray-800">{cat.name}</span>
            </div>
            <span className="text-gray-400 text-sm">&gt;</span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto scrollbar-hide">
        {/* Top Products */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {topProducts.map((item, i) => (
            <div key={i} className="bg-white rounded-xl shadow px-4 py-3 flex items-center gap-4">
              <Image src={item.img} alt={item.name} width={70} height={70} className="rounded-lg" />
              <div className="font-semibold text-base text-gray-700">{item.name}</div>
            </div>
          ))}
        </div>

        {/* Best Sellers */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-800">Sản Phẩm Bán Chạy</h3>
          <button className="text-blue-600 font-medium text-sm flex items-center gap-1">
            Xem tất cả <span>&gt;&gt;</span>
          </button>
        </div>

        <div className="grid grid-cols-5 gap-4">
          {bestSellers.map((item, i) => (
            <div key={i} className="bg-white rounded-lg shadow p-3">
              <Image src={item.img} alt={item.name} width={184} height={184} className="rounded" />
              <h4 className="mt-3 text-sm font-semibold text-gray-800 line-clamp-2 min-h-[40px]">{item.name}</h4>
              <div className="mt-2 text-red-600 font-bold text-base">
                {item.price.toLocaleString()} <span className="underline">đ</span>
              </div>
              <div className="text-gray-400 line-through text-sm">
                {item.oldPrice.toLocaleString()} đ
              </div>
              <div className="text-xs text-red-600 font-medium">{item.discount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
