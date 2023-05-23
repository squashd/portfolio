import { featuredGallery } from "./galleri/page";
import { featuredProjects } from "./prosjekter/page";
import ProjectCard from "../../../components/cards";
import { H2Link, PageHeader } from "@/components/page-header";
import { Separator, WidthWrapperMargins } from "@/components/layouts";

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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                type="ProjectCard"
                key={index}
                title={project.title}
                description={project.description}
                descriptiveLabel={project.descriptiveLabel}
                icon={project.icon}
                link={project.link}
                external={project.external}
              />
            ))}
          </div>
        </Separator>
        <Separator>
          <H2Link header="Galleri" href="/portef%C3%B8lje/galleri" />
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGallery.map((galleryItem, index) => (
              <ProjectCard
                type="ProjectCard"
                key={index}
                title={galleryItem.title}
                description={galleryItem.description}
                descriptiveLabel={galleryItem.descriptiveLabel}
                icon={galleryItem.icon}
                link={galleryItem.link}
                external={galleryItem.external}
              />
            ))}
          </div>
        </Separator>
      </WidthWrapperMargins>
    </>
  );
}
