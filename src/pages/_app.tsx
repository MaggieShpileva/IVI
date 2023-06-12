"use client";
import Layout from "@/components/Layout";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { SessionProvider, useSession } from "next-auth/react";
import { wrapper } from "@/Redux/store";

function App({
  Component,
  pageProps: { session, ...pageProps },
  router,
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} key={router.route} />
      </Layout>
    </SessionProvider>
  );
}
export default wrapper.withRedux(App);
