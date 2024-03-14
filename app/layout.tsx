import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LeftSideBar from "@/components/leftsidebar";

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
    <html lang="pt" className="overflow-hidden">
      <body className={inter.className }>
        <div className="flex flex-wrap -mx-2 h-full">
            <LeftSideBar />
          <div className="w-full h-full md:w-5/6" >
            <div className="w-full border border-gray-200 rounded-lg">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
