import { Project } from "@/types";

const featuredGallery: Project[] = [
  {
    title: "Lynrask",
    descriptiveLabel: "Animasjon",
    description: "Tekst som løper lynraskt hele verden rundt på få sekunder",
    icon: "lightning",
    links: {
      internal: {
        href: "/portef%C3%B8lje/galleri/lightning",
        label: "Se animasjonen her",
        icon: "eye",
      },
    },
  },
  {
    title: "Skrivemaskin",
    descriptiveLabel: "Animasjon",
    description: "Animasjon som simulerer skrivemaskin med blinkende caret",
    icon: "typewriter",
    links: {
      internal: {
        href: "/portef%C3%B8lje/galleri/typing-effect",
        label: "Se animasjonen her",
        icon: "eye",
      },
    },
  },
  {
    title: "Ordrelinje",
    descriptiveLabel: "Komponent",
    description: "Komponent for visning og behandling av ordrelinje",
    icon: "list",
    links: {
      internal: {
        href: "/portef%C3%B8lje/galleri/order-line",
        label: "Se komponenten her",
        icon: "eye",
      },
    },
  },
];

export { featuredGallery };
