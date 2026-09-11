export interface ServiceCategoryOutline {
  category: string;
  description: string;
  items: { name: string; slug: string }[];
}

export interface ServiceContent {
  slug: string;
  category: string;
  name: string;
  heroDescription?: string;
  description?: string;
  importance?: string;
  deliverables?: string[];
  applicationAreas?: string[];
  scope?: string[];
  workflowSteps?: string[];
  requiredInfo?: string[];
  qualityControl?: string[];
  whyCoreGen?: string;
  faqs?: { question: string; answer: string }[];
  relatedServiceSlugs?: string[];
  unitType?: string;
  customFields?: any[];
  advantages?: string[];
}