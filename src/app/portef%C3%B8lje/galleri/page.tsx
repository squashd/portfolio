import { featuredGallery } from "@/data/portfolio/gallery";
import ProjectCard from "@/components/ProjectCard";

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
                <ProjectCard
                  key={index}
                  title={galleryItem.title}
                  description={galleryItem.description}
                  descriptiveLabel={galleryItem.category}
                  icon={galleryItem.icon}
                  link={galleryItem.link}
                />
              ))}
            </div>
          </section>
        </div>
      </>
    </>
  );
}

export { featuredGallery };
