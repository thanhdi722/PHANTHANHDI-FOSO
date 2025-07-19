'use client';

import Image from 'next/image';
import { FaSearch, FaShoppingCart, FaUser, FaPhoneAlt, FaDownload, FaClock } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineDown } from 'react-icons/ai';
import { FiTruck, FiRefreshCcw, FiClock } from 'react-icons/fi';
import FilterLayout from './FilterLayout';
import { useState, RefObject } from 'react';
import { FC } from 'react';

type HeaderProps = {
  onOpenFilter?: () => void;
  triggerRef?: RefObject<HTMLButtonElement>;
};

const Header: FC<HeaderProps> = ({ onOpenFilter, triggerRef }) => {
    const [showFilter, setShowFilter] = useState(false);
    return (
        <header className="w-full bg-white shadow-md">
            {/* Top Bar - full width */}
            <div className="w-full bg-gradient-to-l from-blue-700 via-sky-400 to-blue-700 text-white text-sm px-4 md:px-16 py-1 flex justify-between items-center">
                <div className='container mx-auto max-w-7xl w-full flex justify-between items-center'>
                    <div>
                        Nhập mã <span className="text-yellow-300 font-bold">NEWBIE</span> giảm ngay 10% cho lần đầu mua hàng.
                    </div>
                    <div className="flex gap-6 text-xs">
                        <div className="flex items-center gap-1">
                            <FaPhoneAlt className="text-white" />
                            <span>Hotline: <span className="text-yellow-300 font-bold">0283 760 7607</span></span>
                        </div>
                        <div className="flex items-center gap-1">
                            <FaDownload />
                            <span>Tải ứng dụng</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Các phần còn lại nằm trong container */}
            <div className="container mx-auto max-w-7xl w-full">
                {/* Logo + Search + Icons */}
                <div className="w-full py-4 flex items-center gap-8">
                    <div className="w-[140px] md:w-[180px]">
                        <Image src="/images/logo_sunfil1.png" alt="Logo" width={180} height={80} />
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 flex items-center border-2 border-blue-600 rounded-full h-10 overflow-hidden">
                        <input
                            type="text"
                            placeholder="Tìm sản phẩm"
                            className="w-full px-4 outline-none text-black"
                        />
                        <button className="bg-blue-600 px-4 py-2 text-white h-full flex items-center justify-center">
                            <FaSearch />
                        </button>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-6 text-sm text-black">
                        <div className="flex items-center gap-1 cursor-pointer">
                            <Image src="/images/ico-country-c-vietnam.png" width={20} height={14} alt="VN" />
                            <span>VI</span>
                        </div>
                        <div className="relative flex items-center gap-1 cursor-pointer">
                            <div className='relative'>
                                <Image src="/images/cart.png" width={20} height={14} alt="VN" /> 
                                <span className="absolute -top-3 -right-3 bg-red-600 text-white text-xs w-4 h-4 flex justify-center items-center rounded-full">12</span>   
                            </div>
                            <span>Giỏ hàng</span>
                            
                        </div>
                        <div className="flex items-center gap-1 cursor-pointer">
                            <Image src="/images/User Circle.png" width={20} height={14} alt="VN" />
                            <span>Tài khoản</span>
                        </div>
                    </div>
                </div>

                {/* Menu Bar */}
                <div className="w-full py-2 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-4">
                        <button
                            className="flex items-center gap-2 bg-blue-700 text-white px-4 py-2 rounded-lg"
                            onClick={onOpenFilter}
                            ref={triggerRef}
                        >
                            <AiOutlineMenu />
                            Danh Mục Sản Phẩm
                            <AiOutlineDown />
                        </button>
                        <nav className="flex gap-5 text-gray-800 font-medium">
                            <a href="#">Về Chúng Tôi</a>
                            <a href="#">Bài Viết</a>
                            <a href="#">Catalog</a>
                            <a href="#">Liên Hệ</a>
                        </nav>
                    </div>
                    <div className="hidden md:flex items-center gap-6 text-gray-800 font-semibold">
                        <div className="flex items-center gap-1 "><Image src="/images/oclock.png" width={20} height={14} alt="VN" /> Hỗ trợ 24/7</div>
                        <div className="flex items-center gap-1"><Image src="/images/Hand Money.png" width={20} height={14} alt="VN" /> Miễn Phí Vận Chuyển</div>
                        <div className="flex items-center gap-1"><Image src="/images/clock.png" width={20} height={14} alt="VN" /> Giao Hàng Nhanh 2h</div>
                        <div className="flex items-center gap-1"><Image src="/images/refresh.png" width={20} height={14} alt="VN" /> 30 Ngày Đổi Trả</div>
                    </div>
                </div>
            </div>
            {/* Overlay FilterLayout */}
            {showFilter && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-30 z-40"
                        onClick={() => setShowFilter(false)}
                    />
                    <div className="fixed top-0 left-0 w-full h-full flex items-start z-50">
                        <div className="bg-transparent w-full h-full flex items-start">
                            <div className="mt-8 ml-8" onClick={e => e.stopPropagation()}>
                                <FilterLayout />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
};

export default Header;
