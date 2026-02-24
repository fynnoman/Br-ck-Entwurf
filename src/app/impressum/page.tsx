import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Hausarztpraxis Dr. med. Anna Berger, Schillerstraße 12, 79102 Freiburg.",
  robots: { index: false, follow: false },
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-[#faf9f7]">
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-stone-300 hover:text-stone-600 text-sm mb-10 transition-colors font-light"
        >
          <ArrowLeft className="w-4 h-4" />
          Zurück zur Startseite
        </Link>

        <h1
          className="text-4xl font-light text-primary mb-2"
          style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
        >
          Impressum
        </h1>
        <p className="text-stone-400 text-sm mb-12 font-light">Angaben gemäß § 5 TMG</p>

        <div className="space-y-10 text-stone-600 leading-relaxed font-light text-sm">

          <div>
            <h2 className="text-base font-light text-primary mb-2 tracking-wide">Angaben zur Person</h2>
            <p>
              Dr. med. Anna Berger<br />
              Fachärztin für Allgemeinmedizin<br />
              Schillerstraße 12<br />
              79102 Freiburg im Breisgau<br />
              Deutschland
            </p>
          </div>

          <div>
            <h2 className="text-base font-light text-primary mb-2 tracking-wide">Kontakt</h2>
            <p>
              Telefon: 0761 123 4567<br />
              E-Mail:{" "}
              <a href="mailto:info@praxis-dr-berger.de" className="text-accent hover:underline">
                info@praxis-dr-berger.de
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-base font-light text-primary mb-2 tracking-wide">Berufsbezeichnung & berufsrechtliche Regelungen</h2>
            <p>
              Fachärztin für Allgemeinmedizin (Approbation in Deutschland)<br />
              Zuständige Kammer: Landesärztekammer Baden-Württemberg<br />
              Berufsrechtliche Regelungen: Berufsordnung für Ärzte in Baden-Württemberg
            </p>
          </div>

          <div>
            <h2 className="text-base font-light text-primary mb-2 tracking-wide">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Dr. med. Anna Berger<br />
              Schillerstraße 12<br />
              79102 Freiburg im Breisgau
            </p>
          </div>

          <div>
            <h2 className="text-base font-light text-primary mb-2 tracking-wide">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>

          <div>
            <h2 className="text-base font-light text-primary mb-2 tracking-wide">Verbraucherstreitbeilegung</h2>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </div>

          <div>
            <h2 className="text-base font-light text-primary mb-2 tracking-wide">Haftungshinweis</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Die medizinischen Inhalte dieser Website
              ersetzen keinen Arztbesuch und stellen keine medizinische Beratung dar.
            </p>
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
