import { SimpleLayout } from "@/components/SimpleLayout";
import type { ClassNameProps } from "@/types/Props";
import { cloneElement, ReactElement } from "react";
import Link from "next/link";
import { HjartlandMini, MerkelappenMini } from "@/assets/logos/minilogos";

export const metadata = {
  title: "Prosjekter - Hjartland",
  description: "Ting og tang jeg har laget.",
};

type projects = {
  company: string;
  title: string;
  description: string;
  link: { href: string; label: string };
  logo: ReactElement<SVGSVGElement>;
}[];

const projectList: projects = [
  {
    company: "Merkelappen.no",
    title: "Butikksider",
    description: "Nettbutikk integrert med Avarda Checkout.",
    logo: <MerkelappenMini />,
    link: {
      href: "/prosjekter/merkelappen-butikk",
      label: "merkelappen.no",
    },
  },
  {
    company: "Merkelappen.no",
    title: "Adminsider",
    description:
      "Adminsider for ordrebehandling og generering av trykkmateriale.",
    logo: <MerkelappenMini />,
    link: {
      href: "/prosjekter/merkelappen-admin",
      label: "merkelappen.no",
    },
  },
  {
    company: "Hjartland",
    title: "Portefølje",
    description: "Min personlige side, bygget med Next.js og TailwindCSS.",
    logo: <HjartlandMini />,
    link: {
      href: "https://www.hjartland.dev/prosjekter/hjartland",
      label: "hjartland.dev",
    },
  },
];

function LinkIcon({ className }: ClassNameProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default async function Projects() {
  return (
    <>
      <SimpleLayout
        title="Ting jeg har laget"
        intro="Som freelancer og student – samt ellers i fritiden – har jeg har jobbet på en masse prosjekter. Her er noen av de jeg er mest stolt av."
      >
        <section>
          <h2 className="mb-4 text-3xl font-bold">Større prosjekter</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projectList.map((project, index) => (
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
                  <span className="text-zinc-400 group-hover:text-sky-600">
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
                <div className="flex items-center group-hover:text-sky-600">
                  <LinkIcon className="inline-block aspect-square h-6" />
                  <span>{project.link.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-16">
          <h2 className="mb-4 text-3xl font-bold">Mindre prosjekter</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projectList.map((project, index) => (
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
                  <span className="text-zinc-400 group-hover:text-sky-600">
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
                <div className="flex items-center group-hover:text-sky-600">
                  <LinkIcon className="inline-block aspect-square h-6" />
                  <span>{project.link.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </SimpleLayout>
    </>
  );
}
