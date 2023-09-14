import "../styles/globals.css";

import localFont from "next/font/local";

const mona = localFont({
  src: [
    {
      path: "../src/fonts/MonaSans-Bold.woff2",
      weight: "700",
      style: "normal",
      variable: "--font-sans",
    },
    {
      path: "../src/fonts/MonaSans-SemiBold.woff2",
      weight: "500",
      style: "normal",
      variable: "--font-sans",
    },
    {
      path: "../src/fonts/MonaSans-Medium.woff2",
      weight: "400",
      style: "normal",
      variable: "--font-sans",
    },
    {
      path: "../src/fonts/MonaSans-Regular.woff2",
      weight: "300",
      style: "normal",
      variable: "--font-sans",
    },
    {
      path: "../src/fonts/MonaSans-Light.woff2",
      weight: "100",
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
