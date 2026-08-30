import Head from "next/head";
import type { ReactNode } from "react";
import Layout from "@/components/Layout";

export default function RoutePage({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="建設業の現場管理・販売管理・マッチングを支援する建工管理。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>{children}</Layout>
    </>
  );
}
