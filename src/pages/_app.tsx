import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps}>
      <MyHead />
    </Component>
  );
}

export default MyApp;

function MyHead() {
  return (
    <Head>
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
}
