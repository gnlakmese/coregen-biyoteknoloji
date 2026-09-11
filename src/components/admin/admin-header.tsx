"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { LogOut, Menu, X, Plus } from "lucide-react";

import { adminLogout } from "@/actions/admin-auth-actions";
import { Button } from "@/components/ui/button";
import { adminNavItems } from "@/lib/admin-nav-config";
import { iconMap } from "@/lib/icon-map";
import { cn } from "@/lib/utils";

export function AdminHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Sadece Gönül Akmeşe (Admin) oturum açmışsa "Hizmet Ekle" butonunu göster
  useEffect(() => {
    try {
      const userStr = localStorage.getItem("coregen_user");
      if (userStr) {
        const user = JSON.parse(userStr);
        if (user.email === "gonulakmese@coregenbiyoteknoloji.com") {
          setIsAdmin(true);
        }
      }
    } catch (e) {
      // Storage okuma hatası koruması
    }
  }, []);

  const currentPage = adminNavItems.find((item) =>
    item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href),
  );

  async function handleLogout() {
    await adminLogout();
    router.push("/admin/giris");
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-border bg-background/80 backdrop-blur-md px-5">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          aria-label="Menüyü aç"
          onClick={() => setMobileOpen(true)}
        >
          <Menu />
        </Button>
        <h1 className="font-display text-base font-semibold text-foreground">
          {currentPage?.label ?? "Admin Paneli"}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        {/* Hizmet Ekle Butonu - Sadece Admin (Gönül Akmeşe) Görür */}
        {isAdmin && (
          <Button asChild variant="default" size="sm" className="bg-pink-600 hover:bg-pink-700 text-white">
            <Link href="/admin/hizmetler">
              <Plus className="h-4 w-4 mr-1" />
              Hizmet Ekle
            </Link>
          </Button>
        )}

        <Button variant="ghost" size="sm" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-1" />
          Çıkış Yap
        </Button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="absolute inset-0 bg-foreground/20" onClick={() => setMobileOpen(false)} />
          <nav className="relative flex w-64 flex-col bg-card p-4 shadow-xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-display text-sm font-semibold">Admin Paneli</span>
              <Button variant="ghost" size="icon" aria-label="Kapat" onClick={() => setMobileOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-0.5">
              {adminNavItems.map((item) => {
                const Icon = iconMap[item.icon as keyof typeof iconMap];
                const isActive = item.href === "/admin" ? pathname === "/admin" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-2.5 rounded-md px-3 py-2 text-sm font-medium",
                      isActive ? "bg-primary text-primary-foreground" : "text-foreground/70",
                    )}
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}