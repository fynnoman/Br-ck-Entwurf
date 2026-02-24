"use client";

import { motion } from "framer-motion";
import { ChevronDown, CalendarDays } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-primary"
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Decorative vertical line */}
      <div className="absolute left-12 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />

      {/* Warm light blob */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-px w-10 bg-accent" />
            <span className="text-accent text-xs tracking-[0.25em] uppercase font-light">
              Hausarztpraxis · Freiburg im Breisgau
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-light text-white leading-[1.1] mb-6"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Ihre Gesundheit
            <br />
            <em className="text-accent font-normal not-italic">in guten Händen.</em>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="text-white/60 text-base sm:text-lg font-light leading-relaxed mb-12 max-w-xl"
          >
            Dr. med. Anna Berger betreut Sie und Ihre Familie mit Sorgfalt,
            Erfahrung und Zeit. Persönliche Medizin – keine Fließbandpraxis.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:076112345670"
              className="inline-flex items-center justify-center gap-3 bg-accent hover:bg-accent-light text-white px-8 py-4 text-sm tracking-widest uppercase font-medium transition-colors duration-300"
            >
              <CalendarDays className="w-4 h-4" />
              Termin vereinbaren
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 border border-white/20 hover:border-white/50 text-white/70 hover:text-white px-8 py-4 text-sm tracking-widest uppercase font-light transition-all duration-300"
            >
              Leistungen ansehen
            </a>
          </motion.div>
        </div>

        {/* Right side: decorative card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="absolute right-16 top-1/2 -translate-y-1/2 hidden xl:block"
        >
          <div className="border border-white/10 bg-white/5 backdrop-blur-sm p-8 w-64">
            <p className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-4">Sprechzeiten</p>
            <div className="space-y-3 text-sm font-light">
              {[
                { day: "Mo · Di · Do", time: "08:00 – 18:00" },
                { day: "Mittwoch", time: "08:00 – 13:00" },
                { day: "Freitag", time: "08:00 – 14:00" },
              ].map(({ day, time }) => (
                <div key={day} className="flex justify-between gap-6">
                  <span className="text-white/50">{day}</span>
                  <span className="text-white/80">{time}</span>
                </div>
              ))}
              <div className="pt-3 mt-3 border-t border-white/10">
                <a href="tel:076112345670" className="text-accent text-xs tracking-widest">
                  0761 123 4567
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5 text-white/30" />
      </motion.div>
    </section>
  );
}

