import { featuredProjects } from "@/config/portfolio/projects";
import ProjectCard from "@/components/cards";
import { SimplePageLayout } from "@/components/layouts";
import { H2 } from "@/components/page-header";

export const metadata = {
  title: "Prosjekter",
  description: "Ting og tang jeg har laget.",
};

// TODO: Add more prosjekter once polished
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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectsList.map((project, index) => (
            <ProjectCard type="ProjectCard" key={index} project={project} />
          ))}
        </div>
      </SimplePageLayout>
    </>
  );
}

export { featuredProjects };
