import type { Metadata, Viewport } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.phunguyendesign.com"),
  title: "Phu Nguyen — Product Designer",
  description:
    "Product designer focused on UX strategy, interaction design, visual design, and design systems.",
  icons: {
    icon: "/logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF8",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={instrumentSerif.variable} style={{ colorScheme: "light" }}>
      <body className="antialiased min-h-dvh flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Preloader />
        <Nav />
        <main id="main" tabIndex={-1} className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
        <Cursor />
      </body>
    </html>
  );
}
