/** @format */

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "../lib/utils";
import SideNavbar from "@/components/SideNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Task Manager",
  description: "Task Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen w-full bg-hr-lightBlue justify-center text-black flex ",
          inter.className,
          {
            "debug-screens": process.env.NODE_ENV === "development",
          }
        )}
      >
        <div className="flex justify-center bg-hr-lightBlue min-h-screen">
          <div className="w-full max-w-[400px] shadow-md">{children}</div>
        </div>
        {/* sidebar */}
        {/* <p className="border">Sidebar</p> */}
        {/* <SideNavbar /> */}
        {/* main page */}
        {/* <div className="p-8 w-full">{children}</div> */}
      </body>
    </html>
  );
}
