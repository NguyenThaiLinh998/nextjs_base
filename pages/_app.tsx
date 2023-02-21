import "../styles/globals.css";
import "styles/styles.module.scss";
import type { AppProps } from "next/app";
import { wrapper } from "redux/store";
import { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import "antd/dist/antd.css";
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
export default wrapper.withRedux(App);
