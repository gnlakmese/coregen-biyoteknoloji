export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogTable = {
  title: string;
  headers: string[];
  rows: string[][];
};

export type BlogFaq = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string; // ISO 8601
  readingTimeMinutes: number;
  sections: BlogSection[];
  /** Content & Copywriting Guidelines: her blog en az 1 tablo içermeli */
  table?: BlogTable;
  /** Content & Copywriting Guidelines: her blog en az 1 infografik önerisi içermeli */
  infographicSuggestion: string;
  faqs: BlogFaq[];
  sources: string[];
  relatedServiceSlugs: string[];
};

/** Ana Sayfa "Blog" bölümü ve liste kartları için özet şekil. */
export type BlogPostSummary = Pick<BlogPost, "slug" | "title" | "excerpt" | "category" | "publishedAt">;
