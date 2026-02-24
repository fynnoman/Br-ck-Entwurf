"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const footerLinks = [
  { name: "Willkommen", href: "#hero" },
  { name: "Leistungen", href: "#services" },
  { name: "Über uns", href: "#about" },
  { name: "Team", href: "#portfolio" },
  { name: "Kontakt", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white relative overflow-hidden">
      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main footer */}
        <div className="grid md:grid-cols-3 gap-16 py-20">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <p
                className="text-white text-xl font-light mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Dr. med. Anna Berger
              </p>
              <p className="text-accent text-[10px] tracking-[0.25em] uppercase font-light">
                Hausarztpraxis · Freiburg
              </p>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light max-w-xs">
              Ihre Hausarztpraxis für Allgemeinmedizin, Vorsorge und persönliche
              Betreuung im Herzen von Freiburg.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-light text-[10px] uppercase tracking-[0.25em] text-white/30 mb-6">
              Navigation
            </h4>
            <nav aria-label="Footer Navigation">
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-white transition-colors text-sm font-light"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-light text-[10px] uppercase tracking-[0.25em] text-white/30 mb-6">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:076112345670"
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm font-light"
                >
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  0761 123 4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@praxis-dr-berger.de"
                  className="flex items-center gap-3 text-white/50 hover:text-white transition-colors text-sm font-light"
                >
                  <Mail className="w-3.5 h-3.5 text-accent" />
                  info@praxis-dr-berger.de
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/50 text-sm font-light">
                  <MapPin className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
                  Schillerstraße 12,&nbsp;79102 Freiburg
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-8 gap-4">
          <p className="text-white/25 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} Dr. med. Anna Berger – Hausarztpraxis Freiburg.
            Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-6">
            <a href="/impressum" className="text-white/25 hover:text-white/60 text-xs font-light transition-colors">
              Impressum
            </a>
            <a href="/datenschutz" className="text-white/25 hover:text-white/60 text-xs font-light transition-colors">
              Datenschutz
            </a>

            <motion.a
              href="#hero"
              className="flex items-center gap-2 text-white/25 hover:text-accent text-xs font-light transition-colors"
              whileHover={{ y: -2 }}
            >
              Nach oben
              <ArrowUp className="w-3.5 h-3.5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}

