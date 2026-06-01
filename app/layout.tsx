import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PharmaDM Guide - 薬剤師のための糖尿病薬フローチャート",
  description:
    "病棟薬剤師が糖尿病薬の術前休薬・シックデイ・食止め時の対応を判断できるフローチャートツール",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div className="mx-auto max-w-lg min-h-screen">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
