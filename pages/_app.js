import "../styles/globals.css";

import { Mulish } from "next/font/google";
const inter = Mulish({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (  
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
  );
}
