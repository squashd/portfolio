import { WordleMini } from "@/assets/logos/minilogos";
import { ReactElement } from "react";
import { LinkIcon } from "@/assets/Icons";

type games = {
  title: string;
  category: string;
  description: string;
  link: {
    href: string;
    label: string;
    descriptiveIcon: ReactElement<SVGSVGElement>;
  };
  logo: ReactElement<SVGSVGElement>;
}[];
const featuredGames: games = [
  {
    title: "Wordle",
    category: "Ordspill",
    description: "Ordspill fenomenet som tok verden med storm.",
    logo: <WordleMini />,
    link: {
      href: "/portef%C3%B8lje/spill/wordle",
      label: "Prøv spillet her",
      descriptiveIcon: <LinkIcon />,
    },
  },
];

export { featuredGames };
