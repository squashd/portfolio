import { ReactElement } from "react";
import { HjartlandMini, MerkelappenMini } from "@/assets/logos/minilogos";
import { InfoIcon, LinkIcon } from "@/assets/Icons";

export type project = {
  company: string;
  descriptiveLabel: string;
  description: string;
  link: {
    href: string;
    label: string;
    descriptiveIcon: ReactElement<SVGSVGElement>;
  };
  logo: ReactElement<SVGSVGElement>;
};

const featuredProjects: project[] = [
  {
    company: "Merkelappen.no",
    descriptiveLabel: "Butikksider",
    description: "Nettbutikk integrert med Avarda Checkout.",
    logo: <MerkelappenMini />,
    link: {
      href: "/portef%C3%B8lje/prosjekter/merkelappen-butikk",
      label: "Les mer om prosjektet",
      descriptiveIcon: <InfoIcon />,
    },
  },
  {
    company: "Merkelappen.no",
    descriptiveLabel: "Adminsider",
    description:
      "Adminsider for ordrebehandling og generering av trykkmateriale.",
    logo: <MerkelappenMini />,
    link: {
      href: "/portef%C3%B8lje/prosjekter/merkelappen-admin",
      label: "Les mer om prosjektet",
      descriptiveIcon: <InfoIcon />,
    },
  },
  {
    company: "Hjartland",
    descriptiveLabel: "Portefølje",
    description: "Min personlige side, bygget med Next.js og TailwindCSS.",
    logo: <HjartlandMini />,
    link: {
      href: "/",
      label: "Tilbake til forsiden?",
      descriptiveIcon: <LinkIcon />,
    },
  },
];

export { featuredProjects };
