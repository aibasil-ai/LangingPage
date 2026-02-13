import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "個人數位實驗室 | Landing Page",
  description: "以模組化區塊呈現個人介紹、系統工具、部落格與聯絡資訊。",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
