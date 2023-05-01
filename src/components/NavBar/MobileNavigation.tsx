"use client";
import { Popover, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";

function ChevronDownIcon({ classNameString }: { classNameString: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={classNameString}
    >
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
    </svg>
  );
}

function CloseIcon({ classNameString }: { classNameString: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={classNameString}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MobileNavItem({
  href,
  children,
  key,
}: {
  href: string;
  children: React.ReactNode;
  key: number;
}) {
  return (
    <li>
      <Popover.Button as={Link} key={key} href={href} className="block py-2">
        {children}
      </Popover.Button>
    </li>
  );
}

export default function MobileNavigation({ className }: { className: string }) {
  return (
    <Popover className={className}>
      <Popover.Button className="group flex items-center rounded-full bg-zinc-800/90 px-4 py-2 text-sm font-medium text-zinc-200 shadow-lg shadow-zinc-800/5 ring-1 ring-white/10 ring-zinc-900/5 backdrop-blur hover:ring-white/20">
        Meny
        <ChevronDownIcon
          classNameString={
            "ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-400"
          }
        />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-zinc-800/80 backdrop-blur-sm" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-zinc-900 p-8 ring-1 ring-zinc-900/5"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <CloseIcon classNameString="h-6 w-6 text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-400">Navigasjon</h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100/5 text-base text-zinc-300">
                <MobileNavItem href="/" key={1}>
                  Hjem
                </MobileNavItem>
                <MobileNavItem href="/portefølje" key={2}>
                  Portefølje
                </MobileNavItem>
                <MobileNavItem href="/kontakt" key={3}>
                  Kontakt
                </MobileNavItem>
                <Popover.Button>
                  <a href="/#om-meg" className="block py-2">
                    Mer om meg
                  </a>
                </Popover.Button>
              </ul>
              {/* TODO: Change to map once link works to hash anchors */}
              {/*<ul className="-my-2 divide-y divide-zinc-100/5 text-base text-zinc-300">*/}
              {/*  {navigation.map((item, index) => (*/}
              {/*    <MobileNavItem href={item.href} key={index}>*/}
              {/*      {item.name}*/}
              {/*    </MobileNavItem>*/}
              {/*  ))}*/}
              {/*</ul>*/}
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}
