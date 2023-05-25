import ProjectPage from "@/components/project-page";
import {
  BuzzWord,
  H2,
  P,
  ParagraphsContainer,
  Separator,
} from "@/components/layouts";
import dynamic from "next/dynamic";

const OrderExample = dynamic(() => import("@/components/project-components"));

export default function Page() {
  return (
    <>
      <ProjectPage
        header="Adminsider for Merkelappen.no"
        subheader="Enkel ordrebehandling for merkelappen.no"
        url={{ type: "private" }}
      >
        <Separator>
          <H2>Om prosjektet</H2>
          <ParagraphsContainer>
            <P>
              Like viktig som å lage en god nettside for kundene, er det å lage
              en god løsning for de som skal håndtere ordrene. Når også betaling
              må sjekkes gjennom et tredjeparts API, så er det viktig å kunne
              enkelt sjekke status på betaling.
            </P>
          </ParagraphsContainer>
        </Separator>
        <Separator>
          <H2>Eksempel komponent</H2>
          <Separator>
            <OrderExample />
          </Separator>
          <ParagraphsContainer>
            <P>
              Et irritasjonsmoment for meg er når det ikke er tydelig når man
              trykker på en knapp at det skjer noe dersom en backendprosess er
              iverksatt. Derfor har jeg lagt til en spinner som vises når
              trykkark genereres, med dynamisk tekst som endres etterhvert som
              prosessen går fremover.
            </P>
            <P>
              Fordi ting kan gå galt under trykkprossessen, så fjernes ikke
              knappen før ordren er ferdig behandlet.
            </P>
          </ParagraphsContainer>
        </Separator>
        <Separator>
          <H2>Kort teknisk.</H2>
          <ParagraphsContainer>
            <P>
              Frontend er bygget på <BuzzWord>NextJS</BuzzWord> og{" "}
              <BuzzWord>TailwindCSS</BuzzWord>, <BuzzWord>MySQL</BuzzWord>{" "}
              databasen i backend er koblet til frontend med{" "}
              <BuzzWord>REST&nbsp;API</BuzzWord> bygget på NextJS sine API-ruter
              og <BuzzWord>Prisma</BuzzWord> som ORM.
            </P>
            <P>
              Det er satt i bruk <BuzzWord>CRON</BuzzWord> tjener for å håndtere
              oppdatering av ordrestatus, samt automatisk sende
              ordrebekreftelse. Det er også lagt til automatisk{" "}
              <BuzzWord>loggføring</BuzzWord> av alle hendelser, samt{" "}
              <BuzzWord>automatisk varsling</BuzzWord> dersom noe går galt eller
              det oppstår feil i et API endepunkt det ikke bør oppstå feil i.
            </P>
          </ParagraphsContainer>
        </Separator>
      </ProjectPage>
    </>
  );
}
