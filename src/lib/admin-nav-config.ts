export type AdminNavItem = {
  label: string;
  href: string;
  icon: string;
};

/**
 * Kategoriler, ayrı bir modül olarak değil Ürünler modülü içinde bir
 * bölüm olarak ele alınıyor (yalnızca 4 kategori olduğu ve ayrı bir tam
 * sayfa CRUD akışını gerektirmeyecek kadar küçük olduğu için — bilinçli
 * kapsam sadeleştirmesi).
 */
export const adminNavItems: AdminNavItem[] = [
  { label: "Profiller", href: "/admin/profiller", icon: "Users" },
  { label: "Teklifler & Talepler", href: "/admin/teklifler", icon: "FileText" },
  { label: "Mesajlaşma Sistemi", href: "/admin/mesajlar", icon: "Mail" },
  { label: "Ürünler & Cihazlar", href: "/admin/urunler", icon: "Boxes" },
  { label: "Hizmet Kataloğu", href: "/admin/hizmetler", icon: "FlaskConical" },
  { label: "Teknik Servis", href: "/admin/teknik-servis", icon: "Wrench" },
  { label: "Kariyer", href: "/admin/kariyer", icon: "Briefcase" },
  { label: "Blog", href: "/admin/blog", icon: "Newspaper" },
  { label: "SSS", href: "/admin/sss", icon: "HelpCircle" },
  { label: "SEO", href: "/admin/seo", icon: "Search" },
  { label: "Medya", href: "/admin/medya", icon: "Image" },
  { label: "Ayarlar", href: "/admin/ayarlar", icon: "Settings" },
  { label: "Analytics", href: "/admin/analytics", icon: "BarChart3" },
];