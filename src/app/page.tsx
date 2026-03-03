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

              <div className="flex flex-col items-center mt-12 w-full gap-12">

                {/* Vídeo Wistia */}
                <div className="w-full max-w-xs md:max-w-sm mx-auto rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/50 relative z-30 transition-transform hover:scale-[1.02] duration-500 bg-black/5">
                  <div style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                    <iframe
                      src="https://fast.wistia.net/embed/iframe/hoau3i9o1j?seo=false&videoFoam=true"
                      title="Apresentação do Curso"
                      allow="autoplay; fullscreen"
                      allowTransparency={true}
                      frameBorder="0"
                      scrolling="no"
                      className="wistia_embed"
                      name="wistia_embed"
                      width="100%"
                      height="100%"
                      style={{ position: 'absolute', top: 0, left: 0 }}
                    ></iframe>
                  </div>
                  <script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>
                </div>

                {/* Offer Card Moderno */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  className="w-full max-w-2xl mx-auto"
                >
                  <div className="relative group rounded-4xl p-[3px] overflow-hidden shadow-[0_0_50px_rgba(236,72,153,0.3)] hover:shadow-[0_0_80px_rgba(236,72,153,0.5)] transition-shadow duration-700">
                    {/* Fundo gradiente animado da borda */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-[length:200%_auto] animate-gradient opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative bg-white/95 backdrop-blur-3xl rounded-[29px] p-8 md:p-12 text-center flex flex-col items-center h-full border border-white/40">

                      {/* Badge Flutuante */}
                      <div className="absolute -top-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-black text-sm px-6 py-2 rounded-full shadow-lg border-2 border-white animate-bounce">
                        OFERTA ESPECIAL
                      </div>

                      <h3 className="text-3xl md:text-5xl font-black text-slate-800 mb-2 mt-4">
                        Curso Completo
                      </h3>
                      <p className="text-lg md:text-xl text-slate-600 font-medium mb-8">
                        Acesso imediato a todas as aulas + bônus exclusivos.
                      </p>

                      <div className="flex flex-col items-center justify-center mb-8 bg-pink-50/50 w-full py-6 rounded-2xl border border-pink-100 relative overflow-hidden">
                        {/* Detalhe visual de fundo */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>

                        <span className="text-slate-400 line-through text-xl font-bold mb-1 relative z-10">De R$ 197,00</span>
                        <div className="flex items-start text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-black drop-shadow-sm relative z-10">
                          <span className="mt-2 text-3xl md:text-5xl mr-1">R$</span>
                          <span className="text-7xl md:text-9xl leading-none tracking-tighter hover:scale-105 transition-transform cursor-default">37</span>
                          <span className="mt-2 text-3xl md:text-5xl">,00</span>
                        </div>
                        <span className="text-sm font-bold text-green-600 mt-4 bg-green-100 px-4 py-1.5 rounded-full border border-green-200 uppercase tracking-wider relative z-10 items-center flex gap-1.5">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                          Pagamento Único
                        </span>
                      </div>

                      <ul className="text-left w-full space-y-4 mb-10 pl-2">
                        {[
                          'Acesso Vitalício ao curso completo',
                          'Todas as planilhas e materiais de apoio',
                          'Certificado de Conclusão exclusivo',
                          'Garantia incondicional de 7 dias'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-slate-700 font-bold text-base md:text-lg">
                            <div className="mt-0.5 bg-gradient-to-br from-green-400 to-green-600 rounded-full p-1 shadow-sm shadow-green-200">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <button className="w-full relative overflow-hidden group/btn px-8 md:px-10 py-5 md:py-6 rounded-2xl font-black text-xl md:text-2xl shadow-[0_15px_40px_-5px_rgba(236,72,153,0.5)] transition-all hover:scale-[1.03] active:scale-[0.98] bg-gradient-to-r from-pink-500 to-purple-600 text-white flex items-center justify-center gap-3 border-b-4 border-purple-800">
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover/btn:animate-shimmer bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"></div>

                        <span className="relative z-10 flex items-center gap-3 tracking-wide">
                          QUERO COMEÇAR AGORA
                          <svg className="w-7 h-7 group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                        </span>
                      </button>

                      <div className="mt-6 flex flex-col items-center justify-center gap-2 w-full opacity-80">
                        <p className="flex items-center gap-2 text-sm font-bold text-slate-500">
                          <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                          Compra 100% Segura
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
