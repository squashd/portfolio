import { featuredProjects } from "@/data/portfolio/projects";
import ProjectCard from "@/components/ProjectCard";

export const metadata = {
  title: "Prosjekter",
  description: "Ting og tang jeg har laget.",
};

// TODO: Add more prosjekter once polished
const projectsList = featuredProjects;
//   .concat([
//   {
//     company: "Wordle",
//     title: "Ordspill",
//     description: "Et forsøk på reverse-engineering av Wordle.",
//     logo: <WordleMini />,
//     link: {
//       href: "/portef%C3%B8lje/prosjekter/wordle",
//       label: "Les mer om prosjektet",
//       icon: <InfoIcon />,
//     },
//   },
// ]);

export default async function Projects() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-24 max-w-2xl pt-48">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Prosjekter og applikasjoner
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-300">
            Noen prosjekter har en større grad av kompleksitet enn andre. Her
            har jeg samlet noen av de prosjektene jeg har jobbet med, og som jeg
            er mest fornøyd med.
          </p>
        </header>
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
      </div>
    </>
  );
}

export { featuredProjects };
