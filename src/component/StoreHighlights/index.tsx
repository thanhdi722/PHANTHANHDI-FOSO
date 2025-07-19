'use client'
import { FaTruck, FaHeadset, FaShippingFast, FaExchangeAlt, FaMapMarkerAlt } from 'react-icons/fa'

const highlights = [
  {
    icon: <FaTruck className="text-blue-600 text-2xl" />,
    title: 'Miễn phí vận chuyển',
    desc: 'Với hoá đơn từ 1 triệu'
  },
  {
    icon: <FaHeadset className="text-blue-600 text-2xl" />,
    title: 'Hỗ trợ 24/7',
    desc: 'Đội ngũ CSKH tận tình sẵn sàng lắng nghe và phục vụ'
  },
  {
    icon: <FaShippingFast className="text-blue-600 text-2xl" />,
    title: 'Giao hàng nhanh 2h',
    desc: 'Trong vòng bán kính 10km nội thành TP HCM'
  },
  {
    icon: <FaExchangeAlt className="text-blue-600 text-2xl" />,
    title: '30 ngày đổi trả',
    desc: 'Hoàn tiền 100% nếu phát sinh lỗi từ NSX hoặc đơn vị vận chuyển'
  }
]

export default function StoreHighlights() {
  return (
    <div className="">
      {/* Top section */}
      <div className="max-w-7xl mx-auto py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow rounded-lg p-4 flex items-start gap-3 border border-gray-100"
          >
            <div>{item.icon}</div>
            <div>
              <p className="font-semibold text-sm text-black">{item.title}</p>
              <p className="text-xs text-gray-600 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom section */}
      <div className="bg-blue-200/50 py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 text-blue-900 font-medium">
            <FaMapMarkerAlt />
            <span className='text-xl text-black'>Xem hệ thống 88 cửa hàng trên toàn quốc</span>
          </div>
          <a
            href="#"
            className="text-blue-600 font-semibold hover:underline flex items-center gap-1 bg-white rounded-full px-4 py-2"
          >
            Xem ngay →
          </a>
        </div>
      </div>
    </div>
  )
}
