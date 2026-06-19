'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, ArrowUp, X } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { cn } from '@/lib/utils';

export default function FloatingWidgets() {
  const [showBackTop, setShowBackTop] = useState(false);
  const [whatsappOpen, setWhatsappOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const whatsappMessage = encodeURIComponent(
    'Bonjour CASAGRUE, je souhaite obtenir plus d\'informations sur vos services de grues.'
  );
  const whatsappUrl = `https://wa.me/${COMPANY.whatsapp.replace(/\D/g, '')}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* WhatsApp Popup */}
      <AnimatePresence>
        {whatsappOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white dark:bg-brand-steel-light rounded-2xl shadow-2xl p-4 w-72 border border-neutral-100 dark:border-white/10"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-sm dark:text-white">CASAGRUE</div>
                  <div className="flex items-center gap-1 text-xs text-green-500">
                    <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
                    En ligne
                  </div>
                </div>
              </div>
              <button
                onClick={() => setWhatsappOpen(false)}
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-neutral-50 dark:bg-brand-steel rounded-xl p-3 mb-3">
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                👋 Bonjour ! Comment puis-je vous aider ?
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                Grues à tour, location, maintenance...
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eb857] text-white py-2.5 px-4 rounded-xl text-sm font-semibold transition-colors w-full"
            >
              <MessageCircle className="w-4 h-4" />
              Démarrer la conversation
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-white dark:bg-brand-steel-light text-brand-steel dark:text-white shadow-lg border border-neutral-200 dark:border-white/10 flex items-center justify-center hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-200"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.button
        onClick={() => setWhatsappOpen(!whatsappOpen)}
        className={cn(
          'w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-200 animate-pulse-red',
          whatsappOpen
            ? 'bg-neutral-600 hover:bg-neutral-700'
            : 'bg-[#25D366] hover:bg-[#1eb857]'
        )}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {whatsappOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-7 h-7 text-white" />
        )}
      </motion.button>
    </div>
  );
}
