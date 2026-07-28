import type { Metadata } from "next";
import "./globals.css";
import QueryProvider from "@/providers/query-provider";

export const metadata: Metadata = {
  title: "Robinhood Trading Journal | AI Analytics & Insights",
  description: "Modern, high-performance personal trading journal with automated Robinhood trade construction and AI performance analytics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#07090e] text-slate-100 min-h-screen">
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
