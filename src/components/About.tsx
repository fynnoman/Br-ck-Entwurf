"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, HeartHandshake, Clock3, UserRound } from "lucide-react";
import AboutLine from "./AboutLine";

const stats = [
  { icon: Clock3, value: "Seit 2008", label: "Niedergelassen" },
  { icon: UserRound, value: "2.400+", label: "Patientinnen & Patienten" },
  { icon: GraduationCap, value: "Approbiert", label: "Allgemeinmedizin" },
  { icon: HeartHandshake, value: "100 %", label: "Persönliche Betreuung" },
];

export default function About() {
  const ref = useRef(null);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="about" className="py-28 sm:py-36 bg-white relative overflow-hidden">
      <AboutLine sectionRef={sectionRef} contentRef={contentRef} headingRef={headingRef} textRef={textRef} />

      {/* Background decoration — warm tone */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-accent/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left side — portrait placeholder or decorative block */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] bg-muted overflow-hidden">
              {/* Placeholder portrait */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 flex items-end justify-center pb-12">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <UserRound className="w-12 h-12 text-primary/30" />
                  </div>
                  <p className="text-primary/40 text-xs tracking-[0.2em] uppercase">Dr. med. Anna Berger</p>
                </div>
              </div>
              {/* Gold corner accent */}
              <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-accent/40" />
              <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r border-accent/40" />
            </div>
            {/* Floating quote card */}
            <div className="absolute -right-8 bottom-16 bg-white shadow-lg border border-stone-100 p-6 max-w-[220px]">
              <p className="text-primary/70 text-sm font-light leading-relaxed italic"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif", fontSize: "1.05rem" }}>
                „Medizin bedeutet für mich, den Menschen wirklich zuzuhören."
              </p>
              <p className="text-accent text-xs tracking-widest mt-3 font-light">— Dr. A. Berger</p>
            </div>
          </motion.div>

          {/* Right side — text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-[11px] tracking-[0.25em] uppercase font-light">
                Über die Praxis
              </span>
            </div>
            <h2
              ref={headingRef}
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-primary mb-6 leading-[1.2]"
              style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
            >
              Erfahrung trifft
              <br />
              <em className="font-normal not-italic text-stone-400">persönliche Fürsorge</em>
            </h2>
            <p className="text-stone-500 font-light leading-relaxed mb-5 text-[15px]">
              Dr. med. Anna Berger ist seit 2008 als niedergelassene Hausärztin
              in Freiburg tätig. Nach dem Studium an der Albert-Ludwigs-Universität
              und mehrjähriger Kliniktätigkeit in der Inneren Medizin hat sie
              sich der wohnortnahen Grundversorgung verschrieben.
            </p>
            <p ref={textRef} className="text-stone-500 font-light leading-relaxed mb-8 text-[15px]">
              In unserer Praxis nehmen wir uns die Zeit, die es braucht.
              Kurze Wartezeiten, verständliche Erklärungen und ein offenes
              Ohr für Ihre Anliegen sind für uns keine Versprechen – sie sind
              unser täglicher Anspruch.
            </p>

            {/* Key points */}
            <div className="space-y-3 mb-10">
              {[
                "Fachärztin für Allgemeinmedizin",
                "Kassenzulassung & Privatpatienten",
                "Terminvergabe innerhalb von 48 Stunden",
                "Barrierefreie Praxis mit Aufzug",
              ].map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.35 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-px h-4 bg-accent mt-1.5 flex-shrink-0" />
                  <span className="text-stone-600 font-light text-[14px]">{point}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-primary/20 hover:border-primary text-primary hover:bg-primary hover:text-white px-8 py-3.5 text-sm tracking-widest uppercase font-light transition-all duration-300"
            >
              Termin vereinbaren
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 border border-stone-100 bg-stone-100"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center bg-white px-6 py-8"
            >
              <stat.icon className="w-5 h-5 text-accent mx-auto mb-3" />
              <div
                className="text-2xl font-light text-primary mb-1"
                style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
              >
                {stat.value}
              </div>
              <div className="text-stone-400 text-xs tracking-widest uppercase font-light">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
