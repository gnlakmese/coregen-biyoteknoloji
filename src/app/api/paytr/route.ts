import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // PayTR Mağaza Bilgileri (Bunları PayTR panelinden alıp .env dosyana eklemelisin)
    const merchant_id = process.env.PAYTR_MERCHANT_ID || "MAGAZA_ID_BURAYA";
    const merchant_key = process.env.PAYTR_MERCHANT_KEY || "MAGAZA_KEY_BURAYA";
    const merchant_salt = process.env.PAYTR_MERCHANT_SALT || "MAGAZA_SALT_BURAYA";

    // Müşteri ve Sipariş Bilgileri (Ön yüzden gelen veriler)
    const { email, amount, basket, orderId } = body;
    
    const user_ip = "85.105.x.x"; // Gerçek projede req.headers.get("x-forwarded-for") ile alınır
    const merchant_oid = orderId || `COREGEN-${Date.now()}`;
    const user_basket = Buffer.from(JSON.stringify(basket)).toString("base64");
    
    const payment_amount = amount * 100; // PayTR kuruş cinsinden ister (Örn: 1500 TL = 150000)
    const currency = "TL";
    const test_mode = "1"; // Canlıya alırken "0" yapılacak
    const no_installment = "0"; // Taksit yapılsın mı? (0: Evet, 1: Hayır)
    const max_installment = "12";
    
    const merchant_ok_url = "https://coregenbiyoteknoloji.com/odeme/basarili";
    const merchant_fail_url = "https://coregenbiyoteknoloji.com/odeme/hata";
    const timeout_limit = "30";
    const debug_on = "1";

    // Hash (Güvenlik İmzası) Oluşturma
    const hash_str = merchant_id + user_ip + merchant_oid + email + payment_amount + user_basket + no_installment + max_installment + currency + test_mode;
    const paytr_token = hash_str + merchant_salt;
    const token = crypto.createHmac("sha256", merchant_key).update(paytr_token).digest("base64");

    // PayTR'ye İstek Atma
    const formData = new URLSearchParams();
    formData.append("merchant_id", merchant_id);
    formData.append("user_ip", user_ip);
    formData.append("merchant_oid", merchant_oid);
    formData.append("email", email);
    formData.append("payment_amount", payment_amount.toString());
    formData.append("paytr_token", token);
    formData.append("user_basket", user_basket);
    formData.append("debug_on", debug_on);
    formData.append("no_installment", no_installment);
    formData.append("max_installment", max_installment);
    formData.append("user_name", "CoreGen Müşterisi");
    formData.append("user_address", "Mersin, Türkiye");
    formData.append("user_phone", "05555555555");
    formData.append("merchant_ok_url", merchant_ok_url);
    formData.append("merchant_fail_url", merchant_fail_url);
    formData.append("timeout_limit", timeout_limit);
    formData.append("currency", currency);
    formData.append("test_mode", test_mode);

    const response = await fetch("https://www.paytr.com/odeme/api/get-token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData,
    });

    const result = await response.json();

    if (result.status === "success") {
      return NextResponse.json({ token: result.token });
    } else {
      return NextResponse.json({ error: result.reason }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Sunucu hatası oluştu." }, { status: 500 });
  }
}