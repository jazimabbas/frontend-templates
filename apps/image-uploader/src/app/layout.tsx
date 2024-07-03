import { Provider } from "jotai";
import type { Metadata } from "next";
import "jotai-devtools/styles.css";
import "@repo/css-design-system/globals.css";
import "react-advanced-cropper/dist/style.css";
import { MuiProvider } from "@repo/mui-utils";
import { notoSans } from "@repo/nextjs-utils/fonts";
import { JotaiDevtools } from "./components/DevTools";

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
        <MuiProvider>
          <Provider>
            <JotaiDevtools />
            {children}
          </Provider>
        </MuiProvider>
      </body>
    </html>
  );
}
