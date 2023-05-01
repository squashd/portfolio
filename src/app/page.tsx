"use client";
import Image from "next/image";
import Contact from "@/components/Contact";
import { useInView } from "react-intersection-observer";

import profilePicUnsaturated from "@/assets/images/profile.jpg";
import profilePicSaturated from "@/assets/images/profile_colour.jpeg";
import squashSaturated from "@/assets/images/NM-vinner-farge.webp";
import squashUnsaturated from "@/assets/images/NM-vinner-sorthvit.webp";

import {
  MongoDBLogo,
  MySQLLogo,
  NextJSLogo,
  PrismaLogo,
  TailwindLogo,
  TypeScriptLogo,
} from "@/assets/logos/logos";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [showSquashImage, setShowSquashImage] = useState(false);
  const [introRef, introInView] = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  const [aboutRef, aboutInView] = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  const [projectsRef, projectsInView] = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  const [toolsRef, toolsInView] = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <>
      <div className="h-full w-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden scroll-smooth">
        <section
          ref={introRef}
          className={`lg:px- flex h-full snap-center flex-col items-center justify-center text-left`}
        >
          <div
            className={`${
              introInView ? "opacity-100 delay-300 duration-1000 " : "opacity-0"
            } flex w-full flex-col gap-1 px-6 sm:gap-2 md:max-w-4xl lg:max-w-5xl`}
          >
            <h1
              className={`${
                introInView
                  ? "translate-y-0 delay-300 duration-1000 "
                  : "translate-y-4"
              } transform font-mono text-xs text-sky-400 transition sm:text-sm md:text-base`}
            >
              Hei, jeg heter
            </h1>
            <h2
              className={`${
                introInView
                  ? "translate-y-0 delay-300 duration-1000 "
                  : "translate-y-8"
              } text-4xl font-bold text-zinc-100 sm:text-6xl`}
            >
              Daniel Hjartland.
            </h2>
            <h3
              className={`${
                introInView
                  ? "translate-y-0 delay-300 duration-1000 "
                  : "translate-y-12"
              } text-4xl font-bold text-zinc-300 sm:text-6xl`}
            >
              Jeg er fullstack utvikler.
            </h3>
            <div>
              <p
                className={`${
                  introInView
                    ? "translate-y-0 delay-200 duration-1000"
                    : "translate-y-16"
                } relative my-4 max-w-md text-sm text-zinc-300 sm:max-w-lg sm:text-base md:max-w-xl`}
              >
                Jeg er en utvikler som alltid er på jakt etter nye og innovative
                måter å løse problemer på. Akkurat nå jobber jeg med spennende
                prosjekter hos{" "}
                <Link
                  href="https://www.merkelappen.no"
                  className="group relative inline-block text-sky-400 transition duration-300"
                >
                  Merkelappen.no
                  <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
                </Link>{" "}
                og jeg gleder meg til å se hva fremtiden bringer!
              </p>
            </div>
          </div>
          <div
            className={`${
              introInView || aboutInView || projectsInView
                ? "opacity-100"
                : "opacity-0"
            } absolute bottom-16 right-0 flex items-center duration-200 ease-in-out`}
          >
            <span className="flex rotate-90 items-center gap-2 text-xs after:h-[1px] after:w-12 after:bg-zinc-200">
              Det er mer å lese
            </span>
          </div>
        </section>
        <section
          id="about-me"
          ref={aboutRef}
          className="lg:px- relative flex h-full w-screen snap-center flex-col items-center justify-center text-left"
        >
          <div className="flex max-w-5xl flex-col items-center gap-8 px-6 md:flex-row">
            <div className="flex w-full flex-col">
              <h2
                className={`${
                  aboutInView
                    ? "translate-x-0 delay-200 duration-1000 ease-out after:w-full after:duration-[2000ms]"
                    : "-translate-x-4 opacity-0 after:w-0"
                } mb-2 flex max-w-2xl items-center gap-3 whitespace-nowrap text-2xl font-semibold text-zinc-100 before:font-mono before:text-lg before:font-light before:text-sky-400 before:content-["01."] after:h-[1px] after:bg-white after:content-[""] sm:text-3xl before:sm:text-2xl`}
              >
                Mer om meg
              </h2>
              <div
                className={`${
                  aboutInView
                    ? "opacity-100 delay-200 duration-[2000ms]"
                    : "opacity-0"
                } flex max-w-2xl flex-col gap-4  text-sm leading-tight sm:text-base`}
              >
                <p className="">
                  Jeg fikk min første PC allerede da jeg var 6 år gammel – det
                  måtte riktignok ofres noen leker til garasjesalg, men jeg har
                  vært interessert i teknologi siden.
                </p>
                <p className="text-left">
                  Jeg har også vært{" "}
                  <button
                    onClick={() => setShowSquashImage(!showSquashImage)}
                    className="group relative inline-block text-sky-400 transition duration-300"
                  >
                    aktiv squashspiller.
                    <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
                  </button>{" "}
                  Jeg har konkurrert i Europa som juniorspiller, og spilte på
                  førstelaget ved Heriot-Watt University hvor jeg studerte
                  matematikk.
                </p>
                <p className="text-left">
                  Jeg er alltid ivrig etter å lære og ta på meg nye
                  utfordringer. Hvis jeg ikke har erfaring med et spesifikt
                  teknologiområde, vil jeg gjøre alt jeg kan for å lære og bli
                  komfortabel med det. Jeg spør aldri &quot;kan jeg
                  dette?&quot;, jeg spør alltid &quot;hvordan kan jeg?&quot;
                </p>
              </div>
            </div>
            {/* Images */}
            <div
              className={`${
                aboutInView
                  ? "opacity-100 duration-[2200ms] ease-in-out"
                  : "opacity-0"
              } relative flex`}
            >
              <div className="group relative h-48 w-48 grow-0 overflow-hidden rounded-lg">
                <Image
                  src={squashSaturated}
                  alt="Bilde av Daniel da han vant NM i Gutter Under 17 klassen"
                  className={`${
                    showSquashImage ? "opacity-100 duration-500" : "opacity-0"
                  } absolute`}
                />
                <Image
                  src={squashUnsaturated}
                  alt="Bilde av Daniel da han vant NM i Gutter Under 17 klassen"
                  className={`${
                    showSquashImage ? "opacity-100 duration-500" : "opacity-0"
                  } absolute group-hover:opacity-0`}
                />
                <Image
                  src={profilePicSaturated}
                  alt="Profilbildet mitt i farge"
                  className={`${
                    !showSquashImage ? "opacity-100 duration-500" : "opacity-0"
                  } absolute`}
                />
                <Image
                  src={profilePicUnsaturated}
                  alt="Profilbildet mitt i svart-hvitt"
                  className={`${
                    !showSquashImage ? "opacity-100 duration-500" : "opacity-0"
                  } absolute group-hover:opacity-0`}
                />
              </div>
            </div>
          </div>
        </section>
        <section
          ref={projectsRef}
          className="relative flex h-full snap-center flex-col items-center justify-center text-left"
        >
          <div className="flex max-w-5xl flex-col items-center gap-8 px-6 lg:flex-row">
            <div className="flex w-full flex-col">
              <h2
                className={`${
                  projectsInView
                    ? "translate-x-0 delay-200 duration-1000 ease-out after:w-full after:duration-[2000ms]"
                    : "-translate-x-4 opacity-0 after:w-0"
                } mb-2 flex max-w-2xl items-center gap-3 whitespace-nowrap text-2xl font-semibold text-zinc-100 before:font-mono before:text-lg before:font-light before:text-sky-400 before:content-["02."] after:h-[1px] after:bg-white after:content-[""] sm:text-3xl before:sm:text-2xl`}
              >
                Mine prosjekter
              </h2>
              <div
                className={`${
                  projectsInView
                    ? " opacity-100 delay-200 duration-[2000ms]"
                    : "opacity-0"
                } flex max-w-2xl flex-col gap-4 text-sm leading-tight sm:text-base`}
              >
                <p className="">
                  Om du er nysgjerrig på hvilke prosjekter jeg har jobbet med,
                  så anbefaler jeg deg å se{" "}
                  <Link
                    href={"/portef%C3%B8lje"}
                    className="group relative inline-block text-sky-400 transition duration-300"
                  >
                    porteføljen min
                    <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
                  </Link>{" "}
                  .
                </p>
                <p className="text-left">
                  Jeg har jobbet med{" "}
                  <Link
                    href={"/portef%C3%B8lje/prosjekter/merkelappen-butikk"}
                    className="group relative inline-block text-sky-400 transition duration-300"
                  >
                    nettbutikk
                    <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
                  </Link>
                  , satt opp{" "}
                  <Link
                    href={"/portef%C3%B8lje/prosjekter/merkelappen-admin"}
                    className="group relative inline-block text-sky-400 transition duration-300"
                  >
                    adminpanel
                    <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
                  </Link>{" "}
                  for ordrebehandling, jobbet med diverse integrasjoner, og til
                  og med begynt smått med å lage noen{" "}
                  <Link
                    href={"/portef%C3%B8lje/spill/wordle"}
                    className="group relative inline-block text-sky-400 transition duration-300"
                  >
                    spill
                    <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          ref={toolsRef}
          className="lg:px- relative flex h-full snap-center flex-col items-center justify-center text-left"
        >
          <div className="flex max-w-5xl flex-col items-center gap-8 px-6 lg:flex-row">
            <div className="flex w-full flex-col">
              <h2
                className={`${
                  toolsInView
                    ? "translate-x-0 delay-200 duration-1000 ease-out after:w-full after:duration-[2000ms]"
                    : "-translate-x-4 opacity-0 after:w-0"
                } mb-2 flex max-w-2xl items-center gap-3 whitespace-nowrap text-2xl font-semibold text-zinc-100 before:font-mono before:text-lg before:font-light before:text-sky-400 before:content-["03."] after:h-[1px] after:bg-white after:content-[""] sm:text-3xl before:sm:text-2xl`}
              >
                Mine verktøy
              </h2>
              <div
                className={`${
                  toolsInView
                    ? "opacity-100 delay-200 duration-[2000ms]"
                    : "opacity-0"
                } flex max-w-2xl flex-col gap-4 text-sm leading-tight  sm:text-base`}
              >
                <p className="">
                  Jeg utvikler trygge og brukervennlige nettapplikasjoner ved
                  hjelp av blant annet TypeScript, NextJS, Prisma, MySQL/MongoDB
                  og Express. Disse verktøyene bidrar til å skape sikre og
                  stabile applikasjoner som gir en god brukeropplevelse.
                </p>
                <p className="text-left">
                  Jeg er alltid interessert i å høre om dine behov og ønsker, og
                  vil bruke min erfaring og kunnskap til å skape en applikasjon
                  som passer perfekt for deg.
                </p>
                <p className="text-left">
                  Hvis du vil vite mer om disse teknologiene, kan du trykke på
                  ikonene{" "}
                  <span className="hidden lg:inline-block">til høyre.</span>
                  <span className="inline-block lg:hidden">under.</span>
                </p>
              </div>
            </div>
            <div
              className={`${
                toolsInView
                  ? "opacity-100 duration-[2200ms] ease-in-out"
                  : "opacity-0"
              } flex w-full max-w-xs flex-col items-center gap-6 text-zinc-100 sm:max-w-xl sm:flex-row lg:w-auto lg:flex-col`}
            >
              <div className="group flex w-full flex-col items-center gap-4 rounded-lg bg-zinc-800/40 px-4 py-2 hover:bg-zinc-800/80">
                <h3 className="w-full border-b border-zinc-300 pb-2 text-center font-bold uppercase transition group-hover:text-sky-400">
                  Frontend
                </h3>
                <div className="flex gap-8">
                  <a
                    href="https://tailwindcss.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <TailwindLogo className="aspect-square h-14 transition hover:text-sky-400 sm:h-12 md:h-14" />
                  </a>
                  <a
                    href="https://www.typescriptlang.org/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <TypeScriptLogo className="aspect-square h-14 transition hover:text-sky-400 sm:h-12 md:h-14" />
                  </a>
                  <a
                    href="https://nextjs.org/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <NextJSLogo className="aspect-square h-14 transition hover:text-sky-400 sm:h-12 md:h-14" />
                  </a>
                </div>
              </div>
              <div className="group flex w-full flex-col items-center gap-4 rounded-lg bg-zinc-800/40 px-4 py-2 hover:bg-zinc-800/80">
                <h3 className="w-full border-b border-zinc-300 pb-2 text-center font-bold uppercase transition group-hover:text-sky-400">
                  Backend
                </h3>
                <div className="flex gap-8">
                  <a
                    href="https://www.mongodb.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <MongoDBLogo className="aspect-square h-14 transition hover:text-sky-400 sm:h-12 md:h-14" />
                  </a>
                  <a
                    href="https://www.prisma.io/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <PrismaLogo className="aspect-square h-14 transition hover:text-sky-400 sm:h-12 md:h-14" />
                  </a>
                  <a
                    href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <MySQLLogo className="aspect-square h-14 transition hover:text-sky-400 sm:h-12 md:h-14" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="snap-start">
          <Contact />
        </section>
      </div>
    </>
  );
}
