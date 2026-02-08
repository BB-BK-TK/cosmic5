import React from "react"
import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: "Cosmic 五 | 별과 오행이 읽어주는 오늘의 방향",
  description:
    "서양 점성술과 동양 사주를 결합한 프리미엄 운세 서비스. 별자리와 오행의 조화로 당신의 오늘을 읽어드립니다.",
  generator: "v0.app",
  // Icons: using app/favicon.ico (default). Add icon-light-32x32.png, icon-dark-32x32.png,
  // icon.svg, and apple-icon.png to public/ if you want custom icons.
  icons: { icon: "/favicon.ico", apple: "/favicon.ico" },
};

export const viewport: Viewport = {
  themeColor: "#0A0A14",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${cormorant.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
