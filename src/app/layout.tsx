import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const BASE_URL = "https://www.praxis-dr-berger.de";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Dr. med. Anna Berger – Hausarztpraxis Freiburg",
    template: "%s | Praxis Dr. Berger Freiburg",
  },
  description:
    "Ihre Hausarztpraxis in Freiburg im Breisgau. Dr. med. Anna Berger – Allgemeinmedizin, Vorsorge, Chronische Erkrankungen. Jetzt Termin vereinbaren: 0761 123 4567.",
  keywords: [
    "Hausarzt Freiburg",
    "Allgemeinmedizin Freiburg",
    "Arztpraxis Freiburg",
    "Hausarztpraxis Freiburg",
    "Vorsorgeuntersuchung Freiburg",
    "Dr. Berger Freiburg",
    "Familienarzt Freiburg",
    "Internist Freiburg",
  ],
  authors: [{ name: "Dr. med. Anna Berger – Hausarztpraxis" }],
  creator: "Dr. med. Anna Berger – Hausarztpraxis",
  publisher: "Dr. med. Anna Berger – Hausarztpraxis",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: "Praxis Dr. med. Anna Berger",
    title: "Dr. med. Anna Berger – Hausarztpraxis Freiburg",
    description:
      "Ihre Hausarztpraxis in Freiburg. Allgemeinmedizin, Vorsorge & persönliche Betreuung. Termin: 0761 123 4567.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Praxis Dr. med. Anna Berger – Hausarztpraxis Freiburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. med. Anna Berger – Hausarztpraxis Freiburg",
    description:
      "Allgemeinmedizin & Vorsorge in Freiburg. Jetzt Termin vereinbaren: 0761 123 4567.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1c3557" />
        <meta name="geo.region" content="DE-BW" />
        <meta name="geo.placename" content="Freiburg im Breisgau" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "@id": BASE_URL,
              name: "Praxis Dr. med. Anna Berger",
              url: BASE_URL,
              description: "Hausarztpraxis für Allgemeinmedizin in Freiburg im Breisgau.",
              telephone: "+4976112345670",
              email: "info@praxis-dr-berger.de",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Schillerstraße 12",
                addressLocality: "Freiburg im Breisgau",
                postalCode: "79102",
                addressCountry: "DE",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
