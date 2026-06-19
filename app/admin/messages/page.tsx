'use client';

import { useState, useEffect } from 'react';
import { Mail, Search, CheckCircle, Clock } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const load = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('contact_messages')
      .select('*')
      .order('created_at', { ascending: false });
    setMessages(data ?? []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  const markRead = async (id: string) => {
    await supabase.from('contact_messages').update({ status: 'read' }).eq('id', id);
    load();
  };

  const filtered = messages.filter((m) =>
    m.name?.toLowerCase().includes(search.toLowerCase()) ||
    m.email?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="font-display font-black text-2xl text-neutral-900 dark:text-white">Messages Contact</h1>
        <p className="text-neutral-500 text-sm mt-1">
          {messages.filter((m) => m.status === 'unread').length} messages non lus
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
            <Mail className="w-10 h-10 mx-auto mb-3 text-neutral-300" />
            <p className="text-neutral-500">Aucun message trouvé</p>
          </div>
        ) : (
          filtered.map((m) => (
            <div
              key={m.id}
              className={`bg-white dark:bg-neutral-800 rounded-2xl border ${
                m.status === 'unread'
                  ? 'border-brand-red/30 shadow-lg shadow-brand-red/5'
                  : 'border-neutral-200 dark:border-neutral-700'
              } p-6`}
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                      m.status === 'unread'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'bg-neutral-100 text-neutral-600 dark:bg-neutral-700 dark:text-neutral-400'
                    }`}>
                      {m.status === 'unread' ? 'Non lu' : 'Lu'}
                    </span>
                    <span className="text-neutral-400 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {new Date(m.created_at).toLocaleDateString('fr-MA', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                  </div>
                  <h3 className="font-bold text-neutral-900 dark:text-white">{m.name}</h3>
                  <div className="text-sm text-neutral-500 mt-0.5">
                    <a href={`mailto:${m.email}`} className="text-brand-red hover:underline">{m.email}</a>
                    {m.phone && <span> — {m.phone}</span>}
                  </div>
                  {m.subject && <div className="font-medium text-neutral-700 dark:text-neutral-300 mt-2 text-sm">{m.subject}</div>}
                  <div className="mt-3 bg-neutral-50 dark:bg-neutral-700/50 rounded-xl p-4 text-sm text-neutral-700 dark:text-neutral-300">
                    {m.message}
                  </div>
                </div>
                {m.status === 'unread' && (
                  <button
                    onClick={() => markRead(m.id)}
                    className="flex items-center gap-2 border border-blue-500 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-4 py-2 rounded-xl text-sm font-semibold transition-colors shrink-0"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Marquer lu
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
