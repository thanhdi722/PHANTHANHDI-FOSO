'use client'
import SortFilter from '../layout/SortFilter'
import ProductCard from '../ProductCard'

const products = Array(16).fill({
  title: 'Lọc gió động cơ Air Filter – Chevrolet Colorado, Trailblazer',
  price: 299000,
  oldPrice: 329000,
  discount: 10,
  image: '/images/product-demo.png' // thay bằng ảnh thật
})

export default function ProductListPage() {
  return (
   <div className="container mx-auto max-w-7xl w-full">
         <div className="flex gap-4 py-4">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 rounded shadow-sm border text-sm">
        <h2 className="font-semibold mb-4 text-sm text-black">📦 Bộ Lọc</h2>

        <div className="mb-4">
          <p className="font-medium mb-2 text-sm text-black">Danh mục sản phẩm</p>
          <ul className="space-y-1 text-sm text-black">
            <li><input type="checkbox" className="mr-2" /> Lọc gió (20)</li>
            <li><input type="checkbox" className="mr-2" /> Lọc nhớt (16)</li>
            <li><input type="checkbox" className="mr-2" /> Lọc nhiên liệu (10)</li>
            <li><input type="checkbox" className="mr-2" /> Lọc điều hòa (8)</li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="font-medium mb-2 text-sm text-black">Thương hiệu</p>
          <ul className="space-y-1 text-sm text-black">
            <li><input type="checkbox" className="mr-2" /> ACDelco</li>
            <li><input type="checkbox" className="mr-2" /> Bosch</li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="font-medium mb-2 text-sm text-black">Năm sản xuất</p>
          <ul className="space-y-1 text-sm text-black">
            <li><input type="checkbox" className="mr-2" /> 2023</li>
            <li><input type="checkbox" className="mr-2" /> 2024</li>
          </ul>
        </div>

        <div className="mb-4">
          <p className="font-medium mb-2 text-sm text-black">Xuất xứ</p>
          <ul className="space-y-1 text-sm text-black">
            <li><input type="checkbox" className="mr-2" /> Thái Lan</li>
            <li><input type="checkbox" className="mr-2" /> Trung Quốc</li>
          </ul>
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1">
        <SortFilter />
       

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p, index) => (
            <ProductCard key={index} {...p} />
          ))}
        </div>
      </main>
    </div>
   </div>
  )
}
