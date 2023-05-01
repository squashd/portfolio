import { cloneElement, ReactElement } from "react";
import Link from "next/link";
import { featuredGames } from "@/data/portfolio/games";

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
            vise frem enda.
          </p>
        </header>
        <section className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gamesList.map((game, index) => (
              <div
                key={game.title + index}
                className="group relative flex flex-col gap-2 rounded-xl bg-zinc-800/40 p-6 transition ease-in-out hover:cursor-pointer hover:bg-zinc-800/80"
              >
                <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-700 bg-zinc-800 p-2 text-xl font-bold">
                  {cloneElement(game.logo, {
                    className: "h-8",
                  })}
                </div>
                <h2 className="font-light">
                  {game.title}{" "}
                  <span className="text-zinc-400 group-hover:text-sky-400">
                    / {game.title}
                  </span>
                </h2>
                <p className="text-sm leading-tight text-zinc-300">
                  {game.description}
                </p>
                <div className="absolute -inset-1 flex items-center">
                  <Link href={game.link.href}>
                    <span className="absolute -inset-1"></span>
                  </Link>
                  <p></p>
                </div>
                <div className="flex items-center group-hover:text-sky-400">
                  {cloneElement(game.link.icon, {
                    className: "h-4 w-4 mr-2",
                  })}
                  <span>{game.link.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
