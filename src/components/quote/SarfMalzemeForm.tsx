"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function SarfMalzemeForm() {
  const [formData, setFormData] = useState({
    urunAdi: "",
    markasi: "",
    katalogKodu: "",
    miktari: "",
    isimSoyisim: "",
    kurumAdi: "",
    departmani: "",
    mail: "",
    telefon: "",
    vergiNoTc: "",
    adres: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sarf Malzeme ve Cihaz Talep Formu:", formData);
    alert("Talebiniz başarıyla alınmıştır. En kısa sürede tarafınıza geri dönüş yapılacaktır.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
      <div>
        <h3 className="text-2xl font-bold text-gray-900">Sarf Malzeme ve Cihaz Talep Formu</h3>
        <p className="text-sm text-gray-500 mt-1">İhtiyacınız olan ürünler için bilgileri doldurarak hızlıca teklif isteyebilirsiniz.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Ürün Adı *</label>
          <Input required name="urunAdi" value={formData.urunAdi} onChange={handleChange} placeholder="Örn: Real-Time PCR Kiti / Pipet Ucu" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Markası *</label>
          <Input required name="markasi" value={formData.markasi} onChange={handleChange} placeholder="Örn: Eppendorf / Merck" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Katalog Kodu *</label>
          <Input required name="katalogKodu" value={formData.katalogKodu} onChange={handleChange} placeholder="Ürün Katalog Kodu" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Miktarı / Adedi *</label>
          <Input required name="miktari" value={formData.miktari} onChange={handleChange} placeholder="Adet veya miktar belirtiniz" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">İsim Soyisim *</label>
          <Input required name="isimSoyisim" value={formData.isimSoyisim} onChange={handleChange} placeholder="Adınız Soyadınız" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Kurum Adı *</label>
          <Input required name="kurumAdi" value={formData.kurumAdi} onChange={handleChange} placeholder="Üniversite / Hastane / Firma Adı" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Departmanı</label>
          <Input name="departmani" value={formData.departmani} onChange={handleChange} placeholder="Örn: Biyoloji Bölümü / AR-GE" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">E-posta Adresi *</label>
          <Input required type="email" name="mail" value={formData.mail} onChange={handleChange} placeholder="ornek@kurum.edu.tr" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Telefon Numarası *</label>
          <Input required type="tel" name="telefon" value={formData.telefon} onChange={handleChange} placeholder="05XX XXX XX XX" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1">Fatura İçin Vergi No / T.C. No *</label>
          <Input required name="vergiNoTc" value={formData.vergiNoTc} onChange={handleChange} placeholder="Vergi No veya T.C. Kimlik No" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1">Teslimat / Fatura Adresi *</label>
        <Textarea required name="adres" value={formData.adres} onChange={handleChange} placeholder="Açık adresinizi yazınız..." rows={3} />
      </div>

      <Button type="submit" className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 text-lg">
        Talebi Gönder / Teklif İste
      </Button>
    </form>
  );
}