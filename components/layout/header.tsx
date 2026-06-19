'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';
import {
  Menu, X, ChevronDown, Sun, Moon, Globe, Phone, Mail,
  MapPin, Clock, ChevronRight
} from 'lucide-react';
import { COMPANY, NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

const languages = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', flag: '🇲🇦' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [lang, setLang] = useState('fr');
  const [langOpen, setLangOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const isHome = pathname === '/';
  const isTransparent = isHome && !isScrolled && !isMobileOpen;

  return (
    <>
      {/* Top Bar */}
      <div className={cn(
        'hidden lg:block text-white text-sm py-2 transition-all duration-300',
        isTransparent ? 'bg-brand-steel/80' : 'bg-brand-steel'
      )}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href={`tel:${COMPANY.phone_primary}`} className="flex items-center gap-2 hover:text-brand-gold transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>{COMPANY.phones[0]}</span>
            </a>
            <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-2 hover:text-brand-gold transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>{COMPANY.email}</span>
            </a>
            <div className="flex items-center gap-2 text-neutral-300">
              <Clock className="w-3.5 h-3.5" />
              <span>Lun–Ven: 9h00–17h00</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-neutral-300">
              <MapPin className="w-3.5 h-3.5" />
              <span>Sidi Maarouf, Casablanca</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        ref={headerRef}
        className={cn(
          'sticky top-0 z-50 transition-all duration-500',
          isScrolled || isMobileOpen
            ? 'bg-white dark:bg-brand-steel shadow-lg shadow-black/10'
            : isHome
            ? 'bg-brand-steel/70 backdrop-blur-md'
            : 'bg-white dark:bg-brand-steel shadow-sm'
        )}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <div className={cn(
                'relative transition-all duration-300 group-hover:scale-105',
                isHome && !isScrolled && !isMobileOpen
                  ? 'brightness-0 invert'
                  : isScrolled || isMobileOpen
                  ? 'dark:brightness-0 dark:invert'
                  : 'dark:brightness-0 dark:invert'
              )}>
                <img
                  src="https://ascenseurchantier.ma/wp-content/uploads/2025/11/logo.png"
                  alt="CASAGRUE Logo"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => link.children && setActiveDropdown(link.href)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
                      pathname === link.href
                        ? 'text-brand-red'
                        : isTransparent
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-neutral-700 dark:text-neutral-200 hover:text-brand-red dark:hover:text-brand-red hover:bg-neutral-50 dark:hover:bg-white/5'
                    )}
                  >
                    {link.label}
                    {link.children && (
                      <ChevronDown className={cn(
                        'w-3.5 h-3.5 transition-transform',
                        activeDropdown === link.href ? 'rotate-180' : ''
                      )} />
                    )}
                  </Link>

                  {/* Mega dropdown */}
                  {link.children && (
                    <AnimatePresence>
                      {activeDropdown === link.href && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-0 pt-2 w-64"
                        >
                          <div className="bg-white dark:bg-brand-steel-light rounded-xl shadow-2xl border border-neutral-100 dark:border-white/10 overflow-hidden">
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="flex items-center justify-between px-4 py-3 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-brand-red hover:text-white transition-colors group/item"
                              >
                                <span>{child.label}</span>
                                <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className={cn(
                  'p-2 rounded-lg transition-colors',
                  isTransparent
                    ? 'text-white/80 hover:text-white hover:bg-white/10'
                    : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10'
                )}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Language Selector */}
              <div className="relative hidden md:block">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className={cn(
                    'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isTransparent
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/10'
                  )}
                >
                  <Globe className="w-4 h-4" />
                  <span>{lang.toUpperCase()}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      className="absolute right-0 top-full mt-1 w-40 bg-white dark:bg-brand-steel-light rounded-lg shadow-xl border border-neutral-100 dark:border-white/10 overflow-hidden z-50"
                    >
                      {languages.map((l) => (
                        <button
                          key={l.code}
                          onClick={() => { setLang(l.code); setLangOpen(false); }}
                          className={cn(
                            'flex items-center gap-3 w-full px-4 py-2.5 text-sm transition-colors hover:bg-brand-red hover:text-white',
                            lang === l.code
                              ? 'text-brand-red font-medium'
                              : 'text-neutral-700 dark:text-neutral-200'
                          )}
                        >
                          <span>{l.flag}</span>
                          <span>{l.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <Link
                href="/quote"
                className="hidden lg:flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 shadow-lg shadow-brand-red/25 hover:shadow-brand-red/40 hover:scale-105"
              >
                Demander un Devis
              </Link>

              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className={cn(
                  'xl:hidden p-2 rounded-lg transition-colors',
                  isTransparent
                    ? 'text-white hover:bg-white/10'
                    : 'text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-white/10'
                )}
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white dark:bg-brand-steel border-t border-neutral-100 dark:border-white/10 overflow-hidden"
            >
              <div className="container mx-auto px-6 py-4 space-y-1">
                {NAV_LINKS.map((link) => (
                  <div key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        'flex items-center justify-between py-3 px-4 rounded-lg text-base font-medium transition-colors',
                        pathname === link.href
                          ? 'bg-brand-red/10 text-brand-red'
                          : 'text-neutral-700 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-white/5'
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 mt-1 space-y-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-2 py-2 px-4 rounded-lg text-sm text-neutral-600 dark:text-neutral-300 hover:text-brand-red hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors"
                          >
                            <ChevronRight className="w-3 h-3" />
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-3 border-t border-neutral-100 dark:border-white/10">
                  <Link
                    href="/quote"
                    className="flex items-center justify-center gap-2 bg-brand-red text-white py-3 px-6 rounded-lg font-semibold text-base w-full"
                  >
                    Demander un Devis
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
