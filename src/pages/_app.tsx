import "@/styles/tailwind.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import "antd/dist/antd.variable.css";
import "@/styles/variables.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps}>
        <MyHead />
      </Component>
    </RecoilRoot>
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
