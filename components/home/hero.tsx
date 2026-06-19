'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Play, ChevronDown } from 'lucide-react';
import { COMPANY } from '@/lib/constants';
import { useState, useEffect } from 'react';

function CountUp({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function HeroSection() {
  const stats = [
    { value: COMPANY.stats.years, suffix: '+', label: 'Années d\'Expérience' },
    { value: COMPANY.stats.projects, suffix: '+', label: 'Projets Réalisés' },
    { value: COMPANY.stats.machines, suffix: '+', label: 'Machines Disponibles' },
    { value: COMPANY.stats.clients, suffix: '+', label: 'Clients Satisfaits' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80"
          alt="Tower crane construction site"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-steel/95 via-brand-steel/80 to-brand-red/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-steel/80 via-transparent to-transparent" />
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Content — visible immediately on mount */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="container mx-auto px-6 pt-20 pb-32">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-brand-red/20 border border-brand-red/40 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              Distributeur Officiel JASO &amp; Zoomlion au Maroc
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-[1.05] mb-6"
            >
              Leader National
              <br />
              <span className="text-brand-red">en Solutions</span>
              <br />
              de Levage
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed mb-10"
            >
              CASAGRUE — expert marocain en location, vente et maintenance de grues à tour,
              ascenseurs de chantier et plateformes élévatrices depuis 2011.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/quote"
                className="flex items-center gap-2 bg-brand-red hover:bg-brand-red-dark text-white px-8 py-4 rounded-xl font-bold text-base shadow-2xl shadow-brand-red/40 hover:shadow-brand-red/60 transition-all duration-200 hover:scale-105"
              >
                Demander un Devis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 hover:border-white/50 px-8 py-4 rounded-xl font-semibold text-base backdrop-blur-sm transition-all duration-200"
              >
                Découvrir les Produits
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-2 text-white/80 hover:text-white px-4 py-4 rounded-xl font-medium text-base transition-colors"
              >
                <Play className="w-5 h-5 text-brand-red" />
                Nous Contacter
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="relative z-10 bg-white/10 backdrop-blur-md border-t border-white/20">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-black text-4xl md:text-5xl text-white mb-1">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-white/60 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs tracking-widest uppercase">Défiler</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
