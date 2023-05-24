import { featuredGallery } from "./galleri/page";
import { featuredProjects } from "./prosjekter/page";
import { ProjectCard } from "@/components/cards";
import { H2Link, PageHeader } from "@/components/page-header";
import { CardGrid, Separator, WidthWrapperMargins } from "@/components/layouts";

export const metadata = {
  title: "Portefølje",
  description: "Ting og tang jeg har laget.",
};

export default async function Projects() {
  return (
    <>
      <WidthWrapperMargins>
        <PageHeader
          type="PageHeader"
          header="Ting jeg har laget"
          subheader="Som freelancer og student – samt ellers i fritiden – har jeg har
            jobbet på en rekke prosjekter. Her er noen av de."
        />
        <Separator>
          <H2Link header="Prosjekter" href="/portef%C3%B8lje/prosjekter" />
          <CardGrid>
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} type="ProjectCard" />
            ))}
          </CardGrid>
        </Separator>
        <Separator>
          <H2Link header="Galleri" href="/portef%C3%B8lje/galleri" />
          <CardGrid>
            {featuredGallery.map((galleryItem, index) => (
              <ProjectCard
                type="ProjectCard"
                key={index}
                project={galleryItem}
              />
            ))}
          </CardGrid>
        </Separator>
      </WidthWrapperMargins>
    </>
  );
}
