import { Project } from "@/types";
import { Icons } from "@/components/icons";

const featuredGames: Project[] = [
  {
    title: "Wordle",
    descriptiveLabel: "Ordspill",
    description: "Ordspill fenomenet som tok verden med storm.",
    icon: Icons.wordle,
    links: {
      internal: {
        href: "/portef%C3%B8lje/spill/wordle",
        label: "Prøv spillet her",
        icon: Icons.link,
      },
    },
  },
];

export { featuredGames };
