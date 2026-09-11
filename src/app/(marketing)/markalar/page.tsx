import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const brands = [
  { name: "Allsheng", logo: "/markalar/allsheng.jpeg" },
  { name: "Antibodies", logo: "/markalar/antibodies-com.avif" },
  { name: "ATCC", logo: "/markalar/atcc.jpeg" },
  { name: "Biosan", logo: "/markalar/biosan.jpeg" },
  { name: "Borox", logo: "/markalar/borox.png" },
  { name: "BT Lab", logo: "/markalar/btlab.jpeg" },
  { name: "Dlab", logo: "/markalar/dlab.png" },
  { name: "Elabscience", logo: "/markalar/elabscience.jpeg" },
  { name: "Eppendorf", logo: "/markalar/eppendorf.webp" },
  { name: "Fisher Scientific", logo: "/markalar/fisher-scientific.png" },
  { name: "Greiner", logo: "/markalar/greiner.png" },
  { name: "Isolab", logo: "/markalar/isolab.jpg" },
  { name: "Kirgen", logo: "/markalar/kirgen.png" },
  { name: "Merck", logo: "/markalar/merck.png" },
  { name: "MyBiosource", logo: "/markalar/my-bio-sure.png" },
  { name: "New England Biolabs", logo: "/markalar/New_England_Biolabs_logo.svg" },
  { name: "Nüve", logo: "/markalar/nuve.png" },
  { name: "Promega", logo: "/markalar/promega.webp" },
  { name: "Sartorius", logo: "/markalar/sartorius.jpeg" },
  { name: "Sigma-Aldrich", logo: "/markalar/sigma-aldrich.png" },
  { name: "Thermo Scientific", logo: "/markalar/thermofisher-scientific.png" },
];

export default function MarkalarPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 pb-20">
      <div className="container mx-auto px-4">
        {/* Başlık ve Açıklama */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Global İş Ortaklarımız ve Markalarımız
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Dünya markaları ile çalışıyoruz. Pek çok marka için bayiliğimiz mevcuttur. 
            İhtiyaçlarınız, orijinal ürün tedariği ve talepleriniz için bizimle iletişime geçebilirsiniz.
          </p>
          <div className="pt-4">
            <Button asChild size="lg" className="bg-pink-600 hover:bg-pink-700 text-white font-bold">
              <Link href="/iletisim">İletişime Geçin</Link>
            </Button>
          </div>
        </div>

        {/* Marka Logoları Grid Yapısı (Orijinal Renkli) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center justify-center h-36 transition-all duration-300 hover:shadow-md hover:border-pink-200 group"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logosu`}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105 p-2"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}