import { featuredProjects } from "@/data/portfolio/projects";
import { ProjectCard } from "@/components/cards";
import { CardGrid, SimplePageLayout } from "@/components/layouts";
import { H2 } from "@/components/layouts";

export const metadata = {
  title: "Prosjekter",
  description: "Ting og tang jeg har laget.",
};

const projectsList = featuredProjects;

export default async function Projects() {
  return (
    <>
      <SimplePageLayout
        header="Prosjekter"
        subheader="Noen prosjekter har en større grad av kompleksitet enn andre. Her
            har jeg samlet noen av de prosjektene jeg har jobbet med, og som jeg
            er mest fornøyd med."
      >
        <H2 header="Prosjekter og applikasjoner" />
        <CardGrid>
          {projectsList.map((project, index) => (
            <ProjectCard type="ProjectCard" key={index} project={project} />
          ))}
        </CardGrid>
      </SimplePageLayout>
    </>
  );
}

export { featuredProjects };
