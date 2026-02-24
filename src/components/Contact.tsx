"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactItems = [
  {
    icon: Phone,
    label: "Telefon",
    value: "0761 123 4567",
    href: "tel:076112345670",
  },
  {
    icon: Mail,
    label: "E-Mail",
    value: "info@praxis-dr-berger.de",
    href: "mailto:info@praxis-dr-berger.de",
  },
  {
    icon: MapPin,
    label: "Adresse",
    value: "Schillerstraße 12, 79102 Freiburg",
    href: null,
  },
  {
    icon: Clock,
    label: "Sprechzeiten",
    value: "Mo–Do 8–18 Uhr · Fr 8–14 Uhr",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-28 sm:py-36 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23b8986a%22%20fill-opacity%3D%220.04%22%3E%3Ccircle%20cx%3D%221%22%20cy%3D%221%22%20r%3D%221%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-accent" />
            <span className="text-accent text-[11px] tracking-[0.25em] uppercase font-light">
              Kontakt & Termin
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl font-light text-primary leading-[1.15]"
            style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
          >
            Wir freuen uns
            <br />
            <em className="font-normal not-italic text-stone-400">auf Ihren Anruf</em>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: contact info */}
          <div className="space-y-0 border border-stone-100 divide-y divide-stone-100">
            {contactItems.map(({ icon: Icon, label, value, href }, i) => {
              const inner = (
                <div className="flex items-start gap-5 p-6 group">
                  <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-stone-300 font-light mb-1">{label}</div>
                    <div className="text-sm font-light text-primary">{value}</div>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                >
                  {href ? (
                    <a href={href} className="block hover:bg-muted transition-colors">
                      {inner}
                    </a>
                  ) : (
                    <div>{inner}</div>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Right: call to action panel */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-primary p-10 flex flex-col justify-between"
          >
            <div>
              <p
                className="text-white/30 text-[10px] tracking-[0.2em] uppercase mb-4"
              >
                Terminvereinbarung
              </p>
              <h3
                className="text-2xl sm:text-3xl font-light text-white mb-4 leading-snug"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                Rufen Sie uns an –<br />
                <em className="font-normal not-italic text-white/50">wir sind für Sie da.</em>
              </h3>
              <p className="text-white/50 font-light text-sm leading-relaxed mb-8">
                Für Terminvereinbarungen, Fragen zu Ihren Befunden oder
                Rezeptanfragen stehen wir Ihnen während unserer Sprechzeiten
                gerne zur Verfügung.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href="tel:076112345670"
                className="flex items-center justify-center gap-3 w-full bg-accent hover:bg-accent-light text-white py-4 text-sm tracking-widest uppercase font-light transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                0761 123 4567
              </a>
              <a
                href="mailto:info@praxis-dr-berger.de"
                className="flex items-center justify-center gap-3 w-full border border-white/15 hover:border-white/30 text-white/60 hover:text-white py-4 text-sm tracking-widest uppercase font-light transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
                Per E-Mail schreiben
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

