import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mikko Kukkonen | Portfolio",
  description: "Portfolio website for Mikko Kukkonen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 text-gray-950 relative pt-28 sm:pt-36`}>
        <div className="bg-[#ebcaf3] absolute top-[-6rem] -z-10 right-[11rem] h-[31rem]
         w-[31rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-2rem] -z-10 left-[-35rem] h-[31.25rem]
         w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]
          xl:left-[-15rem]"></div>

        <Header/>
        {children}
      </body>
    </html>
  );
}
