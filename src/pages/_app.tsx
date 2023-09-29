import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-inter",
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} ${inter.variable}`}>
      <Head>
        <title>Osvaldo Valentin</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
