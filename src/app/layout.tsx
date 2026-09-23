import type { Metadata, Viewport } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Phu Nguyen — Product Designer",
  description:
    "Product designer focused on UX strategy, interaction design, visual design, and design systems.",
  icons: {
    icon: "/logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrumentSerif.variable} style={{ colorScheme: "dark" }}>
      <body className="antialiased min-h-dvh flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Preloader />
        <Nav />
        <main id="main" tabIndex={-1} className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
