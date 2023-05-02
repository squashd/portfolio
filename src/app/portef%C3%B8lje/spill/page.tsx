import { featuredGames } from "@/data/portfolio/games";
import ProjectCard from "@/components/ProjectCard";

const gamesList = featuredGames;

export const metadata = {
  title: "Spill",
  description: "Noen spill jeg har laget",
};

export default function GamesPage() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-24 max-w-2xl pt-48">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Veldig &quot;Work in Progress&quot;
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-300">
            Jeg har et mål om å gjenskape populære
            &quot;Daily&nbsp;Challenge&quot;&nbsp;spill for så å samle de under
            et applikasjon. Prosjektet er nettopp startet, så det er ikke mye å
            vise frem ennå.
          </p>
        </header>
        <section className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gamesList.map((game, index) => (
              <ProjectCard
                key={index}
                title={game.title}
                description={game.description}
                descriptiveLabel={game.category}
                icon={game.logo}
                link={game.link}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
