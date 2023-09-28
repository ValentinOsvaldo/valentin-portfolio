import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["300", "400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.className}`}>
      
      <Component {...pageProps} />
    </div>
  );
}
