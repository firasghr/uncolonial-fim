import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UN•COLONIAL FILM FESTIVAL",
  description:
    "Five days of BiPoC-led cinema that refuses colonial frameworks. Münster, Germany. August 2026.",
  keywords: [
    "film festival",
    "BiPoC",
    "decolonial cinema",
    "Münster",
    "short films",
  ],
  openGraph: {
    title: "UN•COLONIAL FILM FESTIVAL",
    description:
      "Five days of BiPoC-led cinema that refuses colonial frameworks.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-brand-offwhite antialiased">
        {children}
      </body>
    </html>
  );
}
