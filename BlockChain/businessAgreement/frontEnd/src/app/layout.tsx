import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import React, { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });
import Loading from "./_components/loading";

interface MenuProps {
  className: string;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
  };

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className="font-explorerFont">
        <>
          <div className="dark:bg-black/90">{children}</div>
          <div className="relative" id="portal"></div>
        </>
      </body>
    </html>
  );
}