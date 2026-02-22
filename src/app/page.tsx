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

          {/* Nova Seção: Oportunidade */}
          <section className="h-screen flex items-center justify-center px-4 md:px-12 relative z-20">
            <div className="max-w-[95%] md:max-w-4xl text-center backdrop-blur-xl bg-white/40 p-8 md:p-12 rounded-3xl border border-white/80 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-black mb-6 text-purple-900 leading-tight">
                Comece agora a construir seu novo negócio e lucre alto nesta Páscoa, direto da sua cozinha.
              </h2>
              <p className="text-lg md:text-2xl text-slate-700 mb-8 max-w-2xl mx-auto font-medium">
                Você não precisa de equipamentos caros ou experiência prévia. Nosso método foi desenhado para te dar resultados rápidos com o que você já tem em casa.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-6 md:mt-10">
                <div className="bg-white/60 p-6 rounded-2xl shadow-sm border border-white text-center hover:-translate-y-1 transition-transform">
                  <h3 className="text-xl font-bold text-pink-600 mb-2">Baixo Custo</h3>
                  <p className="text-sm md:text-base text-slate-600">Inicie com os utensílios que você já possui na cozinha.</p>
                </div>
                <div className="bg-white/60 p-6 rounded-2xl shadow-sm border border-white text-center hover:-translate-y-1 transition-transform">
                  <h3 className="text-xl font-bold text-purple-600 mb-2">Rápido Retorno</h3>
                  <p className="text-sm md:text-base text-slate-600">Aprenda hoje e comece a pegar encomendas amanhã.</p>
                </div>
                <div className="bg-white/60 p-6 rounded-2xl shadow-sm border border-white text-center hover:-translate-y-1 transition-transform">
                  <h3 className="text-xl font-bold text-blue-600 mb-2">Vendas Certas</h3>
                  <p className="text-sm md:text-base text-slate-600">Estratégias validadas para você vender todo o estoque.</p>
                </div>
              </div>
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
          <section className="min-h-screen flex items-center justify-center px-4 md:px-12 py-24 relative z-20">
            <div className="max-w-[95%] md:max-w-4xl text-center backdrop-blur-xl bg-white/70 p-6 md:p-12 rounded-2xl md:rounded-3xl border border-white/80 shadow-[0_0_50px_rgba(255,255,255,0.4)]">
              <h2 className="text-3xl md:text-6xl font-black mb-6" style={{ color: activeProduct.textColor }}>
                {activeProduct.section4.title}
              </h2>
              <p className="text-lg md:text-2xl text-slate-700 mb-8 max-w-2xl mx-auto font-medium">
                {activeProduct.section4.description}
              </p>

              <div className="bg-white/60 rounded-2xl p-6 md:p-8 text-left mb-8 border border-white/80 shadow-md">
                <h3 className="text-2xl md:text-3xl font-black text-center text-pink-600 mb-6">
                  O que você irá receber:
                </h3>

                <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
                  <div className="flex items-center justify-center gap-3 bg-white/90 px-4 py-3 rounded-xl shadow-sm text-purple-900 font-bold border border-purple-100">
                    <span className="text-2xl">🎥</span> Aulas passo a passo
                  </div>
                  <div className="flex items-center justify-center gap-3 bg-white/90 px-4 py-3 rounded-xl shadow-sm text-purple-900 font-bold border border-purple-100">
                    <span className="text-2xl">📚</span> Material de Apoio
                  </div>
                  <div className="flex items-center justify-center gap-3 bg-white/90 px-4 py-3 rounded-xl shadow-sm text-purple-900 font-bold border border-purple-100">
                    <span className="text-2xl">🍫</span> Temperagem Descomplicada
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {[
                    { id: 1, title: 'Comece por aqui' },
                    { id: 2, title: 'Técnicas Infalíveis' },
                    { id: 3, title: 'Modelando a Casca' },
                    { id: 4, title: 'Recheios' },
                    { id: 5, title: 'Ovos de Colher' },
                    { id: 6, title: 'Ovos Especiais' },
                    { id: 7, title: 'Ovo Coloridos' },
                    { id: 8, title: 'Ovos Infantis' },
                    { id: 9, title: 'Embalagens - Técnicas e tipos' },
                    { id: 10, title: 'Bônus Exclusivos' },
                  ].map((mod, i) => (
                    <motion.div
                      key={mod.id}
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.4, delay: i * 0.05 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white rounded-xl overflow-hidden shadow-md border border-pink-100 flex flex-col items-center group cursor-pointer"
                    >
                      <div className="w-full h-24 md:h-32 overflow-hidden bg-pink-50 flex items-center justify-center">
                        <motion.img
                          src={`/images/site/m${mod.id}.webp`}
                          alt={mod.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="p-3 text-center w-full flex-grow flex flex-col items-center justify-center gap-1.5">
                        <span className={`text-white px-2 py-0.5 rounded-md text-[10px] md:text-xs font-black tracking-wider uppercase ${mod.id === 10 ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-pink-400'}`}>
                          Módulo {mod.id.toString().padStart(2, '0')}
                        </span>
                        <span className="text-slate-800 font-bold text-xs md:text-sm leading-tight group-hover:text-pink-600 transition-colors">
                          {mod.title}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center mt-8">
                <button className="px-8 md:px-10 py-4 md:py-5 rounded-full font-black shadow-2xl text-xl transition-transform hover:scale-105 bg-gradient-to-r from-pink-400 to-purple-500 text-white animate-pulse hover:animate-none hover:shadow-[0_0_40px_rgba(255,182,193,1)]">
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
