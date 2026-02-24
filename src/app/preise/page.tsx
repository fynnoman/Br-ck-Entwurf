"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Phone, Mail, Clock, AlertCircle } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

const sprechzeiten = [
  { tag: "Montag", zeit: "08:00 – 13:00 & 15:00 – 18:00 Uhr" },
  { tag: "Dienstag", zeit: "08:00 – 13:00 & 15:00 – 18:00 Uhr" },
  { tag: "Mittwoch", zeit: "08:00 – 13:00 Uhr" },
  { tag: "Donnerstag", zeit: "08:00 – 13:00 & 15:00 – 18:00 Uhr" },
  { tag: "Freitag", zeit: "08:00 – 14:00 Uhr" },
  { tag: "Samstag", zeit: "Geschlossen" },
  { tag: "Sonntag", zeit: "Geschlossen" },
];

const leistungsbereiche = [
  {
    kategorie: "Vorsorge & Prävention",
    items: [
      "Gesundheits-Check-up ab 35 Jahren",
      "Krebsfrüherkennungsuntersuchungen",
      "Impfberatung & Reisemedizin",
      "Stressmedizin & Burnout-Prävention",
    ],
  },
  {
    kategorie: "Diagnostik & Therapie",
    items: [
      "Laboruntersuchungen vor Ort",
      "Langzeit-EKG & Langzeit-RR",
      "Lungenfunktionsmessung",
      "Ultraschall (Abdomen, Schilddrüse)",
    ],
  },
  {
    kategorie: "Chronische Erkrankungen",
    items: [
      "Diabetes mellitus",
      "Bluthochdruck & Herzerkrankungen",
      "Schilddrüsenerkrankungen",
      "Rücken- & Gelenkbeschwerden",
    ],
  },
];

const hinweise = [
  "Bitte rufen Sie für einen Termin vorab an.",
  "Rezeptanfragen bitte telefonisch zwischen 8 und 10 Uhr.",
  "Überweisungen werden in der Regel am gleichen Werktag ausgestellt.",
  "Privatpatienten und Selbstzahler sind herzlich willkommen.",
  "Bei akuten Notfällen außerhalb der Sprechzeiten wenden Sie sich an den ärztlichen Bereitschaftsdienst: 116 117.",
];

export default function PreisePage() {
  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-24 sm:py-32">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors font-light tracking-wide"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-[11px] tracking-[0.25em] uppercase font-light">
                Praxiszeiten
              </span>
            </div>
            <h1
              className="text-4xl sm:text-6xl font-light text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Sprechzeiten &{" "}
              <em className="font-normal not-italic text-white/50">Leistungen</em>
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              Alle Informationen zu unseren Öffnungszeiten, dem Leistungsangebot
              und wichtigen Hinweisen für Ihren Praxisbesuch.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 sm:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sprechzeiten table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-[11px] tracking-[0.25em] uppercase font-light">
              Öffnungszeiten
            </span>
          </div>

          <div className="border border-stone-200 divide-y divide-stone-100 bg-white">
            {sprechzeiten.map(({ tag, zeit }, i) => (
              <motion.div
                key={tag}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                className={`flex items-center justify-between px-6 py-4 ${
                  zeit === "Geschlossen" ? "opacity-40" : ""
                }`}
              >
                <span className="text-sm font-light text-stone-500 w-28">{tag}</span>
                <span className={`text-sm font-light ${
                  zeit === "Geschlossen" ? "text-stone-400" : "text-primary"
                }`}>{zeit}</span>
                {zeit !== "Geschlossen" && (
                  <Clock className="w-3.5 h-3.5 text-accent" />
                )}
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-stone-400 font-light mt-3 flex items-start gap-2">
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
            Abweichende Zeiten an Feiertagen. Bitte rufen Sie vorab an.
          </p>
        </motion.div>

        {/* Leistungen Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-[11px] tracking-[0.25em] uppercase font-light">
              Leistungsangebot
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-px bg-stone-100">
            {leistungsbereiche.map(({ kategorie, items }, i) => (
              <motion.div
                key={kategorie}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="bg-white p-8"
              >
                <div className="h-px w-6 bg-accent mb-5" />
                <h3
                  className="font-light text-primary mb-5 text-lg"
                  style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                >
                  {kategorie}
                </h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-stone-400 font-light leading-relaxed">
                      <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Hinweise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border border-stone-100 bg-white p-8 mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertCircle className="w-4 h-4 text-accent flex-shrink-0" />
            <h3
              className="font-light text-primary text-lg"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Wichtige Hinweise
            </h3>
          </div>
          <ul className="space-y-3">
            {hinweise.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.06 }}
                className="flex items-start gap-3 text-stone-500 text-sm leading-relaxed font-light"
              >
                <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0 mt-2" />
                {h}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="bg-primary p-12 relative overflow-hidden"
        >
          <div className="h-px w-8 bg-accent mb-6" />
          <h3
            className="text-2xl font-light text-white mb-3"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Termin vereinbaren
          </h3>
          <p className="text-white/40 mb-8 max-w-md font-light text-sm leading-relaxed">
            Rufen Sie uns während unserer Sprechzeiten an oder schreiben Sie
            uns eine E-Mail. Wir melden uns schnellstmöglich zurück.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="tel:076112345670"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent hover:bg-accent-light text-white text-sm tracking-widest uppercase font-light transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-4 h-4" />
              0761 123 4567
            </motion.a>
            <motion.a
              href="mailto:info@praxis-dr-berger.de"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/15 hover:border-white/30 text-white/60 hover:text-white text-sm tracking-widest uppercase font-light transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              Per E-Mail
            </motion.a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
