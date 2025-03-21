import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const quickSand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "DSport - Hệ thống bán đồ thể thao chất lượng, uy tín",
  description: "DSport - Hệ thống bán đồ thể thao chất lượng, uy tín",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning className="overflow-x-hidden">
      <body className={`${quickSand.className} antialiased min-w-screen`}>
        <div className="min-h-screen flex flex-col justify-between">
          <Header />
          <main className="mt-24 container mx-auto px-4 sm:px-0 py-8 w-full">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
