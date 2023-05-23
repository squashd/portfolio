import { ReactElement } from "react";
import {
  EyeIcon,
  LightningIcon,
  ListIcon,
  TypewriterIcon,
} from "../../assets/Icons";

type galleryItem = {
  title: string;
  category: string;
  description: string;
  link: {
    href: string;
    label: string;
    descriptiveIcon: ReactElement<SVGSVGElement>;
  };
  icon: ReactElement<SVGSVGElement>;
};
const featuredGallery: galleryItem[] = [
  {
    title: "Lynrask",
    category: "Animasjon",
    description: "Tekst som løper lynraskt hele verden rundt på få sekunder",
    icon: <LightningIcon />,
    link: {
      href: "/portef%C3%B8lje/galleri/lightning",
      label: "Se animasjonen her",
      descriptiveIcon: <EyeIcon />,
    },
  },
  {
    title: "Skrivemaskin",
    category: "Animasjon",
    description: "Animasjon som simulerer skrivemaskin med blinkende caret",
    icon: <TypewriterIcon />,
    link: {
      href: "/portef%C3%B8lje/galleri/typing-effect",
      label: "Se animasjonen her",
      descriptiveIcon: <EyeIcon />,
    },
  },
  {
    title: "Ordrelinje",
    category: "Komponent",
    description: "Komponent for visning og behandling av ordrelinje",
    icon: <ListIcon />,
    link: {
      href: "/portef%C3%B8lje/galleri/order-line",
      label: "Se komponenten her",
      descriptiveIcon: <EyeIcon />,
    },
  },
];

export { featuredGallery };
