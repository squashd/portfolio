import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

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
      <body className="h-full text-zinc-300">
        <NavBar />
        <main className="h-full">{children}</main>
      </body>
    </html>
  );
}
