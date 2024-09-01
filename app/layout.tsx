import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
});

export const metadata = {
  title: "Hjartland | Fullstack utvikler",
  description: "Fullstack utvikler",
};

const BackgroundPattern = () => (
  <svg
    className="pointer-events-none fixed z-10 h-full w-full opacity-70 mix-blend-soft-light"
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
  >
    <filter id="noise">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.60"
        numOctaves="4"
        stitchTiles="stitch"
      ></feTurbulence>
    </filter>
    <rect width="100%" height="100%" filter="url(#noise)"></rect>
  </svg>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className="h-full">
      <body
        className={cn(
          "z-50 h-full overscroll-y-none bg-zinc-900 font-sans text-rose-400 antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <BackgroundPattern />
        {children}
      </body>
    </html>
  );
}
