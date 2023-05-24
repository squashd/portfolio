import { Project } from "@/types";
import { Icons } from "@/components/icons";

const featuredProjects: Project[] = [
  {
    title: "Merkelappen.no",
    descriptiveLabel: "Butikksider",
    description: "Nettbutikk integrert med Avarda Checkout.",
    icon: Icons.merkelappen,
    links: {
      readMore: {
        href: "/portef%C3%B8lje/prosjekter/merkelappen-butikk",
        label: "Les mer om prosjektet",
        icon: Icons.book,
      },
      external: {
        href: "https://merkelappen.no",
        label: "Se merkelappen live",
        icon: Icons.link,
      },
    },
  },
  {
    title: "Merkelappen.no",
    descriptiveLabel: "Adminsider",
    description:
      "Adminsider for ordrebehandling og generering av trykkmateriale.",
    icon: Icons.merkelappen,
    links: {
      readMore: {
        href: "/portef%C3%B8lje/prosjekter/merkelappen-admin",
        label: "Les mer om prosjektet",
        icon: Icons.book,
      },
    },
  },
  {
    title: "Hjartland",
    descriptiveLabel: "Portefølje",
    description: "Min personlige side, bygget med Next.js og TailwindCSS.",
    icon: Icons.miniLogo,
    links: {
      external: {
        href: "/",
        label: "Tilbake til forsiden?",
        icon: Icons.link,
      },
      github: {
        href: "https://github.com/SQUASHD/portfolio",
        label: "Se mer på GitHub",
        icon: Icons.github,
      },
    },
  },
  {
    title: "iRate",
    descriptiveLabel: "Rating App",
    description: "En app laget for min far å kunne rate kaffekapsler.",
    icon: Icons.coffee,
    links: {
      github: {
        href: "https://github.com/SQUASHD/irate",
        label: "Se mer på GitHub",
        icon: Icons.github,
      },
      external: {
        href: "https://irate.no",
        label: "Se siden",
        icon: Icons.link,
      },
    },
  },
  {
    title: "Odin Revisited",
    descriptiveLabel: "Diverse",
    description:
      "En samling av mindre prosjekter fra The Odin Project gjort på nytt.",
    icon: Icons.odin,
    links: {
      github: {
        href: "https://github.com/SQUASHD/odin-revisited",
        label: "Se mer på GitHub",
        icon: Icons.github,
      },
      external: {
        href: "https://odin.hjartland.dev",
        label: "Se siden",
        icon: Icons.link,
      },
    },
  },
];

export { featuredProjects };
