import Link from "next/link";
import { Dog404 } from "@/assets/images/Illustrations";

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="mt-4 text-xl font-light tracking-tight">
            Fant ikke siden
          </p>
          <h1 className="mb-6 font-heading text-7xl">404</h1>
          <Dog404 />
          <p className="mt-6 text-base leading-7 text-muted-foreground">
            Beklager, men den siden finnes ikke
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Link
              href="/"
              className="rounded-md bg-color px-3.5 py-2.5 text-sm font-semibold text-slate-50 shadow-sm transition ease-out hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-color dark:text-slate-950 dark:hover:opacity-80"
            >
              Ta meg hjem, Balto
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
