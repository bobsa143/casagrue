
-- Products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_fr text NOT NULL,
  name_en text,
  name_ar text,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  brand text,
  description_fr text,
  description_en text,
  description_ar text,
  specifications jsonb DEFAULT '{}',
  images jsonb DEFAULT '[]',
  pdf_url text,
  featured boolean DEFAULT false,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
CREATE POLICY "select_products" ON products FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "insert_products" ON products FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "update_products" ON products FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_products" ON products FOR DELETE TO authenticated USING (true);

-- Services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name_fr text NOT NULL,
  name_en text,
  name_ar text,
  slug text UNIQUE NOT NULL,
  icon text,
  description_fr text,
  description_en text,
  description_ar text,
  features jsonb DEFAULT '[]',
  images jsonb DEFAULT '[]',
  active boolean DEFAULT true,
  sort_order int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
CREATE POLICY "select_services" ON services FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "insert_services" ON services FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "update_services" ON services FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_services" ON services FOR DELETE TO authenticated USING (true);

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_fr text NOT NULL,
  title_en text,
  title_ar text,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  client text,
  location text,
  year int,
  description_fr text,
  description_en text,
  images jsonb DEFAULT '[]',
  featured boolean DEFAULT false,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "select_projects" ON projects FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "insert_projects" ON projects FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "update_projects" ON projects FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_projects" ON projects FOR DELETE TO authenticated USING (true);

-- Blog posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_fr text NOT NULL,
  title_en text,
  title_ar text,
  slug text UNIQUE NOT NULL,
  excerpt_fr text,
  content_fr text,
  content_en text,
  cover_image text,
  published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "select_blog" ON blog_posts FOR SELECT TO anon, authenticated USING (published = true OR auth.role() = 'authenticated');
CREATE POLICY "insert_blog" ON blog_posts FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "update_blog" ON blog_posts FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_blog" ON blog_posts FOR DELETE TO authenticated USING (true);

-- Quote requests table
CREATE TABLE IF NOT EXISTS quote_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text,
  email text NOT NULL,
  phone text,
  service text,
  message text,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);
ALTER TABLE quote_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "insert_quotes" ON quote_requests FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "select_quotes" ON quote_requests FOR SELECT TO authenticated USING (true);
CREATE POLICY "update_quotes" ON quote_requests FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_quotes" ON quote_requests FOR DELETE TO authenticated USING (true);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text,
  message text NOT NULL,
  status text DEFAULT 'unread',
  created_at timestamptz DEFAULT now()
);
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "insert_contact" ON contact_messages FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "select_contact" ON contact_messages FOR SELECT TO authenticated USING (true);
CREATE POLICY "update_contact" ON contact_messages FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_contact" ON contact_messages FOR DELETE TO authenticated USING (true);

-- Newsletter subscribers
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "insert_newsletter" ON newsletter_subscribers FOR INSERT TO anon, authenticated WITH CHECK (true);
CREATE POLICY "select_newsletter" ON newsletter_subscribers FOR SELECT TO authenticated USING (true);
CREATE POLICY "update_newsletter" ON newsletter_subscribers FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_newsletter" ON newsletter_subscribers FOR DELETE TO authenticated USING (true);

-- Downloads (PDFs/Catalogues)
CREATE TABLE IF NOT EXISTS downloads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_fr text NOT NULL,
  title_en text,
  category text,
  file_url text NOT NULL,
  thumbnail text,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE downloads ENABLE ROW LEVEL SECURITY;
CREATE POLICY "select_downloads" ON downloads FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "insert_downloads" ON downloads FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "update_downloads" ON downloads FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_downloads" ON downloads FOR DELETE TO authenticated USING (true);

-- Job offers
CREATE TABLE IF NOT EXISTS job_offers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title_fr text NOT NULL,
  title_en text,
  department text,
  location text DEFAULT 'Casablanca, Maroc',
  type text DEFAULT 'CDI',
  description_fr text,
  requirements jsonb DEFAULT '[]',
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE job_offers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "select_jobs" ON job_offers FOR SELECT TO anon, authenticated USING (active = true);
CREATE POLICY "insert_jobs" ON job_offers FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "update_jobs" ON job_offers FOR UPDATE TO authenticated USING (true) WITH CHECK (true);
CREATE POLICY "delete_jobs" ON job_offers FOR DELETE TO authenticated USING (true);
