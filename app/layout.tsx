import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pilea — Agence de montage vidéo",
  description:
    "Montage vidéo pour entrepreneurs, créateurs & entreprises. Tout inclus & retours illimités.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Mona+Sans:wght@400;500;600;700&family=Inter+Tight:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
