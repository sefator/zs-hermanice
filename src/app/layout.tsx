import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ZŠ Heřmanice",
  description:
    "Komunitní základní škola Heřmanice – moderní výuka, otevřený přístup a propojení s přírodou.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
