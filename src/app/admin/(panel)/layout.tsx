import type { Metadata } from "next";

import { AdminHeader } from "@/components/admin/admin-header";
import { AdminSidebar } from "@/components/admin/admin-sidebar";
import { MatrixDnaBackground } from "@/components/admin/MatrixDnaBackground";

export const metadata: Metadata = {
  title: { default: "Admin Paneli", template: "%s | Admin Paneli — CoreGen" },
  robots: { index: false, follow: false },
};

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 flex bg-white text-slate-800 overflow-hidden">
      {/* Ferah Beyaz Arka Plan Üzerine Hafif Şeffaf DNA Matrix Efekti */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <MatrixDnaBackground />
      </div>

      {/* Sol Sidebar */}
      <div className="relative z-20 shrink-0 border-r border-slate-200 bg-white/80 backdrop-blur-md">
        <AdminSidebar />
      </div>

      {/* Sağ İçerik Alanı */}
      <div className="relative z-10 flex flex-1 flex-col overflow-hidden bg-slate-50/50">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto p-6 lg:p-10">
          <div className="max-w-7xl mx-auto bg-white/80 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-6 lg:p-8 shadow-xl min-h-[85vh]">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}