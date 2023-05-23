import { featuredGames } from "@/data/portfolio/games";
import ProjectCard from "@/components/cards";

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
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Veldig &quot;Work in Progress&quot;
          </h1>
          <p className="mt-6 max-w-2xl text-base">
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
                type="ProjectCard"
                key={index}
                title={game.title}
                description={game.description}
                descriptiveLabel={game.descriptiveLabel}
                icon={game.icon}
                link={game.link}
                external={game.external}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
