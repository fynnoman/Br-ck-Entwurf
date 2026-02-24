"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Willkommen", href: "#hero" },
  { name: "Leistungen", href: "#services" },
  { name: "Über uns", href: "#about" },
  { name: "Team", href: "#portfolio" },
  { name: "Sprechzeiten", href: "/preise" },
  { name: "Kontakt", href: "#contact" },
  { name: "Anfahrt", href: "/anfahrt" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 left-0 right-0 z-[99999] transition-all duration-500 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-sm border-b border-stone-100"
          : "bg-white/95 backdrop-blur-md border-b border-stone-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="flex items-center gap-3 group"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col leading-none">
              <span
                className="font-serif text-xl font-semibold tracking-wide text-primary"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", letterSpacing: "0.04em" }}
              >
                Dr. med. Anna Berger
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-accent font-light mt-0.5">
                Hausarztpraxis · Freiburg
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-light tracking-wide text-stone-600 hover:text-primary transition-colors duration-200 relative group"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="tel:076112345670"
              className="flex items-center gap-2 border border-primary/20 hover:border-primary text-primary hover:bg-primary hover:text-white px-5 py-2.5 text-[13px] font-medium tracking-wide transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5" />
              Termin anfragen
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary touch-manipulation"
            aria-label="Menü öffnen"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-stone-100"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 px-2 text-stone-600 hover:text-primary border-b border-stone-50 text-sm font-light tracking-wide transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="tel:076112345670"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3.5 text-sm font-medium tracking-wide"
                >
                  <Phone className="w-4 h-4" />
                  0761 123 4567
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
