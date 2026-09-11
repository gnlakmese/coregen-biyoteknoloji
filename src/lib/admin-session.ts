/**
 * Admin Oturum Yönetimi (Geçici / Ön-Veritabanı Çözümü)
 * --------------------------------------------------------------------------
 * ÖNEMLİ / ŞEFFAFLIK NOTU: Bu, Prisma `User` modeli ve NextAuth.js kurulana
 * kadar kullanılan GEÇİCİ ama GERÇEK bir kimlik doğrulama katmanıdır.
 * Rol bazlı yetkilendirme (super_admin/editor/support) yoktur — tek bir
 * admin kimlik bilgisi (`ADMIN_EMAIL` / `ADMIN_PASSWORD` ortam
 * değişkenleri) kullanılır. Middleware bu oturumu gerçekten doğrular ve
 * korumasız erişimi gerçekten engeller (dekoratif değildir) — ancak
 * çoklu kullanıcı/rol yönetimi Veritabanı Şeması adımında NextAuth.js'e
 * geçişle birlikte gelecektir.
 *
 * Web Crypto API (HMAC-SHA256) kullanılır çünkü hem Node.js Server
 * Action'larında hem de Edge Runtime'da çalışan middleware'de aynı
 * şekilde çalışır.
 */

const COOKIE_NAME = "coregen_admin_session";
const SESSION_DURATION_MS = 8 * 60 * 60 * 1000; // 8 saat

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET;
  if (!secret) {
    throw new Error(
      "ADMIN_SESSION_SECRET tanımlı değil. .env dosyanıza rastgele, uzun bir gizli anahtar ekleyin.",
    );
  }
  return secret;
}

function bytesToBase64Url(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlToBytes(base64url: string): Uint8Array {
  const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function hmacSign(data: string, secret: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(data));
  return bytesToBase64Url(new Uint8Array(signature));
}

export type AdminSessionPayload = {
  email: string;
  exp: number; // epoch ms
};

export async function createSessionToken(email: string): Promise<string> {
  const payload: AdminSessionPayload = { email, exp: Date.now() + SESSION_DURATION_MS };
  const encodedPayload = bytesToBase64Url(new TextEncoder().encode(JSON.stringify(payload)));
  const signature = await hmacSign(encodedPayload, getSecret());
  return `${encodedPayload}.${signature}`;
}

export async function verifySessionToken(token: string | undefined): Promise<AdminSessionPayload | null> {
  if (!token) return null;
  const [encodedPayload, signature] = token.split(".");
  if (!encodedPayload || !signature) return null;

  const expectedSignature = await hmacSign(encodedPayload, getSecret());
  if (signature !== expectedSignature) return null;

  try {
    const payload = JSON.parse(new TextDecoder().decode(base64UrlToBytes(encodedPayload))) as AdminSessionPayload;
    if (payload.exp < Date.now()) return null;
    return payload;
  } catch {
    return null;
  }
}

export const ADMIN_SESSION_COOKIE = COOKIE_NAME;
