import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FloatingWidgets from '@/components/layout/floating-widgets';
import CookieBanner from '@/components/layout/cookie-banner';

export const metadata: Metadata = {
  title: {
    default: 'CASAGRUE - Leader National en Grues à Tour | Location & Vente au Maroc',
    template: '%s | CASAGRUE',
  },
  description:
    'CASAGRUE, leader national marocain de la location et vente de grues à tour, ascenseurs de chantier et plateformes élévatrices. Distributeur officiel JASO et Zoomlion.',
  keywords: [
    'grue tour maroc',
    'location grue casablanca',
    'ascenseur chantier maroc',
    'JASO distributeur maroc',
    'Zoomlion maroc',
    'CASAGRUE',
    'grue construction maroc',
    'maintenance grue maroc',
  ],
  authors: [{ name: 'CASAGRUE' }],
  creator: 'CASAGRUE',
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://casagrue.ma',
    siteName: 'CASAGRUE',
    title: 'CASAGRUE - Leader National en Grues à Tour | Maroc',
    description:
      'Leader national marocain de la location et vente de grues à tour. Distributeur officiel JASO et Zoomlion.',
    images: [{ url: 'https://casagrue.ma/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CASAGRUE - Grues à Tour Maroc',
    description: 'Leader national marocain de la location et vente de grues à tour.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: 'https://casagrue.ma',
    languages: { 'fr-MA': 'https://casagrue.ma', 'en': 'https://casagrue.ma/en', 'ar-MA': 'https://casagrue.ma/ar' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="https://ascenseurchantier.ma/wp-content/uploads/2025/11/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://ascenseurchantier.ma/wp-content/uploads/2025/11/logo.png" />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <FloatingWidgets />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
