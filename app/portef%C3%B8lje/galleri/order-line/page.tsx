"use client";
import Link from "next/link";
import OrderExample from "../../../../components/Projects/OrderExample";

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6">
        <header className="max-w-2xl pt-48">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Ordrelinje
          </h1>
          <p className="mt-6 text-base text-zinc-300">
            Ordrelinje komponent som er tatt i bruk i{" "}
            <Link
              href={"/portef%C3%B8lje/prosjekter/merkelappen-admin"}
              className="group relative inline-block text-sky-400 transition duration-300"
            >
              adminsidene
              <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
            </Link>{" "}
            til merkelappen.no.
          </p>
        </header>
        <section className="py-12">
          <div className="mx-auto max-w-5xl">
            <OrderExample />
          </div>
        </section>
      </div>
    </>
  );
}
