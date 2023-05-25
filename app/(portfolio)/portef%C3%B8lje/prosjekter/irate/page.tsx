import { ProjectPage } from "@/components/layouts";
import {
  BuzzWord,
  H2,
  P,
  ParagraphsContainer,
  Separator,
} from "@/components/layouts";
import { MobilePreview } from "@/components/previews";
import mobil from "@/public/images/irate/irate-mobil.png";

export default function irateProjectPage() {
  return (
    <>
      <ProjectPage
        header="Rating applikasjon"
        subheader="Applikasjon for å gi tilbakemelding på produkter."
        url={{
          type: "live",
          href: "https://irate.no",
          label: "irate.no",
        }}
      >
        <Separator>
          <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:gap-x-10">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <H2>Om prosjektet</H2>
              <ParagraphsContainer>
                <P>
                  Dette er et <BuzzWord>sideprosjekt</BuzzWord> som jeg jobber
                  med på fritiden.
                </P>
                <P>
                  Faren min kjøpte altfor mange Nespresso&reg; kaffekapsler på
                  en gang og mistet oversikt over hvilke kapsler han i det hele
                  tatt likte.
                </P>
                <P>
                  Det er ikke ofte noen kommer med et såpass løselig problem som
                  jeg kan overkomplisere med en webapplikasjon, så jeg grep
                  sjansen.
                </P>
              </ParagraphsContainer>
            </div>
            <MobilePreview type="StaticImage" src={mobil} alt="" />
          </div>
        </Separator>
        <Separator>
          <H2>Kort teknisk.</H2>
          <ParagraphsContainer>
            <P>
              Applikasjon er bygget på <BuzzWord>NextJS/React</BuzzWord> og{" "}
              <BuzzWord>TailwindCSS</BuzzWord> i frontend. Databasene i backend
              er en kombinasjon av <BuzzWord>PostgreSQL</BuzzWord> og{" "}
              <BuzzWord>Redis</BuzzWord> som er koblet direkte til{" "}
              <BuzzWord>React Server Components</BuzzWord> med{" "}
              <BuzzWord>Fetch API</BuzzWord> eller{" "}
              <BuzzWord>Prisma ORM</BuzzWord>.
            </P>
            <P>
              Clerk er brukt for <BuzzWord>autentisering</BuzzWord> og{" "}
              <BuzzWord>autorisering</BuzzWord>, og NextJS sine{" "}
              <BuzzWord>Server Actions</BuzzWord> er blitt tatt i bruk for
              direkte kommunikasjon med databasene, med Zod for{" "}
              <BuzzWord>input validering</BuzzWord>.
            </P>
          </ParagraphsContainer>
        </Separator>
      </ProjectPage>
    </>
  );
}
