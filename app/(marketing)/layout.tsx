import { MainNav } from "@/components/main-nav";
import { layoutConfig } from "@/config/layout";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { WidthWrapperFlex } from "@/components/layouts";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WidthWrapperFlex className="fixed z-50 flex h-20 w-full max-w-5xl items-center justify-between py-6">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <Icons.logo className="h-8" />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>
        <MainNav items={layoutConfig.mainNav} />
      </WidthWrapperFlex>
      <main className="h-full">{children}</main>
    </>
  );
}
