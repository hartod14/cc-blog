import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";


export const metadata: Metadata = {
  title: "GameBlog",
  description: "GameBLog Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
