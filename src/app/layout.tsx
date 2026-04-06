import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Team FM | Brazilian Jiu-Jitsu Cork",
  description:
    "Train Brazilian Jiu-Jitsu at Team FM in Cork. Classes for all levels — Beginner, Advanced, Kids, and No-Gi. Book your free trial today.",
  openGraph: {
    title: "Team FM | Brazilian Jiu-Jitsu Cork",
    description:
      "Train Brazilian Jiu-Jitsu at Team FM in Cork. Classes for all levels. Book your free trial today.",
    locale: "en_IE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
