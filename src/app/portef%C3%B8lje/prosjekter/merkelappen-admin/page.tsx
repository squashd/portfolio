import OrderExample from "@/components/Projects/OrderExample";
import ProjectPage from "@/components/ProjectPage";

export default function Page() {
  return (
    <>
      <ProjectPage
        header="Adminsider for Merkelappen.no"
        subheader="Enkel ordrebehandling for merkelappen.no"
        projectInfo={[
          "Like viktig som å lage en god nettside for kundene, er det å lage en god løsning for de som skal håndtere ordrene. Når også betaling må sjekkes gjennom et tredjeparts API, så er det viktig å kunne enkelt sjekke status på betaling.",
        ]}
        liveUrl={{ isLive: false }}
      >
        <section className="py-12">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-zinc-100">
              Eksempel komponent
            </h3>
            <OrderExample />
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
          </div>
        </section>
      </ProjectPage>
    </>
  );
}
