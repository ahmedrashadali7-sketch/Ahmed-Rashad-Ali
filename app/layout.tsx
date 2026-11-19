import type { Metadata } from "next";
import { Cairo, Manrope } from "next/font/google";
import "./globals.css";

const cairo = Cairo({ subsets: ["arabic"], variable: "--font-arabic" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-latin" });

export const metadata: Metadata = {
  title: "Ahmed Rashad | SEO Specialist & Software Developer",
  description: "Ahmed Rashad helps ambitious businesses grow through technical SEO, software, and interactive digital products.",
  metadataBase: new URL("https://ahmedrashadali7-sketch.github.io/Ahmed-Rashad-Ali/"),
  openGraph: {
    title: "Ahmed Rashad | SEO Specialist & Software Developer",
    description: "Technical SEO, software, and game development portfolio.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cairo.variable} ${manrope.variable}`}>
      <body>{children}</body>
    </html>
  );
}
