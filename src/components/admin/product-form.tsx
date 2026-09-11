"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { ArrowRight, Loader2, Upload, X } from "lucide-react";

import { saveProduct } from "@/actions/admin-product-actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { ProductContent } from "@/types/product";

// HPLC, İlaç, Kimya ve Analitik Lab Cihazları Dahil Kapsamlı Kategoriler
const extendedProductCategories = [
  { name: "Analitik ve Kromatografi Cihazları (HPLC, GC-MS, LC-MS/MS)" },
  { name: "Spektrofotometre ve Optik Cihazlar" },
  { name: "Laboratuvar Sarf Malzemeleri" },
  { name: "PCR ve Genetik Analiz Kitleri / Cihazları" },
  { name: "Kimyasallar, Reaktifler ve Çözücüler" },
  { name: "İlaç Ar-Ge ve Kalite Kontrol Cihazları" },
  { name: "Hücre Kültürü ve Biyoreaktör Sistemleri" },
  { name: "Termal Kontrol, Santrifüj ve Çalkalayıcılar" },
  { name: "Genel Laboratuvar Cihazları ve Donanımları" }
];

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-xs font-bold text-slate-700">
        {label} {required && <span className="text-pink-600">*</span>}
      </label>
      {children}
    </div>
  );
}

export function ProductForm({ product }: { product?: ProductContent }) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Çoklu görsel önizleme yönetimi
  const [imagePreviews, setImagePreviews] = useState<string[]>(
    product?.imageUrl ? [product.imageUrl] : []
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleImagesChange(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    const newPreviews: string[] = [];
    Array.from(files).forEach((file) => {
      newPreviews.push(URL.createObjectURL(file));
    });

    setImagePreviews((prev) => [...prev, ...newPreviews]);
  }

  function removeImage(indexToRemove: number) {
    setImagePreviews((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  }

  async function handleSubmit(formData: FormData) {
    setError(null);
    setIsSubmitting(true);

    if (product) {
      formData.set("existingSlug", product.slug);
    }

    const result = await saveProduct(formData);

    if (!result.success) {
      setError(result.error);
      setIsSubmitting(false);
      return;
    }

    router.push("/admin/urunler");
    router.refresh();
  }

  return (
    <form action={handleSubmit} className="grid gap-8 lg:grid-cols-[1fr_340px] text-slate-800">
      <div className="space-y-5 bg-white p-6 lg:p-8 rounded-3xl border border-slate-200 shadow-md">
        <Field label="Ürün / Cihaz Adı" htmlFor="name" required>
          <Input id="name" name="name" required defaultValue={product?.name} className="bg-slate-50 border-slate-200 text-slate-900" />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Kategori" htmlFor="category" required>
            <select
              id="category"
              name="category"
              required
              defaultValue={product?.category}
              className="flex h-10 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-600"
            >
              <option value="" disabled>
                Laboratuvar veya Kategori Seçin
              </option>
              {extendedProductCategories.map((category) => (
                <option key={category.name} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Alt Kategori" htmlFor="subCategory" required>
            <Input id="subCategory" name="subCategory" required defaultValue={product?.subCategory} className="bg-slate-50 border-slate-200 text-slate-900" placeholder="ör. HPLC Sistemleri, UV Spektrofotometre" />
          </Field>
        </div>

        <Field label="Marka (opsiyonel)" htmlFor="brand">
          <Input id="brand" name="brand" placeholder="ör. Shimadzu, Agilent, DLAB — boş bırakılırsa marka gösterilmez" defaultValue={product?.brand} className="bg-slate-50 border-slate-200 text-slate-900" />
        </Field>

        <Field label="Kısa Açıklama" htmlFor="shortDescription" required>
          <Input id="shortDescription" name="shortDescription" required defaultValue={product?.shortDescription} className="bg-slate-50 border-slate-200 text-slate-900" />
        </Field>

        <Field label="Ürün Açıklaması (her satır ayrı paragraf)" htmlFor="description">
          <textarea
            id="description"
            name="description"
            rows={5}
            defaultValue={product?.description.join("\n")}
            className="flex w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-600"
          />
        </Field>

        <Field label="Teknik Özellikler (her satır: Etiket: Değer)" htmlFor="technicalSpecs">
          <textarea
            id="technicalSpecs"
            name="technicalSpecs"
            rows={4}
            placeholder={"Akış Hızı: 0.001 - 10.0 mL/min\nDalga Boyu: 190 - 900 nm\nSaklama Koşulu: Oda Sıcaklığı"}
            defaultValue={product?.technicalSpecs.map((s) => `${s.label}: ${s.value}`).join("\n")}
            className="flex w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-600"
          />
        </Field>

        <Field label="Kullanım Alanları (her satır ayrı madde)" htmlFor="usageAreas">
          <textarea
            id="usageAreas"
            name="usageAreas"
            rows={3}
            defaultValue={product?.usageAreas.join("\n")}
            className="flex w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-600"
          />
        </Field>

        {error && (
          <p className="rounded-md bg-rose-50 border border-rose-200 px-4 py-3 text-xs text-rose-700">{error}</p>
        )}

        <Button type="submit" disabled={isSubmitting} className="bg-pink-600 hover:bg-pink-700 text-white font-bold text-xs py-3 rounded-xl w-full sm:w-auto shadow-md shadow-pink-600/20">
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin w-4 h-4 mr-2" />
              Kaydediliyor...
            </>
          ) : (
            <>
              {product ? "Değişiklikleri Kaydet" : "Ürünü / Cihazı Ekle"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>

      {/* Çoklu Görsel Yükleme Alanı */}
      <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-4 h-fit">
        <div className="space-y-1">
          <label className="text-xs font-bold text-slate-900 block">Ürün / Cihaz Görselleri</label>
          <p className="text-[11px] text-slate-500">Birden fazla yüksek çözünürlüklü görsel yükleyebilirsiniz.</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {imagePreviews.map((preview, index) => (
            <div key={index} className="relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
              <Image src={preview} alt={`Önizleme ${index + 1}`} fill className="object-cover" unoptimized />
              <button
                type="button"
                onClick={() => removeImage(index)}
                aria-label="Görseli kaldır"
                className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/80 text-white shadow hover:bg-rose-600"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ))}

          <label
            htmlFor="images"
            className="flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-slate-300 text-center transition-colors hover:border-pink-600 bg-slate-50 hover:bg-pink-50/50"
          >
            <Upload className="h-5 w-5 text-pink-600" />
            <span className="px-2 text-[10px] font-medium text-slate-600">Görsel Ekle</span>
          </label>
        </div>

        <input
          ref={fileInputRef}
          id="images"
          name="images"
          type="file"
          multiple
          accept="image/png,image/jpeg,image/webp"
          onChange={handleImagesChange}
          className="sr-only"
        />
      </div>
    </form>
  );
}