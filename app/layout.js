import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

const mona = localFont({
  src: [
    {
      path: "../src/fonts/MonaSansExpanded-ExtraBold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../src/fonts/MonaSansExpanded-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../src/fonts/MonaSansExpanded-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../src/fonts/MonaSansExpanded-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../src/fonts/MonaSansExpanded-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../src/fonts/MonaSansExpanded-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
  ],
  variable: "--font-mona",
});

export const metadata = {
  title: "ZeroCarbon Africa — Connecting Smallholder Farmers to Global Carbon Markets",
  description:
    "ZeroCarbon connects African smallholder farmers to global carbon markets through real-time verification, fair pricing, and transparent earnings. Carbon trading Africa's sustainable future.",
  keywords: [
    "carbon trading Africa",
    "smallholder farmer carbon credits",
    "African carbon market platform",
    "carbon sequestration verification",
    "voluntary carbon market Africa",
  ],
  openGraph: {
    title: "ZeroCarbon Africa — Africa's Carbon Wealth, Finally Unlocked",
    description:
      "Connecting smallholder farmers to global carbon markets through real-time verification, fair pricing, and transparent earnings.",
    url: "https://zerocarbon.africa",
    siteName: "ZeroCarbon Africa",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroCarbon Africa — Africa's Carbon Wealth, Finally Unlocked",
    description:
      "Connecting smallholder farmers to global carbon markets through real-time verification, fair pricing, and transparent earnings.",
  },
  metadataBase: new URL("https://zerocarbon.africa"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mona.className} ${inter.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZeroCarbon Africa",
              url: "https://zerocarbon.africa",
              description:
                "Connecting African smallholder farmers to global carbon markets through real-time verification, fair pricing, and transparent earnings.",
              foundingDate: "2024",
              founders: [
                { "@type": "Person", name: "Wesley Kijedi", jobTitle: "Co-Founder & CTO" },
                { "@type": "Person", name: "Judy Wangare", jobTitle: "Co-Founder & Climate Lead" },
              ],
              sameAs: [],
            }),
          }}
        />
        {children}
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmNnCWGp485kBE-XWTW60GPIaIKT2C6KI&libraries=places"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
