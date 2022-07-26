import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import "antd/dist/antd.variable.min.css";
import { ConfigProvider } from "antd";
import "@/styles/tailwind.css";

ConfigProvider.config({
  theme: {
    primaryColor: "#25b864",
  },
});

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
