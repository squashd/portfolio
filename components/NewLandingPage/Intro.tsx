import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function Intro() {
  const { ref, inView } = useInView({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  return (
    <section
      ref={ref}
      className={`flex h-full snap-center flex-col items-center justify-center px-2 text-left sm:px-4 md:px-6 lg:px-8`}
    >
      <div className="flex w-full flex-col gap-4 md:max-w-4xl lg:max-w-5xl">
        <h1
          className={`${
            inView ? "translate-y-0" : "translate-y-[25vh] opacity-0"
          } transform font-mono text-sky-400 duration-500 `}
        >
          Hei, jeg heter
        </h1>
        <h2 className="font-bold text-zinc-100 lg:text-6xl">
          Daniel Hjartland.
        </h2>
        <h3 className="font-bold text-zinc-300 lg:text-6xl">
          Jeg er fullstack utvikler.
        </h3>
        <div>
          <p className="relative my-4 leading-7 text-zinc-300 lg:max-w-xl">
            Jeg er en utvikler brenner for å skape produkter som er
            tilgjengelige og brukervennlige, og jeg er alltid på jakt etter nye
            og innovative måter å løse problemer på. Akkurat nå jobber jeg med
            spennende prosjekter hos
            <Link
              href="https://www.merkelappen.no"
              className="group relative inline-block text-sky-400 transition duration-300"
            >
              Merkelappen.no
              <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 opacity-50 transition-all duration-500 group-hover:max-w-full"></span>
            </Link>{" "}
            og jeg gleder meg til å se hva fremtiden bringer!
          </p>
        </div>
      </div>
    </section>
  );
}
