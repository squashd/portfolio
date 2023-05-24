import { Project } from "@/types";

const featuredGames: Project[] = [
  {
    title: "Wordle",
    descriptiveLabel: "Ordspill",
    description: "Ordspill fenomenet som tok verden med storm.",
    icon: "wordle",
    tags: [
      { tag: "Sideprosjekt", weight: 3 },
      { tag: "NextJS", weight: 6 },
      { tag: "TypeScript", weight: 4 },
    ],
    links: {
      internal: {
        href: "/portef%C3%B8lje/spill/wordle",
        label: "Prøv spillet her",
        icon: "link",
      },
    },
  },
];

export { featuredGames };
