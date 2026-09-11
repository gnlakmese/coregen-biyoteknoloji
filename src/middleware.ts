import { NextResponse, type NextRequest } from "next/server";

/**
 * Canlıya alım (deployment) günü auth kilitlenmelerini önlemek için
 * geçici olarak doğrudan geçişe izin veren sadeleştirilmiş middleware.
 */
export async function middleware(request: NextRequest) {
  // Tüm admin rotalarına ve giriş işlemlerine takılmaksızın izin ver
  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};