"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { useScrollLineY } from "./ScrollLineContext";

const services = [
  "Allgemeinmedizin & Hausarztversorgung",
  "Vorsorgeuntersuchungen (Check-up 35)",
  "Chronische Erkrankungen & Langzeitbetreuung",
  "Impfungen & Reisemedizin",
  "Kleine operative Eingriffe",
  "Labordiagnostik & EKG",
  "Krankschreibung & ärztliche Atteste",
  "Überweisung & Facharztkoordination",
  "Hausbesuche auf Anfrage",
];

function ServiceItem({ label, index }: { label: string; index: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const lineY = useScrollLineY();
  const [active, setActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  useEffect(() => {
    if (!lineY) return;
    const check = (y: number) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const absTop = rect.top + window.scrollY;
      setActive(y >= absTop);
    };
    check(lineY.get());
    const unsub = lineY.on("change", check);
    return unsub;
  }, [lineY]);

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="flex items-center gap-5 group border-b border-stone-100 pb-7 last:border-0 last:pb-0"
    >
      {/* Minimal dot indicator */}
      <span
        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-500 ${
          active || isMobile ? "bg-accent" : "bg-stone-200"
        }`}
      />
      <span
        className={`text-base sm:text-lg font-light leading-snug transition-all duration-500 ${
          active || isMobile
            ? "text-primary"
            : "text-stone-300"
        }`}
        style={{ fontFamily: active || isMobile ? "var(--font-cormorant), Georgia, serif" : undefined, fontSize: active || isMobile ? undefined : undefined }}
      >
        {label}
      </span>
    </motion.li>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-28 sm:py-36 overflow-hidden bg-[#faf9f7]">
      {/* Subtle left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-accent/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: heading */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-[11px] tracking-[0.25em] uppercase font-light">
                Medizinisches Angebot
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl font-light text-primary leading-[1.15] mb-6"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Umfassende Betreuung
              <br />
              <em className="font-normal not-italic text-stone-400">für jeden Lebensabschnitt</em>
            </h2>
            <p className="text-stone-500 font-light leading-relaxed text-base max-w-sm">
              Als Ihre Hausarztpraxis begleiten wir Sie langfristig – von der
              Prävention über die Diagnose bis zur Nachsorge.
            </p>

            {/* Decorative element */}
            <div className="mt-12 hidden lg:block">
              <hr className="divider-gold" />
              <p className="text-stone-400 text-xs tracking-widest uppercase mt-6 font-light">
                Kassenpatienten · Privatpatienten · Selbstzahler
              </p>
            </div>
          </motion.div>

          {/* Right: service list */}
          <div className="lg:pt-4">
            <ul className="space-y-7">
              {services.map((service, i) => (
                <ServiceItem key={service} label={service} index={i} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

