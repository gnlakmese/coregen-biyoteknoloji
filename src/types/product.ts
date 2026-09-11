export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductContent = {
  slug: string;
  /** Ana Sayfa'daki 4 kategoriden biri */
  category: string;
  subCategory: string;
  name: string;
  /**
   * Marka adı — varsayılan olarak gösterilmez (Product Catalog dokümanının
   * "marka adı gösterilmez" ilkesi). Yalnızca yetkili bayilik ilişkisi
   * bulunan markalar için (ör. DLAB, 2026-04 itibarıyla) bilinçli olarak
   * doldurulur ve arayüzde rozet olarak gösterilir.
   */
  brand?: string;
  /**
   * Admin panelinden yüklenen ürün görseli (public/uploads/products/...
   * altında saklanır). Yoksa ikon-tabanlı placeholder gösterilir.
   */
  imageUrl?: string;
  shortDescription: string;
  /** 2-4 satırlık paragraflar halinde detaylı açıklama */
  description: string[];
  technicalSpecs: ProductSpec[];
  usageAreas: string[];
  /** İlgili ürünlerin slug referansları */
  relatedProductSlugs: string[];
};

export type ProductCategoryInfo = {
  slug: string;
  name: string;
  description: string;
  subCategories: string[];
};
