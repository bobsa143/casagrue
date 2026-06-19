'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Package, MessageSquare, FolderOpen, TrendingUp, Users, Eye, ArrowRight, Clock } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    products: 0,
    quotes: 0,
    messages: 0,
    projects: 0,
  });
  const [recentQuotes, setRecentQuotes] = useState<any[]>([]);

  useEffect(() => {
    const loadStats = async () => {
      const [p, q, m, pr] = await Promise.all([
        supabase.from('products').select('id', { count: 'exact' }),
        supabase.from('quote_requests').select('id', { count: 'exact' }),
        supabase.from('contact_messages').select('id', { count: 'exact' }),
        supabase.from('projects').select('id', { count: 'exact' }),
      ]);
      setStats({
        products: p.count ?? 0,
        quotes: q.count ?? 0,
        messages: m.count ?? 0,
        projects: pr.count ?? 0,
      });
    };
    const loadQuotes = async () => {
      const { data } = await supabase
        .from('quote_requests')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(5);
      setRecentQuotes(data ?? []);
    };
    loadStats();
    loadQuotes();
  }, []);

  const statCards = [
    { label: 'Produits Actifs', value: stats.products, icon: Package, color: 'bg-blue-500', href: '/admin/products' },
    { label: 'Demandes de Devis', value: stats.quotes, icon: MessageSquare, color: 'bg-brand-red', href: '/admin/quotes' },
    { label: 'Messages Reçus', value: stats.messages, icon: Users, color: 'bg-green-500', href: '/admin/messages' },
    { label: 'Projets Réalisés', value: stats.projects, icon: FolderOpen, color: 'bg-orange-500', href: '/admin/projects' },
  ];

  const quickLinks = [
    { label: 'Ajouter un Produit', href: '/admin/products/new', icon: Package },
    { label: 'Voir les Devis', href: '/admin/quotes', icon: MessageSquare },
    { label: 'Gérer les Projets', href: '/admin/projects', icon: FolderOpen },
    { label: 'Actualités', href: '/admin/news', icon: TrendingUp },
  ];

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="font-display font-black text-2xl text-neutral-900 dark:text-white">
          Tableau de Bord
        </h1>
        <p className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">Bienvenue sur le panneau d'administration CASAGRUE</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {statCards.map((card) => {
          const Icon = card.icon;
          return (
            <Link
              key={card.label}
              href={card.href}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-4 h-4 text-neutral-400 group-hover:text-brand-red transition-colors" />
              </div>
              <div className="font-display font-black text-3xl text-neutral-900 dark:text-white">{card.value}</div>
              <div className="text-neutral-500 dark:text-neutral-400 text-sm mt-1">{card.label}</div>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Quotes */}
        <div className="lg:col-span-2 bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b border-neutral-100 dark:border-neutral-700">
            <h2 className="font-display font-bold text-lg text-neutral-900 dark:text-white">Dernières Demandes de Devis</h2>
            <Link href="/admin/quotes" className="text-brand-red text-sm font-semibold hover:text-brand-red-dark">
              Voir tout
            </Link>
          </div>
          {recentQuotes.length === 0 ? (
            <div className="p-12 text-center text-neutral-400 dark:text-neutral-500">
              <MessageSquare className="w-10 h-10 mx-auto mb-3 opacity-40" />
              <p>Aucune demande pour l'instant</p>
            </div>
          ) : (
            <div className="divide-y divide-neutral-100 dark:divide-neutral-700">
              {recentQuotes.map((q) => (
                <div key={q.id} className="px-6 py-4 flex items-center justify-between">
                  <div>
                    <div className="font-medium text-neutral-900 dark:text-white text-sm">{q.name}</div>
                    <div className="text-neutral-500 text-xs mt-0.5">{q.email} — {q.service}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      q.status === 'new' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400'
                    }`}>
                      {q.status === 'new' ? 'Nouveau' : 'Traité'}
                    </span>
                    <span className="text-neutral-400 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(q.created_at).toLocaleDateString('fr-MA')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 overflow-hidden">
          <div className="p-6 border-b border-neutral-100 dark:border-neutral-700">
            <h2 className="font-display font-bold text-lg text-neutral-900 dark:text-white">Actions Rapides</h2>
          </div>
          <div className="p-4 space-y-2">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-brand-red/10 flex items-center justify-center group-hover:bg-brand-red transition-colors">
                    <Icon className="w-4 h-4 text-brand-red group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm font-medium group-hover:text-brand-red dark:group-hover:text-brand-red transition-colors">
                    {link.label}
                  </span>
                  <ArrowRight className="w-4 h-4 text-neutral-300 ml-auto group-hover:text-brand-red transition-colors" />
                </Link>
              );
            })}
          </div>

          {/* Status Indicator */}
          <div className="p-4 border-t border-neutral-100 dark:border-neutral-700">
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-neutral-500 dark:text-neutral-400">Système opérationnel</span>
            </div>
            <div className="mt-2 text-xs text-neutral-400">
              <a href="/" target="_blank" className="text-brand-red hover:underline flex items-center gap-1">
                <Eye className="w-3 h-3" />
                Voir le site public
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
