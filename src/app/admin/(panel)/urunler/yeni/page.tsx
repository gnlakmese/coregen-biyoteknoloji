import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { ProductForm } from "@/components/admin/product-form";

export default function NewProductPage() {
  return (
    <div className="space-y-6 text-slate-800">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <span className="text-[10px] uppercase font-bold text-pink-600 bg-pink-50 px-2.5 py-0.5 rounded-full border border-pink-100">
          Envanter Yönetimi
        </span>
        <h1 className="text-2xl font-extrabold text-slate-900 mt-1">Yeni Ürün / Cihaz Ekle</h1>
        <p className="text-xs text-slate-500 mt-1">Laboratuvar kataloğu için ürün bilgilerini eksiksiz doldurun ve görsellerini yükleyin.</p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-md">
        <ProductForm />
      </div>
    </div>
  );
}