'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-xl font-semibold text-sky-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">
            Fant ikke siden
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-400">
            Beklager, men den siden finnes ikke
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Link
              href="/"
              className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold transition ease-out text-white shadow-sm hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Tilbake til forsiden
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
