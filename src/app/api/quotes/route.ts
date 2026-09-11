import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { ad, soyad, kurum, departman, email, telefon, notlar, items } = body;

    // Zorunlu alan kontrolü
    if (!ad || !soyad || !kurum || !email || !telefon || !items || items.length === 0) {
      return NextResponse.json({ error: "Zorunlu alanlar eksik." }, { status: 400 });
    }

    // Prisma ile veritabanına kaydetme
    const newQuote = await prisma.quoteRequest.create({
      data: {
        ad,
        soyad,
        kurum,
        departman,
        email,
        telefon,
        notlar: notlar || null,
        items, // JSON olarak sepet içeriği
      },
    });

    return NextResponse.json({ success: true, data: newQuote }, { status: 201 });
  } catch (error) {
    console.error("Teklif kayıt hatası:", error);
    return NextResponse.json({ error: "Sunucu hatası oluştu." }, { status: 500 });
  }
}