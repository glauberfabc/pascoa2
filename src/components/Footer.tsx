"use client";

import React from "react";
import { Egg, Banknote, BookOpen } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-blue-200 to-sky-100 py-16 px-6 text-center border-t border-white/50 relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-pink-200 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl opacity-60"></div>

            <div className="flex flex-col items-center gap-6 relative z-10">
                <div className="flex items-center gap-3">
                    <Egg className="w-8 h-8 text-pink-400" />
                    <Banknote className="w-8 h-8 text-green-500" />
                    <BookOpen className="w-8 h-8 text-blue-400" />
                </div>
                <p className="max-w-md mx-auto text-blue-900 font-medium">
                    Comece agora a construir seu novo negócio e lucre alto nesta Páscoa, direto da sua cozinha.
                </p>
                <button className="bg-pink-400 hover:bg-pink-500 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform hover:-translate-y-1">
                    Garantir Vaga
                </button>
                <p className="text-sm text-sky-800 opacity-70 mt-4">
                    © {new Date().getFullYear()} Páscoa Lucrativa. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
