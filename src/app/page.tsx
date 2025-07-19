'use client'
import Header from "@/component/layout/Header";
import FilterLayout from "@/component/layout/FilterLayout";
import { useState } from "react";
import Banner from "@/component/banner";
import TopProduct from "@/component/TopProduct";
import ProductList from "@/component/ProductList";
import StoreHighlights from "@/component/StoreHighlights";
import Footer from "@/component/layout/Footer";


export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="min-h-screen bg-[#e7e7e7] relative">
      <Header onOpenFilter={() => setShowSidebar(true)} />
      {showSidebar && (
        <>
          <div
            className="fixed inset-0 bg-gray-500/50 z-40"
            onClick={() => setShowSidebar(false)}
          />
          <div className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl">
            <div className="bg-white rounded-xl shadow flex overflow-hidden">
              <div className="relative w-full" onClick={e => e.stopPropagation()}>
                <button
                  className="absolute top-2 right-2 z-10 text-gray-400 hover:text-blue-600"
                  onClick={() => setShowSidebar(false)}
                  aria-label="Đóng danh mục"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 6L14 14M14 6L6 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
                <FilterLayout />
              </div>
            </div>
          </div>
        </>
      )}
      <Banner />
      <TopProduct />
      <ProductList /> 
      <StoreHighlights />
      <Footer />
    </div>
  );
}
