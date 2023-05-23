import { Project } from "@/components/cards";
import { Icons } from "@/components/icons";

const featuredGames: Project[] = [
  {
    title: "Wordle",
    descriptiveLabel: "Ordspill",
    description: "Ordspill fenomenet som tok verden med storm.",
    icon: Icons.wordle,
    link: {
      href: "/portef%C3%B8lje/spill/wordle",
      label: "Prøv spillet her",
      descriptiveIcon: Icons.link,
    },
    external: false,
  },
];

export { featuredGames };
