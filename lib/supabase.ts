import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Product = {
  id: string;
  name_fr: string;
  name_en?: string;
  slug: string;
  category: string;
  brand?: string;
  description_fr?: string;
  description_en?: string;
  specifications?: Record<string, string>;
  images?: string[];
  pdf_url?: string;
  featured?: boolean;
  active?: boolean;
};

export type Service = {
  id: string;
  name_fr: string;
  name_en?: string;
  slug: string;
  icon?: string;
  description_fr?: string;
  description_en?: string;
  features?: string[];
  images?: string[];
  active?: boolean;
  sort_order?: number;
};

export type Project = {
  id: string;
  title_fr: string;
  title_en?: string;
  slug: string;
  category: string;
  client?: string;
  location?: string;
  year?: number;
  description_fr?: string;
  images?: string[];
  featured?: boolean;
  active?: boolean;
};

export type BlogPost = {
  id: string;
  title_fr: string;
  slug: string;
  excerpt_fr?: string;
  content_fr?: string;
  cover_image?: string;
  published?: boolean;
  published_at?: string;
  created_at: string;
};

export type FaqItem = {
  id: string;
  question_fr: string;
  question_en?: string;
  answer_fr: string;
  answer_en?: string;
  category?: string;
  sort_order?: number;
};

export type JobOffer = {
  id: string;
  title_fr: string;
  title_en?: string;
  department?: string;
  location?: string;
  type?: string;
  description_fr?: string;
  requirements?: string[];
  active?: boolean;
  created_at: string;
};

export type Download = {
  id: string;
  title_fr: string;
  title_en?: string;
  category?: string;
  file_url: string;
  thumbnail?: string;
  active?: boolean;
};
