import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import NavBar from "../components/NavBar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hjartland | Fullstack utvikler",
  description: "Fullstack utvikler",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} h-full`}>
      <body className="bg-zinc-1000 h-full text-zinc-300">
        <NavBar />
        <main className="h-full">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
