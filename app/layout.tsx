import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IU Studio",
  description: "Arhitectura si design interior",
};

function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


export default RootLayout;