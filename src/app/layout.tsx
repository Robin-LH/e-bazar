import TopBar from "@/layout/topBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppContext from "@/context";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "E-Bazar",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppContext>
          <TopBar />
          {children}
        </AppContext>
      </body>
    </html>
  );
}
