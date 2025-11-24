import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/funnel/components/common/CustomCursor";
import { CursorProvider } from "@/funnel/components/common/CursorContext";
import Navbar from "@/funnel/components/Navbar/index";
import Footer from "@/funnel/components/Footer/index";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://picassofusion.com"), // Replace with actual domain
  title: {
    default: "Picasso Fusion | Digital Art Platform",
    template: "%s | Picasso Fusion",
  },
  description: "Picasso Fusion is a premier platform for creating and exploring digital art. Unlock your creativity with our exclusive design membership.",
  keywords: ["digital art", "design membership", "creative platform", "picasso fusion", "art community"],
  authors: [{ name: "Picasso Fusion Team" }],
  creator: "Picasso Fusion",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://picassofusion.com",
    title: "Picasso Fusion | Digital Art Platform",
    description: "Unlock your creativity with our exclusive design membership. Streamline your journey with expert designers.",
    siteName: "Picasso Fusion",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists or is added
        width: 1200,
        height: 630,
        alt: "Picasso Fusion Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Picasso Fusion | Digital Art Platform",
    description: "Unlock your creativity with our exclusive design membership.",
    images: ["/twitter-image.jpg"], // Ensure this image exists or is added
  },
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Picasso Fusion",
  url: "https://picassofusion.com",
  logo: "https://picassofusion.com/logo.png",
  sameAs: [
    "https://twitter.com/picassofusion",
    "https://instagram.com/picassofusion",
    "https://linkedin.com/company/picassofusion",
  ],
  description: "Picasso Fusion is a platform that allows users to create their own digital art.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${instrumentSerif.variable} font-sans antialiased`}>
        <CursorProvider>
          <CustomCursor />
          <Navbar />
          {children}
          <Footer />
        </CursorProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}