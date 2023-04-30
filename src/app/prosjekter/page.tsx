import type { ClassNameProps } from "@/types/Props";
import { cloneElement, ReactElement } from "react";
import Link from "next/link";
import {
  HjartlandMini,
  MerkelappenMini,
  SVGProps,
  WordleMini,
} from "@/assets/logos/minilogos";
import { EyeIcon, InfoIcon, LightningIcon } from "@/assets/Icons";

export const metadata = {
  title: "Prosjekter - Hjartland",
  description: "Ting og tang jeg har laget.",
};

type projects = {
  company: string;
  title: string;
  description: string;
  link: { href: string; label: string; icon: ReactElement<SVGSVGElement> };
  logo: ReactElement<SVGSVGElement>;
}[];

type galleryItem = {
  title: string;
  category: string;
  description: string;
  link: { href: string; label: string; icon: ReactElement<SVGSVGElement> };
  icon: ReactElement<SVGSVGElement>;
};

const projectList: projects = [
  {
    company: "Merkelappen.no",
    title: "Butikksider",
    description: "Nettbutikk integrert med Avarda Checkout.",
    logo: <MerkelappenMini />,
    link: {
      href: "/prosjekter/merkelappen-butikk",
      label: "Les mer om prosjektet",
      icon: <InfoIcon />,
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
      label: "Les mer om prosjektet",
      icon: <InfoIcon />,
    },
  },
  {
    company: "Hjartland",
    title: "Portefølje",
    description: "Min personlige side, bygget med Next.js og TailwindCSS.",
    logo: <HjartlandMini />,
    link: {
      href: "/",
      label: "Tilbake til forsiden?",
      icon: <LinkIcon />,
    },
  },
  {
    company: "Wordle",
    title: "Ordspill",
    description: "Et forsøk på reverse-engineering av Wordle.",
    logo: <WordleMini />,
    link: {
      href: "/prosjekter/wordle",
      label: "Les mer om prosjektet",
      icon: <InfoIcon />,
    },
  },
];

const galleryItemList = [
  {
    title: "Lynrask",
    category: "Animasjon",
    description: "Liten animasjon av tekst som løper verden rundt",
    icon: <LightningIcon />,
    link: {
      href: "/prosjekter/lightning",
      label: "Se animasjonen her",
      icon: <EyeIcon />,
    },
  },
];

function LinkIcon(props: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      fill="currentColor"
      {...props}
    >
      <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
    </svg>
  );
}

export default async function Projects() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-24 max-w-2xl pt-48">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Ting jeg har laget
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-300">
            Som freelancer og student – samt ellers i fritiden – har jeg har
            jobbet på en rekke prosjekter. Her er noen av de jeg er mest stolt
            av.
          </p>
        </header>
        <section className="mx-auto max-w-5xl pb-12">
          <h2 className="mb-4 text-3xl font-bold">
            Prosjekter og applikasjoner
          </h2>
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
        <section className="mx-auto max-w-5xl pb-12">
          <h2 className="mb-4 text-3xl font-bold">Effekter og animasjoner</h2>
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
                    <span className="absolute -inset-1"></span>
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
  );
}
