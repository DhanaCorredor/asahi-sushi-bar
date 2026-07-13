import type { Metadata } from "next";
import { Montserrat, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { site } from "@/data/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const notoJp = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Asahi Sushi Bar · Sushi vibrante y urbano en Leganés",
    template: "%s · Asahi Sushi Bar",
  },
  description:
    "El sol nace en cada bocado. Sushi vibrante y urbano que rompe moldes en Leganés, Madrid. Nigiris, makis, sashimi, tartares, temaki y coctelería. Reserva por WhatsApp.",
  keywords: [
    "sushi Leganés",
    "sushi Madrid",
    "restaurante japonés Leganés",
    "japonés Leganés",
    "Asahi Sushi Bar",
    "nigiri",
    "maki",
    "sashimi",
    "temaki",
    "comida japonesa Leganés",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Asahi Sushi Bar · Sushi vibrante y urbano en Leganés",
    description: site.tagline,
    url: site.url,
    type: "website",
    locale: "es_ES",
    siteName: "Asahi Sushi Bar",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Asahi Sushi Bar — El sol nace en cada bocado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asahi Sushi Bar · Sushi vibrante y urbano en Leganés",
    description: site.tagline,
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} ${notoJp.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-sumi">
        <StructuredData />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
