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
      <body className="flex h-full flex-col ">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
