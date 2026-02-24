'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { UserRound, Stethoscope, FlaskConical, Smile } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Dr. med. Anna Berger',
    role: 'Fachärztin für Allgemeinmedizin',
    detail: 'Approbation 2001, Niederlassung in Freiburg 2008. Schwerpunkte: Chronische Erkrankungen, Präventivmedizin.',
    icon: Stethoscope,
    since: 'Seit 2008',
  },
  {
    id: 2,
    name: 'Thomas Keller',
    role: 'Medizinischer Fachangestellter',
    detail: 'Ausgebildeter MFA mit Zusatzqualifikation Notfallmanagement. Ihr erster Ansprechpartner am Empfang.',
    icon: UserRound,
    since: 'Seit 2014',
  },
  {
    id: 3,
    name: 'Sandra Weiß',
    role: 'Laborassistentin & MFA',
    detail: 'Zuständig für Blutabnahmen, EKG und die Koordination unserer Labordiagnostik.',
    icon: FlaskConical,
    since: 'Seit 2017',
  },
  {
    id: 4,
    name: 'Julia Hartmann',
    role: 'Praxismanagerin',
    detail: 'Organisiert Terminplanung, Abrechnung und sorgt dafür, dass Sie stets ohne lange Wartezeiten behandelt werden.',
    icon: Smile,
    since: 'Seit 2020',
  },
];

function TeamCard({ member, index }: { member: typeof team[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white border border-stone-100 p-8 relative group hover:border-accent/30 transition-colors duration-300"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="w-12 h-12 bg-primary/5 flex items-center justify-center mb-6">
        <member.icon className="w-5 h-5 text-primary/40" />
      </div>

      {/* Since badge */}
      <div className="absolute top-6 right-6 text-[10px] tracking-[0.2em] uppercase text-stone-300 font-light">
        {member.since}
      </div>

      <div
        className="font-light text-primary mb-1"
        style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.25rem' }}
      >
        {member.name}
      </div>
      <div className="text-accent text-xs tracking-widest uppercase font-light mb-4">
        {member.role}
      </div>
      <p className="text-stone-400 text-sm font-light leading-relaxed">
        {member.detail}
      </p>
    </motion.div>
  );
}

export default function Portfolio() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true, margin: '-100px' });

  return (
    <section id="portfolio" className="py-28 sm:py-36 bg-[#faf9f7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headingRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-[11px] tracking-[0.25em] uppercase font-light">
                Unser Team
              </span>
            </div>
            <h2
              className="text-4xl sm:text-5xl font-light text-primary leading-[1.15]"
              style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
            >
              Menschen, denen Sie
              <br />
              <em className="font-normal not-italic text-stone-400">vertrauen können</em>
            </h2>
          </motion.div>
        </div>

        {/* Team grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-stone-100">
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 border border-primary/20 hover:border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-sm tracking-widest uppercase font-light transition-all duration-300"
          >
            Termin anfragen
          </a>
        </motion.div>
      </div>
    </section>
  );
}
