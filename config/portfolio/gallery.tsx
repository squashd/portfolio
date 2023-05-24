import { Project } from "@/types";
import { Icons } from "@/components/icons";

const featuredGallery: Project[] = [
  {
    title: "Lynrask",
    descriptiveLabel: "Animasjon",
    description: "Tekst som løper lynraskt hele verden rundt på få sekunder",
    icon: Icons.lightning,
    links: {
      internal: {
        href: "/portef%C3%B8lje/galleri/lightning",
        label: "Se animasjonen her",
        icon: Icons.eye,
      },
    },
  },
  {
    title: "Skrivemaskin",
    descriptiveLabel: "Animasjon",
    description: "Animasjon som simulerer skrivemaskin med blinkende caret",
    icon: Icons.typewriter,
    links: {
      internal: {
        href: "/portef%C3%B8lje/galleri/typing-effect",
        label: "Se animasjonen her",
        icon: Icons.eye,
      },
    },
  },
  {
    title: "Ordrelinje",
    descriptiveLabel: "Komponent",
    description: "Komponent for visning og behandling av ordrelinje",
    icon: Icons.list,
    links: {
      internal: {
        href: "/portef%C3%B8lje/galleri/order-line",
        label: "Se komponenten her",
        icon: Icons.eye,
      },
    },
  },
];

export { featuredGallery };
