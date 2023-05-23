import { Project } from "@/components/cards";
import { Icons } from "@/components/icons";

const featuredGallery: Project[] = [
  {
    title: "Lynrask",
    descriptiveLabel: "Animasjon",
    description: "Tekst som løper lynraskt hele verden rundt på få sekunder",
    icon: Icons.lightning,
    link: {
      href: "/portef%C3%B8lje/galleri/lightning",
      label: "Se animasjonen her",
      descriptiveIcon: Icons.eye,
    },
    external: false,
  },
  {
    title: "Skrivemaskin",
    descriptiveLabel: "Animasjon",
    description: "Animasjon som simulerer skrivemaskin med blinkende caret",
    icon: Icons.typewriter,
    link: {
      href: "/portef%C3%B8lje/galleri/typing-effect",
      label: "Se animasjonen her",
      descriptiveIcon: Icons.eye,
    },
    external: false,
  },
  {
    title: "Ordrelinje",
    descriptiveLabel: "Komponent",
    description: "Komponent for visning og behandling av ordrelinje",
    icon: Icons.list,
    link: {
      href: "/portef%C3%B8lje/galleri/order-line",
      label: "Se komponenten her",
      descriptiveIcon: Icons.eye,
    },
    external: false,
  },
];

export { featuredGallery };
