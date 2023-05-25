import { Project } from "@/types";

const featuredProjects: Project[] = [
  {
    title: "Merkelappen.no",
    descriptiveLabel: "Butikksider",
    description: "Nettbutikk integrert med Avarda Checkout.",
    icon: "merkelappen",
    tags: [
      { tag: "NextJS", weight: 100 },
      { tag: "TailwindCSS", weight: 70 },
      { tag: "TypeScript", weight: 100 },
      { tag: "Fullstack", weight: 120 },
      { tag: "Integrasjon", weight: 50 },
      { tag: "Backend", weight: 70 },
      { tag: "Prisma", weight: 20 },
      { tag: "MySQL", weight: 40 },
      { tag: "REST API", weight: 30 },
      { tag: "UI", weight: 30 },
      { tag: "Integrasjon", weight: 50 },
    ],
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
    title: "iRate",
    descriptiveLabel: "Rating App",
    description: "En app laget for min far å kunne rate kaffekapsler.",
    icon: "coffee",
    tags: [
      { tag: "NextJS", weight: 100 },
      { tag: "React", weight: 100 },
      { tag: "TailwindCSS", weight: 70 },
      { tag: "TypeScript", weight: 100 },
      { tag: "Backend", weight: 60 },
      { tag: "Frontend", weight: 60 },
      { tag: "Fullstack", weight: 100 },
      { tag: "UI", weight: 40 },
      { tag: "Redis", weight: 10 },
      { tag: "Prisma", weight: 20 },
      { tag: "MySQL", weight: 40 },
    ],
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
      readMore: {
        href: "/portef%C3%B8lje/prosjekter/irate",
        label: "Les mer om prosjektet",
        icon: "book",
      },
    },
  },
  {
    title: "Merkelappen.no",
    descriptiveLabel: "Adminsider",
    description:
      "Adminsider for ordrebehandling og generering av trykkmateriale.",
    icon: "merkelappen",
    tags: [
      { tag: "NextJS", weight: 60 },
      { tag: "TailwindCSS", weight: 40 },
      { tag: "TypeScript", weight: 50 },
      { tag: "Fullstack", weight: 60 },
      { tag: "Integrasjon", weight: 80 },
      { tag: "Backend", weight: 100 },
      { tag: "Prisma", weight: 80 },
      { tag: "MySQL", weight: 50 },
      { tag: "REST API", weight: 90 },
      { tag: "UI", weight: 80 },
      { tag: "SecOps", weight: 20 },
      { tag: "Integrasjon", weight: 50 },
    ],
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
    tags: [
      { tag: "NextJS", weight: 20 },
      { tag: "TailwindCSS", weight: 70 },
      { tag: "TypeScript", weight: 100 },
      { tag: "Frontend", weight: 100 },
      { tag: "Design", weight: 100 },
    ],
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
    title: "Odin Revisited",
    descriptiveLabel: "Diverse",
    description:
      "En samling av mindre prosjekter fra The Odin Project gjort på nytt.",
    icon: "odin",
    tags: [
      { tag: "NextJS", weight: 10 },
      { tag: "TailwindCSS", weight: 10 },
      { tag: "TypeScript", weight: 10 },
      { tag: "Frontend", weight: 10 },
      { tag: "CMS", weight: 3 },
      { tag: "Sideprosjekt", weight: 2 },
    ],
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
