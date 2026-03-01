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
  title: "Zero Carbon Africa",
  description:
    "Empowering Africa: Zero Carbon, Infinite Possibilities. A comprehensive platform for carbon trading.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${mona.className} ${inter.variable}`}>
        {children}
        <Script
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAmNnCWGp485kBE-XWTW60GPIaIKT2C6KI&libraries=places"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
