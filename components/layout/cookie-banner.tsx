'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('casagrue_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('casagrue_cookie_consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('casagrue_cookie_consent', 'declined');
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-4xl mx-auto bg-white dark:bg-brand-steel-light rounded-2xl shadow-2xl border border-neutral-200 dark:border-white/10 p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                <Cookie className="w-5 h-5 text-brand-red" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">
                  Nous utilisons des cookies
                </h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  CASAGRUE utilise des cookies pour améliorer votre expérience, analyser le trafic
                  et personnaliser le contenu. En continuant, vous acceptez notre{' '}
                  <Link href="/privacy" className="text-brand-red hover:underline">
                    politique de confidentialité
                  </Link>
                  .
                </p>
              </div>
              <button
                onClick={decline}
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-white shrink-0 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-3 mt-4 justify-end">
              <button
                onClick={decline}
                className="px-4 py-2 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white border border-neutral-200 dark:border-white/20 rounded-lg transition-colors"
              >
                Refuser
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 bg-brand-red text-white text-sm font-semibold rounded-lg hover:bg-brand-red-dark transition-colors"
              >
                Accepter tout
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
