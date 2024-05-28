import type {} from "@mui/system"; // DO NOT REMOVE THIS - for pnpm
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";

import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { MuiProvider } from "@repo/mui-utils";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-family",
});

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

        {process.env.NODE_ENV === "production" && <Analytics mode="production" />}
      </body>
    </html>
  );
}
