import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import Burger from "./common/Burger";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website Title",
  description: "Website Description",
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
        {/* <Burger /> */}
        <div className="flex h-full">
          <main className="w-full">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
