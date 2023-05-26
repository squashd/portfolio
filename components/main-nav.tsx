"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation";

import { MainNavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export const BreadCrumb = () => {
  const segments = useSelectedLayoutSegments();

  const compoundedSegments = segments.map((segment, index) => {
    return decodeURI(segments.slice(0, index + 1).join("/"));
  });

  return (
    <ul className="text-md flex flex-wrap items-center uppercase tracking-tight sm:text-lg">
      {segments.length > 0 ? (
        <li>
          <Link
            href="/"
            className="group relative inline-block transition duration-300"
          >
            Hjem
            <span className="relative bottom-1 block h-[1px] max-w-0 bg-current transition-all duration-500 group-hover:max-w-full"></span>
          </Link>
        </li>
      ) : null}
      {segments.map((segment, index) => (
        <li key={index} className="before:mx-1 before:content-['/']">
          {index < segments.length - 1 ? (
            <Link
              href={`${compoundedSegments[index]}`}
              className="group relative inline-block transition duration-300"
            >
              {decodeURI(segment).replace("-", " ")}
              <span className="relative bottom-1 block h-[1px] max-w-0 bg-current transition-all duration-500 group-hover:max-w-full"></span>
            </Link>
          ) : (
            <span className="text-color">
              {decodeURI(segment).replace("-", " ")}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export const MainNav = ({ items, children }: MainNavProps) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <div className="flex gap-6">
      {items?.length ? (
        <nav className="hidden gap-4 md:flex">
          {items?.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "relative flex items-center text-sm font-medium transition-colors hover:text-slate-950 dark:hover:text-slate-50/80",
                  "text-slate-950/70 dark:text-slate-50/60",
                  item.disabled && "cursor-not-allowed opacity-80",
                  "after:absolute after:bottom-1 after:block after:h-[2px] after:w-0 after:w-full after:max-w-0 after:rounded-full after:bg-color after:transition-all after:content-[''] after:hover:max-w-full"
                )}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      ) : null}
      <button
        className="flex items-center md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">Menu</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
      <ModeToggle />
    </div>
  );
};
