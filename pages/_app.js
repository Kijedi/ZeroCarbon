import "../styles/globals.css";

import localFont from "next/font/local";

const mona = localFont({
  src: [
    {
      path: "../src/fonts/MonaSansExpanded-ExtraBold.woff2",
      weight: "700",
      style: "normal",
      variable: "--font-sans",
    },
    {
      path: "../src/fonts/MonaSansExpanded-SemiBold.woff2",
      weight: "600",
      style: "normal",
      variable: "--font-sans",
    },
    {
      path: "../src/fonts/MonaSansExpanded-Medium.woff2",
      weight: "500",
      style: "normal",
      variable: "--font-sans",
    },
    {
      path: "../src/fonts/MonaSansExpanded-Regular.woff2",
      weight: "400",
      style: "normal",
      variable: "--font-sans",
    },
    {
      path: "../src/fonts/MonaSansExpanded-Light.woff2",
      weight: "300",
      style: "normal",
      variable: "--font-sans",
    },
    {
      path: "../src/fonts/MonaSansExpanded-ExtraLight.woff2",
      weight: "200",
      style: "normal",
      variable: "--font-sans",
    },
  ],
});
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={mona.className}>
      <Component {...pageProps} />
    </main>
  );
}
