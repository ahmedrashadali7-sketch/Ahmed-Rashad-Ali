import type { Metadata } from "next";
import { Cairo, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ahmed Rashad | SEO Specialist & Developer",
    template: "%s | Ahmed Rashad",
  },
  description:
    "Ahmed Rashad — SEO specialist and software developer exploring organic growth, useful technology, and immersive game experiences.",
  openGraph: {
    title: "Ahmed Rashad | SEO Specialist & Developer",
    description:
      "SEO, software development, and game development — one portfolio.",
    type: "website",
  },
  icons: { icon: "/favicon.svg" },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${cairo.variable}`}>
        {children}
      </body>
    </html>
  );
}
