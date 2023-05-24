import { featuredGames } from "@/config/portfolio/games";
import { ProjectCard } from "@/components/cards";
import { CardGrid } from "@/components/layouts";

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
          <CardGrid>
            {gamesList.map((game, index) => (
              <ProjectCard type="ProjectCard" key={index} project={game} />
            ))}
          </CardGrid>
        </section>
      </div>
    </>
  );
}
