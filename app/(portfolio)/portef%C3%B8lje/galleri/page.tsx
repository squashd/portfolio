import { featuredGallery } from "@/data/portfolio/gallery";
import { ProjectCard } from "@/components/cards";
import {
  CardGrid,
  H2,
  Separator,
  SimplePageLayout,
} from "@/components/layouts";

const galleryItemList = featuredGallery;

export const metadata = {
  title: "Galleri - Hjartland",
  description: "Et lite utvalg av komponenter og animasjoner jeg har laget.",
};

export default function Galleri() {
  return (
    <SimplePageLayout
      header="Galleri"
      subheader="Et lite utvalg av komponenter og animasjoner jeg har laget. Noen
              ganger ser jeg en animasjon eller effekt jeg liker, og prøver å
              gjenskape den. Andre ganger er det bare noe jeg har lyst til å
              lage."
    >
      <Separator>
        <H2>Animasjoner og komponenter</H2>
        <CardGrid>
          {galleryItemList.map((galleryItem, index) => (
            <ProjectCard type="ProjectCard" key={index} project={galleryItem} />
          ))}
        </CardGrid>
      </Separator>
    </SimplePageLayout>
  );
}

export { featuredGallery };
