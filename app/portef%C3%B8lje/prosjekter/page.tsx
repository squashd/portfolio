import { featuredProjects } from "../../../data/portfolio/projects";
import ProjectCard from "../../../components/ProjectCard";
import SimplePageLayout from "../../../components/SimplePageLayout";

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
        <section className="mx-auto max-w-5xl pb-12">
          <h2 className="mb-4 text-3xl font-bold">
            Prosjekter og applikasjoner
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projectsList.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.company}
                description={project.description}
                descriptiveLabel={project.descriptiveLabel}
                icon={project.logo}
                link={project.link}
              />
            ))}
          </div>
        </section>
      </SimplePageLayout>
    </>
  );
}

export { featuredProjects };
