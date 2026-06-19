'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard, Package, Settings, FolderOpen, MessageSquare,
  FileText, Briefcase, Download, HelpCircle, Bell, LogOut, Menu, X,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Tableau de Bord', href: '/admin', icon: LayoutDashboard },
  { label: 'Produits', href: '/admin/products', icon: Package },
  { label: 'Services', href: '/admin/services', icon: Settings },
  { label: 'Projets', href: '/admin/projects', icon: FolderOpen },
  { label: 'Demandes de Devis', href: '/admin/quotes', icon: MessageSquare },
  { label: 'Messages Contact', href: '/admin/messages', icon: MessageSquare },
  { label: 'Actualités', href: '/admin/news', icon: FileText },
  { label: 'Carrières', href: '/admin/careers', icon: Briefcase },
  { label: 'Téléchargements', href: '/admin/downloads', icon: Download },
  { label: 'FAQ', href: '/admin/faq', icon: HelpCircle },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-neutral-900 flex">
      {/* Sidebar */}
      <aside className={cn(
        'fixed inset-y-0 left-0 z-50 w-64 bg-brand-steel text-white flex flex-col transform transition-transform duration-300 lg:translate-x-0 lg:static',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      )}>
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <Link href="/admin" className="flex items-center gap-3">
            <img
              src="https://ascenseurchantier.ma/wp-content/uploads/2025/11/logo.png"
              alt="CASAGRUE"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all',
                  active
                    ? 'bg-brand-red text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                )}
              >
                <Icon className="w-5 h-5" />
                {item.label}
                {active && <ChevronRight className="w-4 h-4 ml-auto" />}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Retour au Site
          </Link>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Bar */}
        <header className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-4 ml-auto">
            <button className="relative p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors">
              <Bell className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-brand-red" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brand-red flex items-center justify-center text-white font-bold text-sm">
                AD
              </div>
              <div className="hidden md:block">
                <div className="text-sm font-medium text-neutral-900 dark:text-white">Administrateur</div>
                <div className="text-xs text-neutral-500">CASAGRUE</div>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
