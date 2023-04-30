"use client";
import Image from "next/image";
import Contact from "@/components/Contact";
import { useInView } from "react-intersection-observer";

import profilePicUnsaturated from "public/images/profile.jpg";
import profilePicSaturated from "public/images/profile_colour.jpeg";
import squashSaturated from "public/images/NM-vinner-farge.webp";
import squashUnsaturated from "public/images/NM-vinner-sorthvit.webp";

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
  const [toolsRef, toolsInView] = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });

  return (
    <>
      <div className="scroll-smooth8 h-full w-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden">
        <section
          ref={introRef}
          className={`lg:px- flex h-full snap-center flex-col items-center justify-center px-6 text-left`}
        >
          <div
            className={`${
              introInView ? "opacity-100 delay-200 duration-1000 " : "opacity-0"
            } flex w-full flex-col gap-1 sm:gap-2 md:max-w-4xl lg:max-w-5xl`}
          >
            <h1
              className={`${
                introInView
                  ? "translate-y-0 delay-200 duration-1000 "
                  : "translate-y-4"
              } transform font-mono text-xs text-sky-400 transition sm:text-sm md:text-base`}
            >
              Hei, jeg heter
            </h1>
            <h2
              className={`${
                introInView
                  ? "translate-y-0 delay-200 duration-1000 "
                  : "translate-y-8"
              } text-4xl font-bold text-zinc-100 sm:text-6xl`}
            >
              Daniel Hjartland.
            </h2>
            <h3
              className={`${
                introInView
                  ? "translate-y-0 delay-200 duration-1000 "
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
              introInView ? "opacity-100" : "opacity-0"
            } absolute bottom-14 right-1/4 flex rotate-90 items-center transition duration-500 ease-in-out after:ml-2 after:h-0.5 after:h-[1px] after:w-12 after:bg-zinc-200 after:content-['']`}
          >
            Skroll videre
          </div>
        </section>
        <section
          ref={aboutRef}
          className="lg:px- relative flex h-full w-screen snap-center flex-col items-center justify-center px-6 text-left"
        >
          <div className="flex max-w-5xl flex-col items-center gap-8 md:flex-row">
            <div className="flex w-full flex-col">
              <h2
                className={`${
                  aboutInView
                    ? "translate-x-0 delay-200 duration-1000 ease-out after:w-full after:duration-[2000ms]"
                    : "-translate-x-4 after:w-0"
                } mb-2 flex max-w-xl items-center gap-3 whitespace-nowrap text-2xl font-semibold text-zinc-200 before:font-mono before:text-lg before:font-light before:text-sky-400 before:content-["01."] after:h-[0.25pt] after:bg-white after:content-[""] sm:text-3xl before:sm:text-2xl`}
              >
                Mer om meg
              </h2>
              <div
                className={`${
                  aboutInView
                    ? "opacity-100 delay-200 duration-[2000ms]"
                    : "opacity-0"
                } max-w-xl text-sm leading-tight sm:text-base md:max-w-2xl`}
              >
                <p className="my-4">
                  Hei, jeg heter Daniel. Jeg fikk min første PC allerede da jeg
                  var 6 år gammel – det måtte riktignok ofres noen leker til
                  garasjesalg, men jeg har vært interessert i teknologi siden.
                </p>
                <p className="my-4">
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
                <p className="my-4">
                  Jeg er alltid ivrig etter å lære og ta på meg nye
                  utfordringer. Hvis jeg ikke har erfaring med et spesifikt
                  teknologiområde, vil jeg gjøre alt jeg kan for å lære og bli
                  komfortabel med det. Jeg spør aldri &quot;om jeg kan?&quot; ,
                  jeg spør alltid &quot;hvordan kan jeg?&quot;
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
          ref={toolsRef}
          className="lg:px- relative flex h-full snap-center flex-col items-center justify-center px-6 text-left"
        >
          <div className="flex max-w-5xl flex-col items-center gap-8 lg:flex-row">
            <div className="flex w-full flex-col">
              <h2
                className={`${
                  toolsInView
                    ? "translate-x-0 delay-200 duration-1000 ease-out after:w-full after:duration-[2000ms]"
                    : "-translate-x-4 after:w-0"
                } mb-2 flex max-w-2xl items-center gap-3 whitespace-nowrap text-2xl font-semibold text-zinc-200 before:font-mono before:text-lg before:font-light before:text-sky-400 before:content-["02."] after:h-[0.25pt] after:bg-white after:content-[""] sm:text-3xl before:sm:text-2xl`}
              >
                Mine verktøy
              </h2>
              <div
                className={`${
                  toolsInView
                    ? "opacity-100 delay-200 duration-[2000ms]"
                    : "opacity-0"
                } flex max-w-2xl flex-col gap-4 text-sm leading-tight sm:text-base`}
              >
                <p className="text-zinc-300">
                  Jeg har erfaring med ulike verktøy og teknologier innen
                  webutvikling, og jeg er alltid på utkikk etter nye måter å
                  lære og utfordre meg selv på. Når det er sagt, så er dette
                  teknologien jeg ofte først strekker meg etter.
                </p>
                <p className="text-zinc-300">
                  Jeg starter alltid nye prosjekter i TypeScript og kvier meg
                  for bruk av integrasjoner uten TypeScript-støtte. Det gjør
                  koden min sikrere og mer forståelig for andre.
                </p>
                <p className="text-zinc-300">
                  Med en rekke prosjekter så fungerer NextJS sine innebygde API
                  ruter utmerket som backend, og med Prisma som ORM og
                  MySQL/MongoDB som database, er det enkelt å sette opp en
                  fullverdig fullstack applikasjon.
                </p>
                <p className="text-zinc-300">
                  REST APIer er også enkelt å sette opp med Express.
                </p>
              </div>
            </div>
            <div
              className={`${
                toolsInView
                  ? "opacity-100 duration-[2200ms] ease-in-out"
                  : "opacity-0"
              } flex w-full flex-col items-center gap-6 text-zinc-200 sm:flex-row lg:w-auto lg:flex-col`}
            >
              <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-zinc-800/40 px-4 py-2">
                <h3 className="w-full border-b border-zinc-300 pb-2 text-center font-bold uppercase">
                  Frontend
                </h3>
                <div className="flex gap-8">
                  <TailwindLogo className="aspect-square h-16 sm:h-12 md:h-14" />
                  <TypeScriptLogo className="aspect-square h-16 sm:h-12 md:h-14" />
                  <NextJSLogo className="aspect-square h-16 sm:h-12 md:h-14" />
                </div>
              </div>
              <div className="flex w-full flex-col items-center gap-4 rounded-lg bg-zinc-800/40 px-4 py-2">
                <h3 className="w-full border-b border-zinc-300 pb-2 text-center font-bold uppercase">
                  Backend
                </h3>
                <div className="flex gap-8">
                  <MongoDBLogo className="aspect-square h-16 sm:h-12 md:h-14" />
                  <PrismaLogo className="aspect-square h-16 sm:h-12 md:h-14" />
                  <MySQLLogo className="aspect-square h-16 sm:h-12 md:h-14" />
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
