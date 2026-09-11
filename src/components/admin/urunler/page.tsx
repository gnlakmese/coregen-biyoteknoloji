import { MatrixDnaBackground } from "@/components/admin/MatrixDnaBackground";
import Image from "next/image";
import { Package, Plus } from "lucide-react";

export default async function AdminProductsPage() {
  return (
    <div className="relative min-h-screen p-8 text-gray-900 overflow-hidden">
      <MatrixDnaBackground />

      <div className="relative z-10 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-gray-200 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-md border border-pink-100 shrink-0">
              <Image src="/form-gorselleri/lab-sarf-cihaz-form.jpg" alt="Ürünler" fill className="object-cover" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-wider font-bold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full">
                CoreGen Yönetim
              </span>
              <h1 className="text-2xl font-extrabold text-gray-900 mt-1">Ürünler, Cihazlar ve Sarf Malzemeler</h1>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-5 py-3 rounded-xl text-xs transition-all shadow-md">
            <Plus className="w-4 h-4" /> Yeni Ürün / Cihaz Ekle
          </button>
        </div>

        <div className="bg-white/90 backdrop-blur-md border border-gray-200 rounded-3xl p-6 shadow-sm">
          <h3 className="font-bold text-sm text-gray-800 border-b border-gray-100 pb-3 mb-4">Kayıtlı Ürün Kataloğu</h3>
          <div className="text-center py-12 space-y-3">
            <Package className="w-10 h-10 text-gray-300 mx-auto" />
            <p className="text-xs text-gray-500">Sistemde kayıtlı ürünler listeleniyor.</p>
          </div>
        </div>
      </div>
    </div>
  );
}