import { BreadCrumb, MainNav } from "@/components/main-nav";
import { layoutConfig } from "@/config/layout";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { WidthWrapperFlex } from "@/components/layouts";
import * as React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WidthWrapperFlex className="z-50 flex h-20 w-full items-center justify-between py-6">
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
      <WidthWrapperFlex>
        <BreadCrumb />
      </WidthWrapperFlex>
      <main className="h-full">{children}</main>
    </>
  );
}
