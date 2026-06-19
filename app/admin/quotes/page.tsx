'use client';

import { useState, useEffect } from 'react';
import { MessageSquare, Search, Eye, CheckCircle, Clock } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('quote_requests')
      .select('*')
      .order('created_at', { ascending: false });
    setQuotes(data ?? []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const markProcessed = async (id: string) => {
    await supabase.from('quote_requests').update({ status: 'processed' }).eq('id', id);
    load();
  };

  const filtered = quotes.filter((q) =>
    q.name?.toLowerCase().includes(search.toLowerCase()) ||
    q.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display font-black text-2xl text-neutral-900 dark:text-white">Demandes de Devis</h1>
        <p className="text-neutral-500 text-sm mt-1">
          {quotes.filter((q) => q.status === 'new').length} nouvelles demandes
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher..."
          className="w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-brand-red transition-colors"
        />
      </div>

      <div className="space-y-4">
        {loading ? (
          <div className="p-12 text-center text-neutral-400">Chargement...</div>
        ) : filtered.length === 0 ? (
          <div className="bg-white dark:bg-neutral-800 rounded-2xl border border-neutral-200 dark:border-neutral-700 p-12 text-center">
            <MessageSquare className="w-10 h-10 mx-auto mb-3 text-neutral-300" />
            <p className="text-neutral-500">Aucune demande trouvée</p>
          </div>
        ) : (
          filtered.map((q) => (
            <div
              key={q.id}
              className={`bg-white dark:bg-neutral-800 rounded-2xl border ${
                q.status === 'new'
                  ? 'border-brand-red/30 shadow-lg shadow-brand-red/5'
                  : 'border-neutral-200 dark:border-neutral-700'
              } p-6`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                      q.status === 'new'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400'
                    }`}>
                      {q.status === 'new' ? 'Nouveau' : 'Traité'}
                    </span>
                    <span className="text-neutral-400 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(q.created_at).toLocaleDateString('fr-MA', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="font-bold text-neutral-900 dark:text-white">{q.name}</h3>
                  <div className="text-sm text-neutral-500 mt-0.5 space-y-0.5">
                    {q.company && <div>Société : {q.company}</div>}
                    <div>Email : <a href={`mailto:${q.email}`} className="text-brand-red hover:underline">{q.email}</a></div>
                    {q.phone && <div>Tél : <a href={`tel:${q.phone}`} className="text-brand-red hover:underline">{q.phone}</a></div>}
                    {q.service && <div>Service : {q.service}</div>}
                  </div>
                  {q.message && (
                    <div className="mt-3 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl p-4 text-sm text-neutral-700 dark:text-neutral-300">
                      {q.message}
                    </div>
                  )}
                </div>
                {q.status === 'new' && (
                  <button
                    onClick={() => markProcessed(q.id)}
                    className="flex items-center gap-2 border border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 px-4 py-2 rounded-xl text-sm font-semibold transition-colors shrink-0"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Marquer traité
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
