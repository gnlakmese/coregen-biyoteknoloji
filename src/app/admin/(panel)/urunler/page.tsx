import { MatrixDnaBackground } from "@/components/admin/MatrixDnaBackground";
import { Package, Plus, AlertCircle } from "lucide-react";
import Link from "next/link";

export default async function AdminProductsPage() {
  let products: any[] = [];
  let categories: any[] = [];
  let dbError = false;

  try {
    // Veritabanı bağlantı denemesi
  } catch (error) {
    dbError = true;
  }

  return (
    <div className="space-y-6 text-slate-800 relative">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div>
          <span className="text-[10px] uppercase font-bold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
            Katalog Yönetimi
          </span>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-1">Ürünler, Cihazlar ve Hizmetler</h1>
        </div>
        <Link
          href="/admin/urunler/yeni"
          className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-5 py-3 rounded-xl text-xs transition-all shadow-md shadow-pink-600/20"
        >
          <Plus className="w-4 h-4" /> Yeni Ürün / Cihaz Ekle
        </Link>
      </div>

      {dbError && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs p-4 rounded-xl flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-600" />
          <span>Veritabanı sunucusuna şu an erişilemiyor (Prisma offline mod). Önbellek verileri gösteriliyor.</span>
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-md space-y-4">
        <h3 className="font-bold text-sm text-slate-900 border-b border-slate-100 pb-3">Kayıtlı Ürün ve Cihaz Kataloğu</h3>
        
        <div className="divide-y divide-slate-100">
          {products.length === 0 && !dbError ? (
            <div className="text-center py-16 space-y-3">
              <Package className="w-10 h-10 text-slate-300 mx-auto" />
              <p className="text-xs text-slate-500">Henüz kayıtlı ürün veya cihaz bulunmuyor.</p>
            </div>
          ) : (
            <div className="text-center py-12 text-xs text-slate-500">
              <Package className="w-8 h-8 text-pink-600 mx-auto mb-2" />
              CoreGen Laboratuvar envanteri ve ürün listesi aktif olarak yönetiliyor.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}