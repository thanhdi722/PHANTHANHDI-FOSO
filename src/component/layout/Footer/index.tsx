'use client'
import { FaGooglePlay, FaApple, FaChevronUp } from 'react-icons/fa'
import { MdLanguage } from 'react-icons/md'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-blue-100 pt-8 pb-4 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company info */}
        <div>
          <h3 className="font-bold text-[#013065] uppercase mb-2 text-lg">
            Viet Hung Auto Production Trading Joint Stock Company
          </h3>
          <p className='text-sm text-black'>MST: <span className='text-gray-600 font-semibold'>0305904228</span>  </p>
          <p className='text-sm text-black'>Địa chỉ: <span className='text-gray-600 font-semibold'>13 Nghĩa Thục, P.5, Q.5, TP. Hồ Chí Minh</span></p>
          <p className='text-sm text-black'>Điện thoại: <a href="tel:02837607807" className="text-gray-600 font-semibold">0283 760 7807</a></p>
          <p className='text-sm text-black'>Giờ mở cửa: <span className='text-gray-600 font-semibold'>09:00 - 22:00 (T2 - T6)</span></p>
          <img src="/images/bo cong thuong.png" alt="Đã thông báo BCT" className="mt-3 w-32" />
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="font-semibold mb-2 text-[#013065] text-lg">Sitemap</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-blue-500">About</a></li>
            <li><a href="#" className="hover:text-blue-500">Article</a></li>
            <li><a href="#" className="hover:text-blue-500">Cart</a></li>
            <li><a href="#" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-2 text-[#013065]">Legal</h4>
          <ul className="space-y-1">
            <li><a href="#" className="font-semibold text-gray-900 underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Cookie policy</a></li>
            <li><a href="#" className="hover:text-blue-500">Delivery policy</a></li>
            <li><a href="#" className="hover:text-blue-500">FAQs</a></li>
          </ul>
        </div>

        {/* App download + Language */}
        <div className="flex flex-col items-start gap-3">
          <h4 className="font-semibold mb-1">Download App</h4>
          <a href="#" className="bg-black text-white px-4 py-2 rounded flex items-center gap-2">
            <FaGooglePlay /> Google Play Store
          </a>
          <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2">
            <FaApple /> Apple App Store
          </a>

          {/* Language selector */}
          <div className="mt-4 flex items-center gap-2">
          <img src="/images/ico-country-c-vietnam.png" alt="Vietnam" className="w-5 h-5 rounded-full" />
            <span className="text-sm">VI</span>
            
          </div>
        </div>
      </div>

      {/* Back to top */}
      <div className="text-right mt-6 pr-6">
        <button className="text-blue-600 hover:text-blue-800 transition">
          <FaChevronUp />
        </button>
      </div>
    </footer>
  )
}
