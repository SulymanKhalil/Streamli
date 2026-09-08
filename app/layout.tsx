import type { Metadata } from "next";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = {
  title: {
    default: "Streamli — Ultra-Low Latency Video Streaming & Digital Infrastructure",
    template: "%s — Streamli",
  },
  description:
    "Streamli engineers resilient video streaming infrastructure, custom OTT platforms, and high-performance digital products for modern media organizations.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://streamli.example"),
  openGraph: {
    title: "Streamli — Ultra-Low Latency Video Streaming & Digital Infrastructure",
    description:
      "A specialized streaming technology partner delivering sub-second live video, adaptive VOD encoding, and high-performance digital products.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Streamli — Ultra-Low Latency Video Streaming & Digital Infrastructure",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}

