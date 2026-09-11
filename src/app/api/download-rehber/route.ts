import { NextResponse } from "next/server";

export async function GET() {
  const htmlContent = `<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>CoreGen Biyoteknoloji - Numune Gönderim Rehberi</title>
    <style>
        body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #2c3e50; line-height: 1.6; margin: 40px; background: #fff; }
        .header { text-align: center; border-bottom: 3px solid #db2780; padding-bottom: 20px; margin-bottom: 30px; }
        .header h1 { color: #ce186a; font-size: 26px; margin: 0; }
        .header p { color: #7f8c8d; font-size: 14px; margin-top: 5px; }
        
        .visual-banner {
            width: 100%;
            height: 90px;
            background: linear-gradient(135deg, #db2780 0%, #0891b2 100%);
            color: white;
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            font-size: 16px;
            font-weight: bold;
            margin-bottom: 30px;
        }

        h2 { color: #0891b2; font-size: 15px; border-left: 4px solid #db2780; padding-left: 10px; margin-top: 25px; }
        p, li { font-size: 12px; text-align: justify; color: #334155; }
        ul, ol { padding-left: 20px; }
        
        table { width: 100%; border-collapse: collapse; margin-top: 15px; margin-bottom: 15px; font-size: 11px; }
        th, td { border: 1px solid #cbd5e1; padding: 6px; text-align: left; }
        th { background-color: #f1f5f9; color: #0f172a; }
        
        .footer-note { text-align: center; margin-top: 40px; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; pt-4; }
    </style>
</head>
<body>
    <div class="header">
        <h1>CoreGen Biyoteknoloji</h1>
        <p>Bilimsel Mükemmeliyet ve Moleküler Çözümler Platformu</p>
    </div>

    <div class="visual-banner">
        Numune Gönderim ve Hazırlık Kılavuzu
    </div>

    <h2>1. Giriş: Numune Göndermeden Önce Bilmeniz Gerekenler</h2>
    <p>CoreGen Biyoteknoloji olarak, yürüttüğünüz bilimsel araştırmaların ve ticari projelerin başarısının en temel yapı taşının, yüksek kaliteli ve doğru şekilde hazırlanmış numuneler olduğunu biliyoruz. "Çöp girerse, çöp çıkar" ilkesi temeldir; analiz sonuçlarının güvenilirliği tamamen numunenizin kalitesine ve laboratuvarımıza ulaşana kadar korunan bütünlüğüne bağlıdır.</p>

    <h2>2. Numune Göndermeden Önce Hangi Bilgileri Vermeliyim?</h2>
    <ul>
        <li><strong>İletişim Bilgileri:</strong> Ad-Soyad, Kurum/Üniversite/Laboratuvar, E-posta, Telefon.</li>
        <li><strong>Proje Bilgileri:</strong> Proje adı, kısa araştırma amacı.</li>
        <li><strong>Analiz Talebi:</strong> İstenen hizmet (Örn: WES, RNA-Seq, RT-qPCR vb.).</li>
        <li><strong>Numune Detayları:</strong> Numune türü, sayısı, kaynağı ve mevcut saklama koşulu (-20°C, -80°C vb.).</li>
    </ul>

    <h2>3. Hangi Numune Türleri Kabul Edilebilir?</h2>
    <p>DNA (Genomik DNA, PCR ürünleri), RNA (Total RNA, Doku kaynaklı), Biyolojik Örnekler (Kan, doku, hücre) ve Metagenomik örnekler (Toprak, su, dışkı) kabul edilmektedir. Gönderim öncesi mutlaka teyit alınız.</p>

    <h2>4. Analize Göre Numune Gereksinimleri</h2>
    <table>
        <thead>
            <tr>
                <th>Analiz</th>
                <th>Numune</th>
                <th>Temel Gereksinim</th>
                <th>Önemli Noktalar</th>
            </tr>
        </thead>
        <tbody>
            <tr><td>DNA İzolasyonu</td><td>Doku/Kan/Hücre</td><td>Taze veya dondurulmuş</td><td>Mümkünse taze gönderim</td></tr>
            <tr><td>RNA İzolasyonu</td><td>Taze Doku</td><td>RNA koruyucu solüsyon</td><td>RNase kontaminasyonuna dikkat</td></tr>
            <tr><td>WGS / WES</td><td>Genomik DNA</td><td>Yüksek bütünlük</td><td>Fragmentasyon derecesi kritik</td></tr>
            <tr><td>RNA-Seq</td><td>Total RNA</td><td>Yüksek RIN değeri</td><td>Degradasyondan korunmalı</td></tr>
        </tbody>
    </table>

    <h2>9. Numune Etiketleme</h2>
    <p>Her tüpü benzersiz bir numune kodu (Örn: CG-001) ile etiketleyin. Tüp üzerine kesinlikle kişisel sağlık bilgisi yazmayın ve kodların formla %100 uyumlu olmasını sağlayın.</p>

    <h2>15. Sık Yapılan Hatalar</h2>
    <ol>
        <li>Etiketsiz numune göndermek.</li>
        <li>Kodların formla eşleşmemesi.</li>
        <li>Yetersiz miktarda DNA/RNA göndermek.</li>
        <li>Kargo süresince soğuk zinciri korumamak.</li>
        <li>İletişim kurmadan doğrudan kargo yapmak.</li>
    </ol>

    <div class="footer-note">
        <p>CoreGen Biyoteknoloji | Yenişehir, Mersin | info@coregenbiyoteknoloji.com | 0552 220 7270</p>
    </div>
</body>
</html>`;

  return new NextResponse(htmlContent, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": 'attachment; filename="CoreGen-Numune-Gonderim-Rehberi.html"',
    },
  });
}
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    // public klasörünün içindeki dosya yolu
    const filePath = path.join(process.cwd(), "public", "numune-gonderim-rehberi.pdf");
    
    if (!fs.existsSync(filePath)) {
      return new NextResponse("Dosya bulunamadı", { status: 404 });
    }

    const fileBuffer = fs.readFileSync(filePath);

    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="CoreGen-Numune-Gonderim-Rehberi.pdf"',
      },
    });
  } catch (error) {
    return new NextResponse("İndirme hatası", { status: 500 });
  }
}