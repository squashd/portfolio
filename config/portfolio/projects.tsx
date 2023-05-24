import { Project } from "@/types";

const featuredProjects: Project[] = [
  {
    title: "Merkelappen.no",
    descriptiveLabel: "Butikksider",
    description: "Nettbutikk integrert med Avarda Checkout.",
    icon: "merkelappen",
    links: {
      readMore: {
        href: "/portef%C3%B8lje/prosjekter/merkelappen-butikk",
        label: "Les mer om prosjektet",
        icon: "book",
      },
      external: {
        href: "https://merkelappen.no",
        label: "Se merkelappen live",
        icon: "link",
      },
    },
  },
  {
    title: "Merkelappen.no",
    descriptiveLabel: "Adminsider",
    description:
      "Adminsider for ordrebehandling og generering av trykkmateriale.",
    icon: "merkelappen",
    links: {
      readMore: {
        href: "/portef%C3%B8lje/prosjekter/merkelappen-admin",
        label: "Les mer om prosjektet",
        icon: "book",
      },
    },
  },
  {
    title: "Hjartland",
    descriptiveLabel: "Portefølje",
    description: "Min personlige side, bygget med Next.js og TailwindCSS.",
    icon: "miniLogo",
    links: {
      internal: {
        href: "/",
        label: "Tilbake til forsiden?",
        icon: "link",
      },
      github: {
        href: "https://github.com/SQUASHD/portfolio",
        label: "Se mer på GitHub",
        icon: "github",
      },
    },
  },
  {
    title: "iRate",
    descriptiveLabel: "Rating App",
    description: "En app laget for min far å kunne rate kaffekapsler.",
    icon: "coffee",
    links: {
      github: {
        href: "https://github.com/SQUASHD/irate",
        label: "Se mer på GitHub",
        icon: "github",
      },
      external: {
        href: "https://irate.no",
        label: "Se irate-applikasjonen live",
        icon: "link",
      },
    },
  },
  {
    title: "Odin Revisited",
    descriptiveLabel: "Diverse",
    description:
      "En samling av mindre prosjekter fra The Odin Project gjort på nytt.",
    icon: "odin",
    links: {
      github: {
        href: "https://github.com/SQUASHD/odin-revisited",
        label: "Se mer på GitHub",
        icon: "github",
      },
      external: {
        href: "https://odin.hjartland.dev",
        label: "Se sidene til Odin Revisited",
        icon: "link",
      },
    },
  },
];

export { featuredProjects };
