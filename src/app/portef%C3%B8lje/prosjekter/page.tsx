import { cloneElement } from "react";
import Link from "next/link";
import { featuredProjects } from "@/data/portfolio/projects";

export const metadata = {
  title: "Prosjekter",
  description: "Ting og tang jeg har laget.",
};

// TODO: Add more prosjekter once polished
const projectsList = featuredProjects;
//   .concat([
//   {
//     company: "Wordle",
//     title: "Ordspill",
//     description: "Et forsøk på reverse-engineering av Wordle.",
//     logo: <WordleMini />,
//     link: {
//       href: "/portef%C3%B8lje/prosjekter/wordle",
//       label: "Les mer om prosjektet",
//       icon: <InfoIcon />,
//     },
//   },
// ]);

export default async function Projects() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-24 max-w-2xl pt-48">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Prosjekter og applikasjoner
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-300">
            Noen prosjekter har en større grad av kompleksitet enn andre. Her
            har jeg samlet noen av de prosjektene jeg har jobbet med, og som jeg
            er mest fornøyd med.
          </p>
        </header>
        <section className="mx-auto max-w-5xl pb-12">
          <h2 className="mb-4 text-3xl font-bold">
            Prosjekter og applikasjoner
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projectsList.map((project, index) => (
              <div
                key={project.company + index}
                className="group relative flex flex-col gap-2 rounded-xl bg-zinc-800/40 p-6 transition ease-in-out hover:cursor-pointer hover:bg-zinc-800/80"
              >
                <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-700 bg-zinc-800 p-2">
                  {cloneElement(project.logo, {
                    className: "h-8",
                  })}
                </div>
                <h2 className="font-light">
                  {project.company}{" "}
                  <span className="text-zinc-400 group-hover:text-sky-400">
                    / {project.title}
                  </span>
                </h2>
                <p className="text-sm leading-tight text-zinc-300">
                  {project.description}
                </p>
                <div className="absolute -inset-1 flex items-center">
                  <Link href={project.link.href}>
                    <span className="absolute -inset-1"></span>
                  </Link>
                  <p></p>
                </div>
                <div className="flex items-center group-hover:text-sky-400">
                  {cloneElement(project.link.icon, {
                    className: "h-4 w-4 mr-2",
                  })}
                  <span>{project.link.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export { featuredProjects };
