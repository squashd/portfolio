import OrderExample from "../../../../components/Projects/OrderExample";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-24 max-w-2xl pt-48">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Wordle klone
          </h1>
          <p className="mt-6 text-base text-zinc-300">
            Morsom liten wordle-klone app laget i React og Vue
          </p>
          <p className="text-light mb-24 text-sm uppercase text-sky-400">
            Gjort på en dag ca.
          </p>
        </header>
        <section className="flex flex-col gap-12 pb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-100">Om prosjektet</h2>
            <p className="">
              <Link
                href={"https://www.nytimes.com/games/wordle/index.html"}
                className="group relative inline-block text-sky-400 transition duration-300"
              >
                Wordle
                <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
              </Link>{" "}
              er et spill som begår ut på å gjette seg frem til riktig ord på
              fem bokstaver, hvor man får informasjon om bokstavene som er brukt
              underveis. Er det riktig bokstav på riktig plass, så blir
              bokstaven grønn, og er det riktig bokstav på feil plass, så blir
              bokstaven gul, og er ikke bokstaven i ordet i det hele tatt, så
              blir bokstaven grå.
            </p>
            <p>
              Som mange andre ble jeg hektet på spillet, og spilte det hver dag.
              Jeg tenkte at det kunne være en morsom utfordring å prøve å lage
              det selv, og også få lekt litt med Vue som jeg ikke hadde brukt
              før.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-zinc-100">
              Lyst til å prøve spillet?
            </h3>
            <p className="">
              Prøv{" "}
              <Link
                href={"/portef%C3%B8lje/spill/wordle"}
                className="group relative inline-block text-sky-400 transition duration-300"
              >
                wordle klonen
                <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
              </Link>{" "}
              her.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
