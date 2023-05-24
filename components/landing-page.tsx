"use client";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { Icon, Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { GitHubIcon, LinkedInIcon } from "@/assets/SocialIcons";

import profilePicUnsaturated from "@/assets/images/profile.jpg";
import profilePicSaturated from "@/assets/images/profile_colour.jpeg";
import squashSaturated from "@/assets/images/NM-vinner-farge.webp";
import squashUnsaturated from "@/assets/images/NM-vinner-sorthvit.webp";
import snowboardSaturated from "@/assets/images/snowboard_clr.webp";
import snowboardUnsaturated from "@/assets/images/snowboard_blw.webp";

import { useState } from "react";
import {
  MongoDBLogo,
  MySQLLogo,
  NextJSLogo,
  PrismaLogo,
  TailwindLogo,
  TypeScriptLogo,
} from "@/assets/logos/logos";
import { FancyLink } from "@/components/formatting";
import { TooltipServer } from "@/components/tooltip";

const InterSectionConfig = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

export const SectionHeader = (props: {
  inView: boolean;
  header: string;
  icon: Icon;
}) => {
  return (
    <h2
      className={cn(
        props.inView
          ? "translate-x-0 delay-200 duration-1000 ease-out after:mr-8 after:w-full after:duration-[2000ms]"
          : "-translate-x-4 opacity-0 after:w-0",
        `mb-2 flex max-w-2xl items-center gap-3 whitespace-nowrap font-heading text-2xl after:h-[1px] after:bg-primary after:content-[""] sm:text-3xl`
      )}
    >
      <props.icon className="aspect-square h-6 shrink-0" />
      {props.header}
    </h2>
  );
};
export const Intro = () => {
  const [introRef, introInView] = useInView(InterSectionConfig);

  return (
    <section
      id="start"
      ref={introRef}
      className="flex min-h-full shrink-0 snap-center flex-col items-center justify-center text-left"
    >
      <div
        className={cn(
          introInView ? "opacity-100 duration-1000 " : "opacity-0",
          "flex w-full flex-col px-6 sm:gap-2 md:max-w-4xl lg:max-w-5xl"
        )}
      >
        <h1
          className={cn(
            introInView ? "translate-y-0 duration-1000 " : "translate-y-8",
            "font-heading text-4xl leading-tight sm:text-7xl"
          )}
        >
          Daniel Hjartland.
        </h1>
        <h2
          className={cn(
            introInView ? "translate-y-0 duration-1000 " : "translate-y-12",
            "-mt-3 font-heading text-4xl leading-tight sm:text-7xl"
          )}
        >
          Fullstack utvikler.
        </h2>
        <div>
          <p
            className={cn(
              introInView ? "translate-y-0 duration-1000" : "translate-y-16",
              "relative my-2 max-w-md text-sm text-muted-foreground sm:max-w-lg sm:text-lg md:max-w-2xl"
            )}
          >
            Jeg er en fremoverlent junior-utvikler på 27 år som brenner for
            faget. Jeg jobber primært med Typescript i Node.js og React (gjerne
            Next.js). Akkurat nå jobber jeg med spennende prosjekter hos{" "}
            <FancyLink
              type="external"
              href="https://www.merkelappen.no"
              text="Merkelappen.no"
              tooltip="Live-sidene til Merkelappen.no"
            />
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export const AboutMe = () => {
  const [showSquashImage, setShowSquashImage] = useState(false);
  const [showSnowboardImage, setShowSnowboardImage] = useState(false);
  const [aboutRef, aboutInView] = useInView(InterSectionConfig);

  const handleSquashClick = () => {
    setShowSquashImage(!showSquashImage);
    setShowSnowboardImage(false);
  };

  const handleSnowBoardClick = () => {
    setShowSnowboardImage(!showSnowboardImage);
    setShowSquashImage(false);
  };

  return (
    <section
      id="om-meg"
      ref={aboutRef}
      className="relative flex min-h-full w-screen shrink-0 snap-center flex-col items-center justify-center text-left"
    >
      <div className="flex max-w-5xl flex-col items-center gap-8 px-6 md:flex-row">
        <div className="flex w-full flex-col">
          <SectionHeader
            inView={aboutInView}
            header="Mer om meg"
            icon={Icons.info}
          />
          <div
            className={cn(
              aboutInView
                ? "opacity-100 delay-200 duration-[2000ms]"
                : "opacity-0",
              "flex max-w-2xl flex-col gap-4  text-sm leading-tight text-muted-foreground sm:text-base"
            )}
          >
            <p className="text-left">
              Jeg har vært{" "}
              <TooltipServer tooltip="Se meg som squashspiller">
                <button
                  onClick={() => handleSquashClick()}
                  className="group relative inline-block text-color transition duration-300"
                >
                  aktiv squashspiller.
                  <span className="relative bottom-1 block h-[1px] max-w-0 bg-color transition-all duration-500 group-hover:max-w-full"></span>
                </button>
              </TooltipServer>{" "}
              Jeg har konkurrert i Europa som juniorspiller, og spilte på
              førstelaget ved Heriot-Watt University hvor jeg studerte
              matematikk.
            </p>
            <p>
              Jeg er trivia-gal og elsker pubquiz. Jeg er litt i overkant
              konkurransemenneske når ingenting står på spill, men ellers veldig
              avslappet.
            </p>
            <p className="text-left">
              Jeg er alltid ivrig etter å lære noe nytt og ta på meg{" "}
              <TooltipServer tooltip={"Se meg ta nye utfordringer"}>
                <button
                  onClick={() => handleSnowBoardClick()}
                  className="group relative inline-block text-color transition duration-300"
                >
                  {" "}
                  nye utfordringer{" "}
                  <span className="relative bottom-1 block h-[1px] max-w-0 bg-color transition-all duration-500 group-hover:max-w-full"></span>
                </button>
              </TooltipServer>
              . Jeg trives best når jeg gjør noe jeg aldri har gjort før.
            </p>
          </div>
        </div>
        {/* Images */}
        <div
          className={cn(
            aboutInView
              ? "opacity-100 duration-[2200ms] ease-in-out"
              : "opacity-0",
            "relative flex"
          )}
        >
          <div className="group relative h-48 w-48 grow-0 overflow-hidden rounded-lg">
            <Image
              src={squashSaturated}
              alt="Bilde av Daniel da han vant NM i Gutter Under 17 klassen"
              className={cn(
                showSquashImage ? "opacity-100 duration-500" : "opacity-0",
                "absolute"
              )}
            />
            <Image
              src={squashUnsaturated}
              alt="Bilde av Daniel da han vant NM i Gutter Under 17 klassen"
              className={cn(
                showSquashImage ? "opacity-100 duration-500" : "opacity-0",
                "absolute group-hover:opacity-0"
              )}
            />
            <Image
              src={snowboardSaturated}
              alt="Bilde av Daniel da han vant NM i Gutter Under 17 klassen"
              className={cn(
                showSnowboardImage ? "opacity-100 duration-500" : "opacity-0",
                "absolute"
              )}
            />
            <Image
              src={snowboardUnsaturated}
              alt="Bilde av Daniel da han vant NM i Gutter Under 17 klassen"
              className={cn(
                showSnowboardImage ? "opacity-100 duration-500" : "opacity-0",
                "absolute group-hover:opacity-0"
              )}
            />
            <Image
              src={profilePicSaturated}
              alt="Profilbildet mitt i farge"
              className={cn(
                !showSquashImage && !showSnowboardImage
                  ? "opacity-100 duration-500"
                  : "opacity-0",
                "absolute"
              )}
            />
            <Image
              src={profilePicUnsaturated}
              alt="Profilbildet mitt i svart-hvitt"
              className={cn(
                !showSquashImage && !showSnowboardImage
                  ? "opacity-100 duration-500"
                  : "opacity-0",
                "absolute group-hover:opacity-0"
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Projects = () => {
  const [projectsRef, projectsInView] = useInView(InterSectionConfig);
  return (
    <section
      ref={projectsRef}
      className="relative flex min-h-full shrink-0 snap-center flex-col items-center justify-center text-left"
    >
      <div className="flex max-w-5xl flex-col items-center gap-8 px-6 lg:flex-row">
        <div className="flex w-full flex-col">
          <SectionHeader
            header="Mine prosjekter"
            inView={projectsInView}
            icon={Icons.projects}
          />
          <div
            className={cn(
              projectsInView
                ? " opacity-100 delay-200 duration-[2000ms]"
                : "opacity-0",
              "flex max-w-2xl flex-col gap-4 text-sm leading-tight text-muted-foreground sm:text-base"
            )}
          >
            <p className="">
              Om du er nysgjerrig på hvilke prosjekter jeg har jobbet med, så
              anbefaler jeg deg å se{" "}
              <FancyLink
                href={"/portef%C3%B8lje"}
                type="internal"
                text="porteføljen min"
                tooltip="Sjekk den da vel"
              />
              .
            </p>
            <p className="text-left">
              Jeg har jobbet med{" "}
              <FancyLink
                href={"/portef%C3%B8lje/prosjekter/merkelappen-butikk"}
                type="external"
                text="nettbutikk"
                tooltip="Les mer om prosjektet"
              />
              , satt opp{" "}
              <FancyLink
                href={"/portef%C3%B8lje/prosjekter/merkelappen-admin"}
                type="internal"
                text="admin-panel"
                tooltip="Les mer om prosjektet"
              />{" "}
              for ordrebehandling, jobbet med diverse integrasjoner, og holder
              på å utvikle en app for{" "}
              <FancyLink
                href={"https://github.com/squashd/irate"}
                type="external"
                text="produkt-rating"
                tooltip="Se koden på GitHub"
              />
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Tools = () => {
  const [toolsRef, toolsInView] = useInView(InterSectionConfig);
  return (
    <section
      ref={toolsRef}
      className="relative flex min-h-full shrink-0 snap-center flex-col items-center justify-center text-left"
    >
      <div className="flex max-w-5xl flex-col items-center gap-8 px-6 lg:flex-row">
        <div className="flex w-full flex-col">
          <SectionHeader
            icon={Icons.tools}
            header="Mine verktøy"
            inView={toolsInView}
          />
          <div
            className={cn(
              toolsInView
                ? "opacity-100 delay-200 duration-[2000ms]"
                : "opacity-0",
              "flex max-w-2xl flex-col gap-4 text-sm leading-tight  text-muted-foreground sm:text-base"
            )}
          >
            <p className="">
              Jeg utvikler applikasjoner og nettsider ved hjelp av blant annet
              TypeScript, NextJS, Prisma, MySQL/MongoDB og Express.
            </p>
            <p className="text-left">
              Jeg er alltid interessert i å høre om dine behov og ønsker, og vil
              bruke min erfaring og kunnskap til å lage noe som passer perfekt
              for deg.
            </p>
            <p className="text-left">
              Hvis du vil vite mer om disse teknologiene, kan du trykke på
              ikonene <span className="hidden lg:inline-block">til høyre.</span>
              <span className="inline-block lg:hidden">under.</span>
            </p>
          </div>
        </div>
        <div
          className={cn(
            toolsInView
              ? "opacity-100 duration-[2200ms] ease-in-out"
              : "opacity-0",
            "flex w-full max-w-xs flex-col items-center gap-2 sm:max-w-xl sm:flex-row sm:gap-6 lg:w-auto lg:flex-col"
          )}
        >
          <div className="group flex w-full flex-col items-center gap-4 rounded-lg px-4 py-4 sm:py-2">
            <h3 className="hidden w-full border-b border-primary pb-2 text-center font-bold uppercase transition group-hover:text-color sm:block">
              Frontend
            </h3>
            <div className="flex gap-8">
              <TooltipServer tooltip="Les mer om TailwindCSS">
                <a
                  aria-label="Mer om tailwindcss"
                  href="https://tailwindcss.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TailwindLogo className="aspect-square h-10 transition hover:text-color sm:h-12 md:h-14" />
                </a>
              </TooltipServer>
              <TooltipServer tooltip="Les mer om TypeScript">
                <a
                  aria-label="Mer om Typescript"
                  href="https://www.typescriptlang.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TypeScriptLogo className="aspect-square h-10 transition hover:text-color sm:h-12 md:h-14" />
                </a>
              </TooltipServer>
              <TooltipServer tooltip="Les mer om NextJS">
                <a
                  aria-label="Mer om NextJS"
                  href="https://nextjs.org/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <NextJSLogo className="aspect-square h-10 transition hover:text-color sm:h-12 md:h-14" />
                </a>
              </TooltipServer>
            </div>
          </div>
          <div className="sm group flex w-full flex-col items-center gap-4 rounded-lg px-4 py-4 sm:py-2">
            <h3 className="hidden w-full border-b border-primary pb-2 text-center font-bold uppercase transition group-hover:text-color sm:block">
              Backend
            </h3>
            <div className="flex gap-8">
              <TooltipServer tooltip="Les mer om MongoDB">
                <a
                  aria-label="Mer om MongoDB"
                  href="https://www.mongodb.com/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MongoDBLogo className="aspect-square h-10 transition hover:text-color sm:h-12 md:h-14" />
                </a>
              </TooltipServer>
              <TooltipServer tooltip="Les mer om Prisma">
                <a
                  aria-label="Mer om Prisma"
                  href="https://www.prisma.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <PrismaLogo className="aspect-square h-10 transition hover:text-color sm:h-12 md:h-14" />
                </a>
              </TooltipServer>
              <TooltipServer tooltip="Er du sikker på dette?">
                <a
                  aria-label="Mer om MySQL"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <MySQLLogo className="aspect-square h-10 transition hover:text-color sm:h-12 md:h-14" />
                </a>
              </TooltipServer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Kontakt = () => {
  const [contactRef, contactInView] = useInView(InterSectionConfig);
  return (
    <section
      id={"kontakt"}
      ref={contactRef}
      className="relative flex h-full snap-center flex-col items-center justify-center text-left"
    >
      <div className="flex max-w-5xl flex-col items-center gap-8 px-6 lg:flex-row">
        <div className="flex w-full flex-col">
          <SectionHeader
            header="Ta kontakt"
            inView={contactInView}
            icon={Icons.contact}
          />
          <div
            className={cn(
              contactInView
                ? " opacity-100 delay-200 duration-[2000ms]"
                : "opacity-0",
              "flex max-w-2xl flex-col gap-4 text-sm leading-tight text-muted-foreground sm:text-base"
            )}
          >
            <p className="">
              Om du har et prosjekt du ønsker å gjennomføre, eller bare vil slå
              av en prat, kan du sende meg en epost på:{" "}
              <FancyLink
                type="external"
                href="mailto:daniel@hjartland.com"
                text="daniel@hjartland.com"
                tooltip="Send meg en epost"
              />
              , eller ring meg på telefon:{" "}
              <FancyLink
                type="external"
                href="tel:94174754"
                text="941 74 754"
                tooltip="Ring meg"
              />
            </p>
            <div className="flex flex-col items-center gap-4">
              <p className="w-full text-left">
                Ellers er jeg tilgjengelig på LinkedIn og GitHub – mye av nytt
                arbeid er privat, men det er også noe open-source. Ønsker du å
                se hva jeg har gjort tidligere kan jeg ordne tilgang.
              </p>
              <div className="flex gap-2">
                <TooltipServer tooltip="Du finner meg på LinkedIn">
                  <a
                    aria-label="LinkedIn"
                    href="https://www.linkedin.com/in/daniel-hjartland-7745b81a/"
                    target="_blank"
                    className="group relative inline-block text-slate-950 dark:text-slate-50"
                  >
                    <LinkedInIcon className="aspect-square w-12  transition duration-300 hover:text-color" />{" "}
                  </a>
                </TooltipServer>
                <TooltipServer tooltip="Mer av arbeidet mitt finnes på GitHub">
                  <a
                    aria-label="GitHub"
                    href="https://github.com/SQUASHD"
                    target="_blank"
                    className="group relative inline-block text-slate-950 dark:text-slate-50"
                  >
                    <GitHubIcon className="aspect-square w-12 transition duration-300 hover:text-color" />
                  </a>
                </TooltipServer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const MyStack = () => {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <section
      ref={ref}
      className={`max-w-screen flex max-h-screen min-h-full snap-center flex-col items-center justify-center`}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center lg:flex-row">
          <div
            className={`${
              inView
                ? "scale-y-100 lg:scale-x-100"
                : "scale-y-0 lg:scale-x-0 lg:scale-y-100"
            } transform-gpu border-b border-white bg-gradient-to-br from-sky-300 to-blue-700 bg-clip-text pb-4 text-center text-6xl font-black uppercase text-transparent transition-transform duration-[1200ms] lg:border-b-0 lg:border-r lg:pb-0 lg:pr-4 lg:text-left`}
          >
            Moderne
            <br />
            stack
          </div>
          <div
            className={`${
              inView
                ? "opacity-100 delay-[700ms] duration-[900ms] "
                : "opacity-0"
            } flex flex-col pt-4 text-center text-3xl font-thin transition lg:pl-4 lg:pt-0 lg:text-left`}
          >
            <div
              className={`${
                inView
                  ? "opacity-1 translate-x-0 delay-[900ms] duration-[1200ms]"
                  : "translate-x-80 opacity-0"
              } transform transition`}
            >
              HTML, CSS+Tailwind
            </div>
            <div
              className={`${
                inView
                  ? "opacity-1 translate-x-0 delay-[1800ms] duration-[1200ms]"
                  : "translate-x-80 opacity-0"
              } transform transition`}
            >
              TypeScript+NextJS
            </div>
            <div
              className={`${
                inView
                  ? "opacity-1 translate-x-0 delay-[2700ms] duration-[1200ms]"
                  : "translate-x-80 opacity-0"
              } transform transition `}
            >
              Node+Express, tRPC ++
            </div>
          </div>
        </div>
        <p
          className={`${
            inView ? "opacity-100 delay-[3600ms] duration-[900ms]" : "opacity-0"
          } text-center text-xl font-thin italic sm:block sm:text-2xl lg:text-3xl lg:tracking-tight`}
        >
          Selv om jeg er glad i alt som er nytt,
          <br />
          så bruker jeg teknologi som er
          <br />
          både veltestet og robust
        </p>
      </div>
    </section>
  );
};

export const ResponsiveDesign = () => {
  const { ref, inView } = useInView(InterSectionConfig);

  return (
    <section
      ref={ref}
      className={`max-w-screen flex max-h-screen min-h-full snap-center flex-col items-center justify-center`}
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute flex flex-col items-center text-center lg:flex-row lg:text-left">
          <div
            className={`${
              inView
                ? "after:opacity-1 flex flex-col delay-200 duration-[1200ms] after:transition after:delay-[1200ms] after:duration-[800ms] after:ease-in"
                : "-translate-y-32 translate-x-0 opacity-0 after:opacity-0 lg:-translate-x-32 lg:translate-y-0"
            } relative transform bg-gradient-to-br from-sky-300 to-blue-700 bg-clip-text pb-4 text-5xl font-black uppercase text-transparent transition after:fixed after:bottom-0 after:h-0 after:w-full after:transform-gpu after:border lg:border-b-0 lg:pb-0 lg:pr-4 lg:after:right-0 lg:after:h-full lg:after:w-0`}
          >
            Responsiv design
          </div>
          <div>
            <div
              className={`${
                inView ? "align-center flex flex-col" : "invisible"
              } whitespace-nowrap pt-4 text-4xl font-thin uppercase lg:pl-4 lg:pt-0`}
            >
              <div
                className={`${
                  inView
                    ? "opacity-1 translate-x-0 delay-[700ms] duration-[1200ms]"
                    : " translate-x-80 opacity-0"
                } transform transition`}
              >
                Som ser bra ut
              </div>
              <div
                className={`${
                  inView
                    ? "opacity-1 translate-x-0 delay-[1300ms] duration-[1200ms]"
                    : "translate-x-80 opacity-0"
                } transform transition`}
              >
                på alle enheter
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const LightningFast = () => {
  const { ref, inView } = useInView(InterSectionConfig);

  return (
    <section
      ref={ref}
      className="my-12 flex h-full snap-center flex-col items-center justify-center gap-8"
    >
      <div
        className={`${
          inView ? "animate-lightning" : "invisible"
        } w-full bg-gradient-to-br from-indigo-500 to-purple-700 bg-clip-text text-center text-6xl font-black uppercase text-transparent transition-transform dark:from-sky-300 dark:to-blue-700 sm:block`}
      >
        Lynrask
        <br className="sm:hidden" /> ytelse
      </div>
    </section>
  );
};
