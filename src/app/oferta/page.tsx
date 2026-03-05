"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const CountdownBox = () => {
  const [timeLeft, setTimeLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div id="ultima-chance" className="w-full bg-red-50 border border-red-200 rounded-3xl p-6 md:p-8 text-center my-8 shadow-inner relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-red-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <h2 className="text-3xl md:text-5xl font-black text-red-600 mb-4 animate-bounce relative z-10 w-full whitespace-normal">
        ⚠️ ÚLTIMA CHANCE! ⚠️
      </h2>
      <p className="text-lg md:text-xl text-red-800 font-bold mb-6 relative z-10 w-full whitespace-normal">
        Essa oferta exclusiva com <span className="underline">desconto extra</span> vai expirar em:
      </p>
      <div className="flex gap-3 md:gap-4 justify-center items-center relative z-10">
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-b from-red-600 to-red-700 text-white font-black text-4xl md:text-6xl p-4 md:p-6 rounded-2xl shadow-xl border-t-2 border-red-400 w-20 md:w-28 flex justify-center">
            {String(minutes).padStart(2, '0')}
          </div>
          <span className="text-red-700 font-black mt-2 text-sm md:text-base tracking-widest whitespace-normal">MINUTOS</span>
        </div>
        <div className="text-red-600 font-black text-4xl md:text-6xl pb-6 animate-pulse">:</div>
        <div className="flex flex-col items-center">
          <div className="bg-gradient-to-b from-red-600 to-red-700 text-white font-black text-4xl md:text-6xl p-4 md:p-6 rounded-2xl shadow-xl border-t-2 border-red-400 w-20 md:w-28 flex justify-center">
            {String(seconds).padStart(2, '0')}
          </div>
          <span className="text-red-700 font-black mt-2 text-sm md:text-base tracking-widest whitespace-normal">SEGUNDOS</span>
        </div>
      </div>
    </div>
  );
};

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
          <section id="virada-de-chave" className="min-h-screen flex items-center justify-center px-4 md:px-12 py-24 relative z-20">
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

                {/* Planos Section */}
                <CountdownBox />

                <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pb-16">

                  {/* Plano Básico */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative group rounded-3xl p-[2px] mt-0 md:mt-8 overflow-hidden bg-slate-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative bg-white/95 backdrop-blur-3xl rounded-[22px] p-8 text-center flex flex-col h-full">
                      <h3 className="text-2xl font-bold text-slate-500 mb-2 mt-4">
                        Plano Básico
                      </h3>
                      <p className="text-sm text-slate-400 font-medium mb-6">
                        O essencial para começar a lucrar na Páscoa.
                      </p>

                      <div className="flex flex-col items-center justify-center mb-8 bg-slate-50/50 w-full py-4 rounded-xl border border-slate-100 relative">
                        <div className="flex items-start text-slate-700 font-black drop-shadow-sm">
                          <span className="mt-2 text-2xl mr-1">R$</span>
                          <span className="text-5xl leading-none tracking-tighter">8</span>
                          <span className="mt-1 text-2xl">,90</span>
                        </div>
                      </div>

                      <ul className="text-left w-full space-y-3 mb-8 pl-1 flex-grow">
                        {[
                          'Aulas Passo a Passo',
                          'Livro Digital Receitas'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-600 font-medium text-sm md:text-base">
                            <div className="mt-0.5 bg-slate-300 rounded-full p-0.5">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => {
                          window.location.href = "https://ggcheckout.com.br/checkout/v3/Bhi9kTWrEx6yerd2uZZr";
                        }}
                        className="w-full relative px-6 py-4 rounded-xl font-bold text-lg transition-all bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-300 flex items-center justify-center gap-2 mt-auto"
                      >
                        COMEÇAR BÁSICO
                      </button>
                    </div>
                  </motion.div>

                  {/* Plano Completo Moderno */}
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4, delay: 0.2 }}
                    className="relative group rounded-4xl p-[3px] overflow-hidden shadow-[0_0_50px_rgba(236,72,153,0.3)] hover:shadow-[0_0_80px_rgba(236,72,153,0.5)] transition-shadow duration-700 md:-mt-4 md:mb-4 z-10"
                  >
                    {/* Fundo gradiente animado da borda */}
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-purple-500 to-yellow-500 bg-[length:200%_auto] animate-gradient opacity-90 transition-opacity duration-500"></div>

                    <div className="relative bg-white backdrop-blur-3xl rounded-[29px] p-8 md:p-10 text-center flex flex-col items-center h-full border-2 border-white/60">

                      {/* Badge Flutuante */}
                      <div className="absolute -top-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-black text-sm px-6 py-1.5 rounded-full shadow-lg border-2 border-white animate-bounce shadow-pink-300/50">
                        RECOMENDADO
                      </div>

                      <h3 className="text-3xl md:text-4xl font-black text-slate-800 mb-2 mt-4">
                        Plano Completo
                      </h3>
                      <p className="text-base text-pink-600 font-bold mb-6">
                        Tudo do básico + Bônus VIP
                      </p>

                      <div className="flex flex-col items-center justify-center mb-8 bg-gradient-to-b from-pink-50 to-white w-full py-6 rounded-2xl border border-pink-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>

                        <span className="text-slate-400 line-through text-lg font-bold mb-1 relative z-10">De R$ 197,00</span>
                        <div className="flex items-start text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600 font-black drop-shadow-sm relative z-10">
                          <span className="mt-2 text-3xl mr-1">R$</span>
                          <span className="text-6xl md:text-8xl leading-none tracking-tighter hover:scale-105 transition-transform cursor-default">14</span>
                          <span className="mt-2 text-3xl">,90</span>
                        </div>
                      </div>

                      <ul className="text-left w-full space-y-3 mb-10 pl-2">
                        {[
                          'Aulas Passo a Passo',
                          'Livro Digital Receitas',
                          'Confeiteira pra tira dúvidas',
                          'Casca Dragê Crocante',
                          '62 Recheios de dar água na boca',
                          'Recheando Mini Ovos',
                          'Decorações que encantam',
                          'Bônus 1: Como Precificar',
                          'Bônus 2: Embalagem e Validade'
                        ].map((item, i) => (
                          <li key={i} className="flex items-start gap-4 text-slate-700 font-bold text-sm md:text-base">
                            <div className="mt-0.5 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full p-1 shadow-sm shadow-pink-200">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => {
                          window.location.href = "https://ggcheckout.com.br/checkout/v3/HB859SHOL25bc9LSd7FG";
                        }}
                        className="w-full relative overflow-hidden group/btn px-6 py-5 rounded-2xl font-black text-xl shadow-[0_10px_30px_-5px_rgba(236,72,153,0.5)] transition-all hover:scale-[1.03] active:scale-[0.98] bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-[length:200%_auto] hover:bg-right text-white flex items-center justify-center gap-3 mt-auto"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          QUERO O COMPLETO
                          <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                        </span>
                      </button>
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
