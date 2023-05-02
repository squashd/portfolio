import { cloneElement } from "react";
import Link from "next/link";
import { featuredGallery } from "@/data/portfolio/gallery";

const galleryItemList = featuredGallery;

export const metadata = {
  title: "Galleri - Hjartland",
  description: "Et lite utvalg av komponenter og animasjoner jeg har laget.",
};

export default function Page() {
  return (
    <>
      <>
        <div className="mx-auto max-w-5xl px-6">
          <header className="mb-24 max-w-2xl pt-48">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
              Galleri
            </h1>
            <p className="mt-6 max-w-2xl text-base text-zinc-300">
              Et lite utvalg av komponenter og animasjoner jeg har laget. Noen
              ganger ser jeg en animasjon eller effekt jeg liker, og prøver å
              gjenskape den. Andre ganger er det bare noe jeg har lyst til å
              lage.
            </p>
          </header>
          <section className="mx-auto max-w-5xl">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {galleryItemList.map((galleryItem, index) => (
                <div
                  key={galleryItem.title + index}
                  className="group relative flex flex-col gap-2 rounded-xl bg-zinc-800/40 p-6 transition ease-in-out hover:cursor-pointer hover:bg-zinc-800/80"
                >
                  <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-700 bg-zinc-800 p-2">
                    {cloneElement(galleryItem.icon, {
                      className: "h-8",
                    })}
                  </div>
                  <h2 className="font-light">
                    {galleryItem.title}{" "}
                    <span className="text-zinc-400 group-hover:text-sky-400">
                      / {galleryItem.category}
                    </span>
                  </h2>
                  <p className="text-sm leading-tight text-zinc-300">
                    {galleryItem.description}
                  </p>
                  <div className="absolute -inset-1 flex items-center">
                    <Link href={galleryItem.link.href}>
                      <span className="absolute -inset-1">
                        <span className="sr-only">
                          {galleryItem.link.label}
                        </span>
                      </span>
                    </Link>
                    <p></p>
                  </div>
                  <div className="flex items-center group-hover:text-sky-400">
                    {cloneElement(galleryItem.link.icon, {
                      className: "h-4 w-4 mr-2",
                    })}
                    <span>{galleryItem.link.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </>
    </>
  );
}

export { featuredGallery };
