"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "@/data/products";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const activeProduct = products[0];

  return (
    <main
      className="relative min-h-screen text-slate-800 selection:bg-pink-300 selection:text-purple-900 transition-colors duration-1000"
      style={{ background: activeProduct.gradient }}
    >
      <Navbar />

      <div className="relative">
        <div className="fixed inset-0 pointer-events-none flex items-center justify-center -z-10 opacity-30 blur-sm">
          <div className="w-[60vw] h-[60vw] bg-white rounded-full mix-blend-overlay"></div>
        </div>

        {/* 3D Scrollytelling element */}
        <div className="absolute top-0 left-0 w-full h-[400vh] pointer-events-none z-10">
          <ProductBottleScroll folderPath={activeProduct.folderPath} />
        </div>

        {/* Content Sections mapped onto scrollable regions */}
        <div className="relative z-20">
          {/* Hero / Section 1 */}
          <section id="comece-agora" className="h-screen flex items-center justify-center md:justify-start px-8 md:px-24">
            <div className="max-w-[90%] md:max-w-md backdrop-blur-sm bg-white/20 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/50 shadow-2xl mix-blend-lighten text-center md:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-5xl font-black mb-4 leading-tight"
                style={{ color: activeProduct.textColor }}
              >
                {activeProduct.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl font-medium text-slate-700 opacity-90 mb-4"
              >
                {activeProduct.subName}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg text-slate-600 mb-8"
              >
                {activeProduct.section1.description}
              </motion.p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="producao" className="h-screen flex items-center justify-center md:justify-end px-8 md:px-24">
            <div className="max-w-[90%] md:max-w-md backdrop-blur-sm bg-white/30 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/60 shadow-2xl mix-blend-lighten text-center md:text-right">
              <h2 className="text-2xl md:text-5xl font-bold mb-4" style={{ color: activeProduct.textColor }}>
                {activeProduct.section2.title}
              </h2>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                {activeProduct.section2.description}
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="lucro" className="h-screen flex items-center justify-center md:justify-start px-8 md:px-24">
            <div className="max-w-[90%] md:max-w-md backdrop-blur-sm bg-white/30 p-6 md:p-8 rounded-2xl md:rounded-3xl border border-white/60 shadow-2xl mix-blend-lighten text-center md:text-left">
              <h2 className="text-2xl md:text-5xl font-bold mb-4" style={{ color: activeProduct.textColor }}>
                {activeProduct.section3.title}
              </h2>
              <p className="text-base md:text-lg text-slate-700 leading-relaxed">
                {activeProduct.section3.description}
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="h-screen flex items-center justify-center px-4 md:px-12">
            <div className="max-w-[95%] md:max-w-2xl text-center backdrop-blur-md bg-white/40 p-6 md:p-10 rounded-2xl md:rounded-3xl border border-white/80 shadow-[0_0_50px_rgba(255,255,255,0.4)]">
              <h2 className="text-3xl md:text-6xl font-black mb-6" style={{ color: activeProduct.textColor }}>
                {activeProduct.section4.title}
              </h2>
              <p className="text-lg md:text-2xl text-slate-700 mb-8 max-w-xl mx-auto">
                {activeProduct.section4.description}
              </p>

              <div className="flex justify-center mt-8">
                <button className="px-8 md:px-10 py-3 md:py-4 rounded-full font-bold shadow-xl text-lg md:text-xl transition-transform hover:scale-105 bg-gradient-to-r from-pink-400 to-purple-500 text-white animate-pulse hover:animate-none hover:shadow-[0_0_30px_rgba(255,182,193,0.8)]">
                  Quero Começar Agora
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
