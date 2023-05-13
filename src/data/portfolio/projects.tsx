import { ReactElement } from "react";
import {
  CoffeeIcon,
  HjartlandMini,
  MerkelappenMini,
} from "@/assets/logos/minilogos";
import { InfoIcon, LinkIcon } from "@/assets/Icons";
import { GitHubIcon } from "@/assets/SocialIcons";

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
  {
    company: "iRate",
    descriptiveLabel: "Rating App",
    description: "En app laget for min far å kunne rate kaffekapsler.",
    logo: <CoffeeIcon />,
    link: {
      href: "https://github.com/SQUASHD/irate",
      label: "Se mer på GitHub",
      descriptiveIcon: <GitHubIcon />,
    },
  },
];

export { featuredProjects };
