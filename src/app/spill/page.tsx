import { cloneElement, ReactElement } from "react";
import Link from "next/link";
import {
  HjartlandMini,
  MerkelappenMini,
  SVGProps,
  WordleMini,
} from "@/assets/logos/minilogos";
import { InfoIcon } from "@/assets/Icons";

type games = {
  title: string;
  category: string;
  description: string;
  link: { href: string; label: string; icon: ReactElement<SVGSVGElement> };
  logo: ReactElement<SVGSVGElement>;
}[];

const gamesList: games = [
  {
    title: "Wordle",
    category: "Ordspill",
    description: "Ordspill fenomenet som tok verden med storm.",
    logo: <WordleMini />,
    link: {
      href: "/spill/wordle",
      label: "Prøv spillet her",
      icon: <LinkIcon />,
    },
  },
];

function LinkIcon(props: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      fill="currentColor"
      {...props}
    >
      <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
    </svg>
  );
}

export default function GamesPage() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-24 max-w-2xl pt-48">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Noen spill jeg har laget
          </h1>
          <p className="mt-6 max-w-2xl text-base text-zinc-300">
            Jeg har et mål om å gjenskape populære
            &quot;Daily&nbsp;Challenge&quot;&nbsp;spill for så å samle de under
            et applikasjon. Det er stykke unna, men her er noen av spillene jeg
            har laget på veien.
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
