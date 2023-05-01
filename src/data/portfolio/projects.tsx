import { ReactElement } from "react";
import { HjartlandMini, MerkelappenMini } from "@/assets/logos/minilogos";
import { InfoIcon, LinkIcon } from "@/assets/Icons";

export type project = {
  company: string;
  title: string;
  description: string;
  link: { href: string; label: string; icon: ReactElement<SVGSVGElement> };
  logo: ReactElement<SVGSVGElement>;
};

const featuredProjects: project[] = [
  {
    company: "Merkelappen.no",
    title: "Butikksider",
    description: "Nettbutikk integrert med Avarda Checkout.",
    logo: <MerkelappenMini />,
    link: {
      href: "/portef%C3%B8lje/prosjekter/merkelappen-butikk",
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
      href: "/portef%C3%B8lje/prosjekter/merkelappen-admin",
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
];

export { featuredProjects };
