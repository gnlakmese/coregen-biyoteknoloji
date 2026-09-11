"use client";

import { Suspense } from "react";
import { AdminLoginForm } from "@/components/admin/admin-login-form";
import { Dna } from "lucide-react";

export default function AdminLoginPage() {
  const chars = ["A", "T", "G", "C"];
  const softColors = [
    "text-[#E91E63]", // Soft Pembe
    "text-[#E6C619]", // Soft Sarı
    "text-[#F2994A]", // Soft Turuncu
    "text-[#2D9CDB]", // Soft Mavi
    "text-[#27AE60]", // Soft Yeşil
    "text-[#9B51E0]"  // Soft Mor
  ];

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4">
      
      {/* ORGANİK VE AKICI DNA MATRIX YAĞMURU */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute inset-0 opacity-60 flex justify-between px-4">
          {Array.from({ length: 45 }).map((_, colIdx) => {
            const duration = 6 + (colIdx % 5); 
            const delay = (colIdx * 0.35) % 5; 
            const leftPercent = (colIdx / 45) * 100;
            
            return (
              <div
                key={colIdx}
                className="flex flex-col items-center font-mono font-extrabold text-sm space-y-7"
                style={{
                  position: "absolute",
                  top: "-150%",
                  left: `${leftPercent}%`,
                  animation: `dnaWaterfall ${duration}s linear infinite`,
                  animationDelay: `${delay}s`,
                }}
              >
                {Array.from({ length: 16 }).map((_, i) => {
                  const randomChar = chars[(colIdx + i) % chars.length];
                  const randomColor = softColors[(colIdx + i) % softColors.length];
                  return (
                    <span 
                      key={i} 
                      className={`${randomColor} select-none`} 
                      style={{ fontSize: `${((i + colIdx) % 2) * 4 + 15}px` }}
                    >
                      {randomChar}
                    </span>
                  );
                })}
              </div>
            );
          })}
        </div>

        <style>{`
          @keyframes dnaWaterfall {
            0% {
              transform: translateY(0%);
            }
            100% {
              transform: translateY(250vh);
            }
          }
        `}</style>
      </div>

      {/* ŞIK KOMPAKT GİRİŞ KARTI */}
      <div className="relative z-10 w-full max-w-sm space-y-5 bg-white/95 backdrop-blur-xl border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-2xl shadow-slate-300/50">
        {/* Logo Alanı (DNA İkonu + CoreGen Biyoteknoloji) */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2.5 bg-slate-50 px-4 py-2.5 rounded-2xl border border-slate-100 shadow-sm">
            <Dna className="w-6 h-6 text-pink-600 animate-pulse" />
            <span className="font-mono uppercase flex items-baseline">
              <span className="font-extrabold text-sm tracking-[0.15em] mr-1.5 text-gray-900">
                CoreGen
              </span>
              <span className="font-light text-[9px] tracking-[0.2em] text-gray-600">
                BİYOTEKNOLOJİ
              </span>
            </span>
          </div>
        </div>

        <div className="space-y-1 text-center">
          <span className="text-[10px] uppercase font-bold tracking-widest text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
            CoreGen Güvenli Portal
          </span>
          <h1 className="font-display text-xl font-extrabold text-slate-900 mt-1">Kurumsal & Müşteri Girişi</h1>
          <p className="text-[11px] text-slate-500">E-posta ve şifrenizle hesabınıza erişin</p>
        </div>

        <Suspense fallback={null}>
          <AdminLoginForm />
        </Suspense>

        <div className="text-center pt-2 border-t border-slate-100">
          <p className="text-[10px] text-slate-400">
            CoreGen Biyoteknoloji R&D Sistemleri
          </p>
        </div>
      </div>
    </div>
  );
}