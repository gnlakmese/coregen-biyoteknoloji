"use server";

import { prisma } from "@/lib/prisma";
import { quoteFormSchema } from "@/lib/validation/quote-schema";
import type { QuoteCartItem } from "@/types/quote";

export type SubmitQuoteResult =
  | { success: true; quoteNumber: string }
  | { success: false; error: string };

/**
 * Teklif Talebi Gönderimi — Prisma Sürümü
 * --------------------------------------------------------------------------
 * Artık Quote + QuoteItem kayıtları gerçekten PostgreSQL'e yazılıyor
 * (Veritabanı Şeması adımı tamamlandı). Kalan tek bağımlılık: e-posta
 * servis sağlayıcısı (Resend/SMTP — PRD'de açık karar #3, henüz
 * yanıtlanmadı). E-posta bildirimi kurulana kadar talep veritabanına
 * gerçekten kaydediliyor ve admin panelinden görüntülenebiliyor;
 * yalnızca otomatik bildirim e-postası eksik.
 *
 * QuoteItem.productId/serviceId'den yalnızca biri dolu olabilir (bkz.
 * schema.prisma'daki CHECK kısıtı notu). Sepetteki tüm kalemler şu an
 * yalnızca ürünlerden geldiği için (hizmet sayfalarında henüz "Teklife
 * Ekle" yok) serviceId hep null bırakılıyor.
 */
export async function submitQuote(
  contact: unknown,
  items: QuoteCartItem[],
): Promise<SubmitQuoteResult> {
  const parsed = quoteFormSchema.safeParse(contact);

  if (!parsed.success) {
    return { success: false, error: "Form bilgileri eksik veya hatalı." };
  }

  if (items.length === 0) {
    return { success: false, error: "Teklif sepetiniz boş." };
  }

  const quoteNumber = `TKL-${Date.now().toString(36).toUpperCase()}`;

  const products = await prisma.product.findMany({
    where: { slug: { in: items.map((item) => item.productSlug) } },
    select: { id: true, slug: true },
  });
  const productIdBySlug = new Map(products.map((p) => [p.slug, p.id]));

  await prisma.quote.create({
    data: {
      quoteNumber,
      firstName: parsed.data.firstName,
      lastName: parsed.data.lastName,
      institution: parsed.data.institution,
      department: parsed.data.department || null,
      phone: parsed.data.phone,
      email: parsed.data.email,
      city: parsed.data.city || null,
      note: parsed.data.note || null,
      kvkkConsent: parsed.data.kvkkConsent,
      items: {
        create: items.map((item) => ({
          productId: productIdBySlug.get(item.productSlug) ?? null,
          itemNameSnapshot: item.productName,
          categorySnapshot: item.category,
          quantity: item.quantity,
          note: item.note || null,
        })),
      },
    },
  });

  // TODO(E-posta sağlayıcısı kararı): admin bildirim e-postası + kullanıcı
  //      teşekkür e-postasını burada tetikle (Resend/SMTP seçildiğinde).

  return { success: true, quoteNumber };
}
