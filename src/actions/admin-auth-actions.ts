"use server";

import { cookies } from "next/headers";

import { ADMIN_SESSION_COOKIE, createSessionToken } from "@/lib/admin-session";

export type AdminLoginResult = { success: true } | { success: false; error: string };

/**
 * ÖNEMLİ / ŞEFFAFLIK NOTU: Kimlik bilgileri `ADMIN_EMAIL`/`ADMIN_PASSWORD`
 * ortam değişkenleriyle düz metin karşılaştırılır — Prisma `User` modeli
 * ve hash'lenmiş şifre saklama (bcrypt/argon2) Veritabanı Şeması adımında
 * gelecektir. Bu, tek-kullanıcılı geçici bir çözümdür; üretimde gerçek
 * kullanıcı yönetimi kurulana kadar `.env` dosyasındaki bu değerlerin
 * güçlü ve gizli tutulması önemlidir.
 */
export async function adminLogin(email: string, password: string): Promise<AdminLoginResult> {
  const expectedEmail = process.env.ADMIN_EMAIL;
  const expectedPassword = process.env.ADMIN_PASSWORD;

  if (!expectedEmail || !expectedPassword) {
    return {
      success: false,
      error: "Admin kimlik bilgileri sunucuda yapılandırılmamış (.env dosyasını kontrol edin).",
    };
  }

  if (email !== expectedEmail || password !== expectedPassword) {
    return { success: false, error: "E-posta veya şifre hatalı." };
  }

  const token = await createSessionToken(email);
  const cookieStore = await cookies();
  cookieStore.set(ADMIN_SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8, // 8 saat
  });

  return { success: true };
}

export async function adminLogout(): Promise<void> {
  const cookieStore = await cookies();
  cookieStore.delete(ADMIN_SESSION_COOKIE);
}
