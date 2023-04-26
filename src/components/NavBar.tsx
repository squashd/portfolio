'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

type NavigationItem = {
  name: string;
  href: string;
};

const navigation: NavigationItem[] = [
  { name: 'Hjem', href: '/' },
  { name: 'Prosjekter', href: '/prosjekter' },
  // { name: 'Galleri', href: '/galleri' },
  { name: 'Kontakt', href: '/kontakt' },
  { name: 'Mer om meg', href: '/om-meg' },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav
        className={`${
          isScrolled ? 'backdrop-blur-lg backdrop-filter' : ''
        } absolute z-10 w-screen py-6`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
          {/* Logo */}
          <Link href="/">
            <div className="relative z-50 transition ease-out hover:opacity-80 hover:transition hover:ease-in">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 559.03 90"
                fill="currentColor"
                className="h-8"
              >
                <g>
                  <polygon points="64.29 0 64.29 12.86 77.14 12.86 77.14 77.14 64.29 77.14 64.29 90 90 90 90 0 64.29 0" />
                  <rect x="25.71" y="12.86" width="38.57" height="12.86" />
                  <rect x="25.71" y="38.57" width="38.57" height="12.86" />
                  <polygon points="12.86 12.86 25.71 12.86 25.71 0 0 0 0 90 12.86 90 25.71 90 25.71 77.14 12.86 77.14 12.86 12.86" />
                  <rect x="25.71" y="64.29" width="38.57" height="12.86" />
                </g>
                <g>
                  <path d="M159.57,77.24h-5.47v-30.77h-36.68v30.77h-5.42V13.05h5.42v28.83h36.68V13.05h5.47V77.24Z" />
                  <path d="M198.11,13.05h5.47V58.15c0,6.08-1.76,10.93-5.27,14.55-3.51,3.62-8.22,5.42-14.13,5.42-6.23,0-11.02-1.63-14.37-4.89-3.35-3.26-5.03-7.82-5.03-13.67h5.42c0,4.65,1.22,8.13,3.66,10.47s5.88,3.5,10.32,3.5c4.08,0,7.41-1.35,9.99-4.06,2.57-2.7,3.89-6.38,3.95-11.02V13.05Z" />
                  <path d="M246.64,59.21h-29.14l-6.61,18.03h-5.69L229.49,13.05h5.16l24.29,64.19h-5.64l-6.65-18.03Zm-27.47-4.59h25.75l-12.87-34.96-12.87,34.96Z" />
                  <path d="M287.3,50.48h-18.65v26.76h-5.47V13.05h20.85c6.85,0,12.2,1.66,16.05,4.98,3.85,3.32,5.77,7.95,5.77,13.91,0,4.11-1.21,7.73-3.62,10.88-2.41,3.14-5.64,5.31-9.7,6.52l16.05,27.33v.57h-5.78l-15.52-26.76Zm-18.65-4.59h16.62c4.56,0,8.22-1.29,10.98-3.89s4.14-5.95,4.14-10.07c0-4.53-1.44-8.05-4.32-10.55-2.88-2.5-6.92-3.75-12.13-3.75h-15.3v28.26Z" />
                  <path d="M356.61,17.64h-22v59.6h-5.42V17.64h-21.95v-4.59h49.38v4.59Z" />
                  <path d="M366.87,72.66h31.7v4.58h-37.17V13.05h5.47v59.6Z" />
                  <path d="M441.64,59.21h-29.14l-6.61,18.03h-5.69l24.29-64.19h5.16l24.29,64.19h-5.64l-6.66-18.03Zm-27.47-4.59h25.75l-12.87-34.96-12.87,34.96Z" />
                  <path d="M506.06,77.24h-5.42l-36.9-54.93v54.93h-5.47V13.05h5.47l36.94,54.98V13.05h5.38V77.24Z" />
                  <path d="M513.66,77.24V13.05h17.94c5.26,0,9.98,1.2,14.15,3.59,4.17,2.4,7.43,5.83,9.77,10.29,2.34,4.47,3.5,9.55,3.5,15.25v5.91c0,5.73-1.16,10.82-3.48,15.25-2.32,4.44-5.59,7.86-9.81,10.27-4.22,2.41-9.06,3.62-14.53,3.62h-17.55Zm5.42-59.6v55.02h12.17c6.76,0,12.18-2.24,16.27-6.73,4.08-4.49,6.13-10.55,6.13-18.2v-5.65c0-7.38-2.01-13.3-6.04-17.74-4.03-4.44-9.33-6.68-15.92-6.71h-12.61Z" />
                </g>
              </svg>
            </div>
          </Link>
          <button className="z-50 md:hidden" onClick={toggleMenu}>
            <div className="duration-500 ease-out hover:opacity-80">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 7 7"
                fill="currentColor"
                className="aspect-square h-8"
              >
                <rect x="2" y="1" width="5" height="1" />
                <rect x="2" y="3" width="5" height="1" />
                <rect x="2" y="5" width="5" height="1" />
              </svg>
            </div>
          </button>
          {/* Mobile Navigation */}
          <div
            className={`${
              menuOpen ? 'w-screen backdrop-blur-lg backdrop-filter' : 'w-0 overflow-hidden'
            } absolute right-0 top-0 z-10 flex h-screen transform items-center justify-center text-xl duration-500 ease-out md:hidden`}
          >
            <ul className={`${
              menuOpen ? "scale-x-100" : "scale-x-0" } transition duration-500 flex flex-col`}>
              {navigation.map((item, index) => (
                <li key={index} className="border-white py-2 not-last:border-b">
                  <Link href={item.href} onClick={toggleMenu}>
                    <span className="font-bold uppercase hover:opacity-80">
                      {item.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Desktop Navigation */}
          <ul className="hidden font-bold uppercase md:flex">
            {navigation.map((item, index) => (
              <li
                key={index}
                className="px-2 transition hover:opacity-80 hover:transition hover:ease-in-out not-last:border-r"
              >
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
