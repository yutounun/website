import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./common/Navbar";
import Sidebar from "./common/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ぷろマネ！",
  description: "工数管理アプリ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="flex h-full">
          <main className="w-full mt-20">{children}</main>
        </div>
      </body>
    </html>
  );
}
