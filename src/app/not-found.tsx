import Link from "next/link";
import { Dog404 } from "@/assets/images/Illustrations";

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="mt-4 text-xl font-light tracking-tight text-zinc-100">
            Fant ikke siden
          </p>
          <h1 className="mb-6 text-7xl font-bold text-zinc-300">404</h1>
          <Dog404 className="text-zinc-300" />
          <p className="mt-6 text-base leading-7 text-gray-400">
            Beklager, men den siden finnes ikke
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Link
              href="/"
              className="rounded-md bg-sky-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm transition ease-out hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
            >
              Tilbake til forsiden
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
