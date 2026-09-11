import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

import { footerNav, socialLinks } from "@/lib/nav-config";

const socialIcons = {
  Instagram: Instagram,
  LinkedIn: Linkedin,
  Facebook: Facebook,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-100 relative overflow-hidden border-t border-slate-200 text-slate-800">
      
      <div className="container relative z-10 grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1.2fr]">
        
        {/* Marka bloğu */}
        <div className="space-y-5 lg:pr-6">
          <Link href="/" className="inline-block transition-transform hover:scale-105">
            <span className="font-mono uppercase flex flex-col">
              <span className="text-slate-900 font-extrabold text-xl tracking-[0.15em]">COREGEN</span>
              <span className="text-slate-500 font-light text-[10px] tracking-[0.25em] mt-0.5">BİYOTEKNOLOJİ</span>
            </span>
          </Link>
          
          <p className="max-w-xs text-sm leading-relaxed text-slate-600">
            Moleküler biyoloji, genetik, genomik ve biyoinformatik alanlarında
            laboratuvar hizmetleri, bilimsel danışmanlık ve laboratuvar
            tedariki.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {socialLinks.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons];
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-all hover:border-primary hover:bg-primary hover:text-white shadow-sm"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Hizmetler */}
        <FooterColumn title={footerNav.hizmetler.title} href={footerNav.hizmetler.href} items={footerNav.hizmetler.items} />

        {/* Ürünler */}
        <FooterColumn title={footerNav.urunler.title} href={footerNav.urunler.href} items={footerNav.urunler.items} />

        {/* Kurumsal + Bilgi Merkezi */}
        <div className="space-y-8">
          <FooterColumn title={footerNav.kurumsal.title} items={footerNav.kurumsal.items} />
        </div>

        {/* İletişim */}
        <div className="space-y-5">
          <p className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
            İletişim
          </p>
          <ul className="space-y-4 text-sm text-slate-600">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
              <span className="leading-relaxed">Çiftlikköy Mah. Mimar Sinan Cad.<br/>No:24 Paradise Sitesi A Blok K:1 D:18<br/>Yenişehir, Mersin</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="tel:+905522207270" className="hover:text-primary transition-colors">0552 220 7270</a>
            </li>
            <li className="flex items-start gap-3 break-all">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href="mailto:info@coregenbiyoteknoloji.com" className="hover:text-primary transition-colors">info@coregenbiyoteknoloji.com</a>
            </li>
          </ul>
          <Link
            href="/iletisim"
            className="inline-block text-sm font-bold text-primary hover:underline transition-colors mt-2"
          >
            İletişim Formu →
          </Link>

          <div className="space-y-4 pt-4">
            <p className="font-mono text-xs uppercase tracking-widest text-primary font-bold">
              Bilgi Merkezi
            </p>
            <ul className="space-y-2.5 text-sm">
              {footerNav.bilgiMerkezi.items.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-slate-600 hover:text-primary transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Alt Telif Hakkı Çubuğu */}
      <div className="border-t border-slate-200 bg-white">
        <div className="container flex flex-col items-center justify-center gap-4 py-6 sm:flex-row">
          <p className="text-xs text-slate-500 font-mono tracking-widest uppercase">
            © {year} COREGEN BİYOTEKNOLOJİ. TÜM HAKLARI SAKLIDIR.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  href,
  items,
}: {
  title: string;
  href?: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div className="space-y-5">
      {href ? (
        <Link
          href={href}
          className="font-mono text-xs uppercase tracking-widest text-primary font-bold hover:underline transition-colors"
        >
          {title}
        </Link>
      ) : (
        <p className="font-mono text-xs uppercase tracking-widest text-primary font-bold">{title}</p>
      )}
      <ul className="space-y-3 text-sm">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-slate-600 hover:text-primary transition-colors">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      {href && (
        <Link href={href} className="inline-block text-sm font-bold text-primary hover:underline transition-colors mt-2">
          Tümünü Gör →
        </Link>
      )}
    </div>
  );
}