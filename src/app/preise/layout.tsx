import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sprechzeiten & Leistungen",
  description:
    "Sprechzeiten und Leistungsangebot der Hausarztpraxis Dr. med. Anna Berger in Freiburg. Allgemeinmedizin, Vorsorge, Labordiagnostik und mehr.",
  keywords: [
    "Hausarzt Freiburg Sprechzeiten",
    "Arztpraxis Freiburg Öffnungszeiten",
    "Allgemeinmedizin Freiburg",
    "Hausarztpraxis Freiburg Leistungen",
  ],
  alternates: {
    canonical: "https://www.praxis-dr-berger.de/preise",
  },
  openGraph: {
    title: "Sprechzeiten & Leistungen | Praxis Dr. Berger Freiburg",
    description:
      "Sprechzeiten und Leistungen der Hausarztpraxis Dr. Anna Berger in Freiburg. Termine Mo–Fr.",
    url: "https://www.praxis-dr-berger.de/preise",
  },
};

export default function PreiseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

