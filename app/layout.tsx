import "./globals.css";
import { Metadata } from "next";

import { Navbar } from "@/components";
import { Footer } from "@/components";

export const metadata: Metadata = {
  title: "NextCar - Showcase of your next car!",
  description: "Search and find your next car.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
