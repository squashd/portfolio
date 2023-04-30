import OrderExample from "@/components/Projects/OrderExample";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-24 max-w-2xl pt-48">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Adminsider for Merkelappen.no
          </h1>
          <p className="mt-6 text-base text-zinc-300">
            Enkel ordrebehandling for merkelappen.no
          </p>
          <p className="text-light mb-24 text-sm text-sky-400">APR 2023 - NÅ</p>
        </header>
        <section className="flex flex-col gap-12 pb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-100">Om prosjektet</h2>
            <p className="">
              Likeså viktig som å lage en god nettside for kundene, er det å
              lage en god løsning for de som skal håndtere ordrene. Når også
              betaling må sjekkes gjennom et 3. parts API, så er det viktig å
              enkelt kunne sjekke status på betaling.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-zinc-100">
              Eksempel komponent
            </h3>
            <p className="">
              Et irritasjonsmoment for meg er når det ikke er tydelig når man
              trykker på en knapp at det skjer noe dersom en backendprosess er
              iverksatt. Derfor har jeg lagt til en spinner som vises når
              trykkark genereres, med dynamisk tekst som endres etterhvert som
              prosessen går fremover.
            </p>
            <p>
              Fordi ting kan gå galt under trykkprossessen, så fjernes ikke
              knappen før ordren er ferdig behandlet.
            </p>
            <OrderExample />
          </div>
          <div className="flex flex-col gap-8">
            <h2 className="text-2xl font-bold text-zinc-100">
              Mer teknisk info
            </h2>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-zinc-100">
                Hva er siden laget med?
              </h3>
              <p className="">
                I likhet med{" "}
                <Link
                  href={"/prosjekter/merkelappen-butikk"}
                  className="group relative inline-block text-sky-400 transition duration-300"
                >
                  butikk delen
                  <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
                </Link>{" "}
                av merkelappen.no , så er adminsidene laget med NextJS. Det er
                også lagt til bruk av tRPC for å enkelt kunne kommunisere med
                backend og hente de nyeste ordrene og filtrere på status.
                Kanskje når React Server Components&reg; er klar for produksjon
                så kan det være aktuelt å bruke det for å hente data fra
                backend.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-zinc-100">
                Hvorfor valgte jeg denne teknologien?
              </h3>
              <p className="">
                Jeg ønsket at ordrebehandling skulle være så enkelt som mulig,
                og at det skulle være enkelt å se når prosesser for
                ordrebehandling var iverksatt. Ordrene hentes inn og skytes inn
                i ordrelinje komponenter, som uavhengig av hverandre kan
                oppdatere seg selv.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-zinc-100">
                Veien videre for prosjektet
              </h3>
              <p className="">
                Neste steg for prosjektet er å integrere analytics for websiden,
                slik at det blir enklere å se hvor brukerne kommer fra, og hva
                de gjør på siden.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
