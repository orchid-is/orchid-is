import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orchid Infinity Solutions",
  description:
    "Business solutions, wellness experiences and creative innovation by Orchid Infinity Solutions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
