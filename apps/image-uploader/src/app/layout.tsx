import type {} from "@mui/system"; // DO NOT REMOVE THIS - for pnpm
import type {} from "@emotion/styled"; // DO NOT REMOVE THIS - for pnpm

import type { Metadata } from "next";
import "@repo/css-design-system/globals.css";
import { MuiProvider } from "@repo/mui-utils";
import { notoSans } from "@repo/nextjs-utils/fonts";

export const metadata: Metadata = {
  title: "Frontend Templates • Jazim Abbas",
  description: "Frontend templates with beautiful & modular designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSans.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <MuiProvider>{children}</MuiProvider>
      </body>
    </html>
  );
}