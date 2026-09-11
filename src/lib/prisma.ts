import { PrismaClient } from "@prisma/client";

/**
 * Next.js geliştirme modunda her hot-reload'da yeni bir PrismaClient
 * örneği oluşmasını (ve bağlantı havuzunun tükenmesini) önlemek için
 * global singleton pattern kullanılır. Prod ortamında tek bir instance
 * zaten yeterlidir.
 */
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
