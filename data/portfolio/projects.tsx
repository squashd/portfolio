import { Project } from "@/components/cards";
import { Icons } from "@/components/icons";

const featuredProjects: Project[] = [
  {
    title: "Merkelappen.no",
    descriptiveLabel: "Butikksider",
    description: "Nettbutikk integrert med Avarda Checkout.",
    icon: Icons.merkelappen,
    link: {
      href: "/portef%C3%B8lje/prosjekter/merkelappen-butikk",
      label: "Les mer om prosjektet",
      descriptiveIcon: Icons.info,
    },
    external: false,
  },
  {
    title: "Merkelappen.no",
    descriptiveLabel: "Adminsider",
    description:
      "Adminsider for ordrebehandling og generering av trykkmateriale.",
    icon: Icons.merkelappen,
    link: {
      href: "/portef%C3%B8lje/prosjekter/merkelappen-admin",
      label: "Les mer om prosjektet",
      descriptiveIcon: Icons.info,
    },
    external: false,
  },
  {
    title: "Hjartland",
    descriptiveLabel: "Portefølje",
    description: "Min personlige side, bygget med Next.js og TailwindCSS.",
    icon: Icons.miniLogo,
    link: {
      href: "/",
      label: "Tilbake til forsiden?",
      descriptiveIcon: Icons.link,
    },
    external: false,
  },
  {
    title: "iRate",
    descriptiveLabel: "Rating App",
    description: "En app laget for min far å kunne rate kaffekapsler.",
    icon: Icons.coffee,
    link: {
      href: "https://github.com/SQUASHD/irate",
      label: "Se mer på GitHub",
      descriptiveIcon: Icons.github,
    },
    external: true,
  },
  {
    title: "Odin Revisited",
    descriptiveLabel: "Diverse",
    description:
      "En samling av mindre prosjekter fra The Odin Project gjort på nytt.",
    icon: Icons.odin,
    link: {
      href: "https://odin.hjartland.dev",
      label: "Se siden",
      descriptiveIcon: Icons.link,
    },
    external: true,
  },
];

export { featuredProjects };
