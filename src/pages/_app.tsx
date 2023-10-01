import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.className} ${inter.variable}`}>
      <Head>
        <meta property="og:title" content="Osvaldo Valentin Garcia" />
        <meta
          property="og:url"
          content="https://valentin-osvaldo.vercel.app/"
        />
        <meta
          name="description"
          content="Experienced Frontend Developer with 2+ years of expertise in JavaScript and TypeScript, including proficiency in unit testing with Jest and Vite Test. Skilled in implementing software architecture, design patterns, and maintaining clean, SOLID code."
        />
        <meta
          name="keywords"
          content="FrontEnd, React.js, React Native, Web Developer, Osvaldo Valentin, Developer"
        />
        <meta name="robots" content="index" />
        <meta
          property="og:description"
          content="Experienced Frontend Developer with 2+ years of expertise in JavaScript and TypeScript, including proficiency in unit testing with Jest and Vite Test. Skilled in implementing software architecture, design patterns, and maintaining clean, SOLID code."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://valentin-osvaldo.vercel.app/developer.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Osvaldo Valentin</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
