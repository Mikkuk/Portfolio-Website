import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={`${inter.className} bg-gray-50 text-gray-950 relative`}>
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31rem]
         w-[31rem] rounded-full blur-[10rem] sm:w-[69rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31rem]
         w-[50rem] rounded-full blur-[10rem] sm:w-[69rem] md:left-[-33rem] lg:left-[-28rem]
          xl:left-[-15rem]"></div>
        {children}
      </body>
    </html>
  );
}
