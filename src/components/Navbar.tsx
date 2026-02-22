"use client";

import React from "react";
import { Egg, Banknote } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 bg-white/30 backdrop-blur-md border-b border-white/20 transition-all">
            <div className="flex items-center gap-2 text-purple-800">
                <Egg className="w-8 h-8 text-pink-400 fill-pink-300" />
                <span className="font-bold text-xl tracking-tight uppercase">Páscoa Lucrativa</span>
            </div>

            <div className="hidden md:flex items-center gap-8 font-medium text-blue-900 border-x px-8 border-white/40">
                <a href="#comece-agora" className="hover:text-pink-500 transition-colors">O Método</a>
                <a href="#producao" className="hover:text-pink-500 transition-colors">Produção</a>
                <a href="#lucro" className="hover:text-pink-500 transition-colors">Lucro</a>
            </div>

            <button className="flex items-center gap-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white px-5 py-2.5 rounded-full font-bold shadow-[0_0_15px_rgba(255,182,193,0.6)] hover:shadow-[0_0_25px_rgba(195,177,225,0.8)] hover:scale-105 transition-all">
                <Banknote className="w-4 h-4" />
                Garantir Minha Vaga
            </button>
        </nav>
    );
}
