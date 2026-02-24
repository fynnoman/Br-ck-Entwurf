"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Car, Train, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=Schillerstra%C3%9Fe+12+79102+Freiburg";
const EMBED_URL =
  "https://maps.google.com/maps?q=Schillerstra%C3%9Fe+12,+79102+Freiburg&output=embed&z=15";

const infoItems = [
  {
    icon: MapPin,
    title: "Adresse",
    lines: ["Schillerstraße 12", "79102 Freiburg im Breisgau"],
  },
  {
    icon: Clock,
    title: "Sprechzeiten",
    lines: ["Mo–Di–Do 8–18 Uhr", "Mi & Fr 8–13/14 Uhr"],
  },
  {
    icon: Car,
    title: "Mit dem Auto",
    lines: ["Tiefgarage Stadtmitte (200 m)", "Parkscheibe erforderlich"],
  },
  {
    icon: Train,
    title: "Öffentliche Verkehrsmittel",
    lines: ["Straßenbahn Linie 1 & 3", "Haltestelle Stadttheater (150 m)"],
  },
];

export default function AnfahrtPage() {
  return (
    <main className="min-h-screen bg-[#faf9f7]">
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-24 sm:py-32">
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
                Standort
              </span>
            </div>
            <h1
              className="text-4xl sm:text-6xl font-light text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Anfahrt &{" "}
              <em className="font-normal not-italic text-white/50">Lage</em>
            </h1>
            <p className="text-white/50 text-base sm:text-lg max-w-2xl leading-relaxed font-light">
              Unsere Praxis befindet sich zentral in Freiburg –
              gut erreichbar mit Auto und öffentlichen Verkehrsmitteln.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info + Map */}
      <section className="py-20 sm:py-28 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text + Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-[11px] tracking-[0.25em] uppercase font-light">
                So finden Sie uns
              </span>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-light text-primary mb-5"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Im Herzen von Freiburg
            </h2>
            <p className="text-stone-400 leading-relaxed mb-4 font-light text-sm">
              Die Praxis liegt in der Schillerstraße 12 im historischen Stadtzentrum
              von Freiburg. Das Gebäude ist barrierefrei zugänglich – Aufzug
              vorhanden.
            </p>
            <p className="text-stone-400 leading-relaxed mb-4 font-light text-sm">
              Vom Hauptbahnhof erreichen Sie uns in etwa 10 Gehminuten oder
              mit der Straßenbahn (Linie 1 oder 3, Haltestelle Stadttheater).
            </p>
            <p className="text-stone-400 leading-relaxed mb-10 font-light text-sm">
              Bitte kommen Sie pünktlich zu Ihrem Termin. Wir bitten Sie, bei
              Verhinderung spätestens 24 Stunden vorher abzusagen.
            </p>

            {/* Info grid */}
            <div className="grid sm:grid-cols-2 gap-px bg-stone-100">
              {infoItems.map(({ icon: Icon, title, lines }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-4 p-5 bg-white"
                >
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-[10px] font-light tracking-[0.2em] uppercase text-stone-300 mb-1.5">
                      {title}
                    </div>
                    {lines.map((l) => (
                      <div key={l} className="text-sm font-light text-primary leading-snug">
                        {l}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="tel:076112345670"
              className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-primary hover:bg-primary-light text-white text-sm tracking-widest uppercase font-light transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-4 h-4" />
              0761 123 4567
            </motion.a>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="sticky top-24"
          >
            <p className="text-[10px] font-light tracking-[0.2em] uppercase text-stone-300 mb-3">
              In Google Maps öffnen
            </p>
            <a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block relative overflow-hidden border border-stone-100 hover:border-accent/30 transition-colors group"
              style={{ height: 460 }}
            >
              <iframe
                src={EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, pointerEvents: "none" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort Praxis Dr. Berger"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-end justify-center pb-6">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-primary font-light text-xs px-5 py-2.5 tracking-widest uppercase flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent" />
                  Öffnen
                </span>
              </div>
            </a>
            <p className="text-[11px] text-stone-300 mt-3 font-light">
              Schillerstraße 12 · 79102 Freiburg im Breisgau
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
