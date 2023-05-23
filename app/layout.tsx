import { Analytics } from "@vercel/analytics/react";
import Providers from "@/app/providers";
import { Inter as FontSans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";
import * as React from "react";

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
    className="fixed inset-0 -z-10 h-full w-full stroke-slate-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-slate-900"
    aria-hidden="true"
  >
    <defs>
      <pattern
        id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
        width={200}
        height={200}
        x="50%"
        y={-64}
        patternUnits="userSpaceOnUse"
      >
        <path d="M100 200V.5M.5 .5H200" fill="none" />
      </pattern>
    </defs>
    <svg
      x="50%"
      y={-64}
      className="overflow-visible fill-slate-200 dark:fill-slate-900"
    >
      <path
        d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M299.5 800h201v201h-201Z"
        strokeWidth={0}
      />
    </svg>
    <rect
      width="100%"
      height="100%"
      strokeWidth={0}
      fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
    />
  </svg>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className="h-full" suppressHydrationWarning>
      <body
        className={cn(
          "slate-50 h-full font-sans text-slate-800 antialiased dark:bg-slate-950 dark:text-slate-100",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <Providers>
          <BackgroundPattern />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
