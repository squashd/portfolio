import { MainNav } from "@/components/main-nav";
import { layoutConfig } from "@/config/layout";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { WidthWrapperFlex } from "@/components/layouts";
import * as React from "react";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WidthWrapperFlex className="fixed z-50 flex w-full max-w-5xl items-center justify-between pb-0 pt-4">
        <Link
          href={
            layoutConfig.mainNav.find((nav) => nav.title === "Hjem")?.href ??
            "/"
          }
          className="hidden items-center space-x-2 md:flex"
        >
          <Icons.logo className="h-8" />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>
        <MainNav items={layoutConfig.mainNav} />
      </WidthWrapperFlex>
      <main className="h-full scroll-smooth">{children}</main>
    </>
  );
}
