import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://matti.sh"),
  title: "Matti Nannt",
  description:
    "Founder of Formbricks — open-source surveys & experience management.",
  openGraph: {
    title: "Matti Nannt",
    description:
      "Founder of Formbricks — open-source surveys & experience management.",
    url: "https://matti.sh",
    siteName: "matti.sh",
    images: [{ url: "/matti.webp", width: 640, height: 640 }],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Matti Nannt",
    description:
      "Founder of Formbricks — open-source surveys & experience management.",
    images: ["/matti.webp"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
