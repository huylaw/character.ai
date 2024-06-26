import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./style.scss";
import SideBar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative overflow-hidden bg-[#18181b] text-[#fafafa]">
          <div className="flex h-screen">
            <SideBar />
            <div className="h-[100dvh] flex-1 overflow-x-hidden">
              <div className="h-full">
                {children}
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
