import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Barak Digital",
  description: "Your trusted source for business, jobs, and local news.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main className="pt-16 min-h-screen bg-gray-50">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
