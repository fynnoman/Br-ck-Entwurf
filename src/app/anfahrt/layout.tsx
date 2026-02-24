import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anfahrt",
  description:
    "Anfahrt zur Hausarztpraxis Dr. med. Anna Berger – Schillerstraße 12, 79102 Freiburg im Breisgau. Parkmöglichkeiten, ÖPNV-Anbindung und Sprechzeiten.",
  keywords: [
    "Hausarzt Freiburg Adresse",
    "Arztpraxis Freiburg Schillerstraße",
    "Arzt Freiburg Anfahrt",
    "Dr. Berger Freiburg",
  ],
  alternates: {
    canonical: "https://www.praxis-dr-berger.de/anfahrt",
  },
  openGraph: {
    title: "Anfahrt | Praxis Dr. Berger Freiburg",
    description:
      "So finden Sie uns: Schillerstraße 12, 79102 Freiburg. Gut erreichbar mit Auto und Straßenbahn.",
    url: "https://www.praxis-dr-berger.de/anfahrt",
  },
};

export default function AnfahrtLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
