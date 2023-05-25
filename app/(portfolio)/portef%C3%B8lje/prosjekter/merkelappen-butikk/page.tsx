import mobil from "@/public/images/merkelappen/merkelappen-mobil.png";
import {
  BuzzWord,
  H2,
  ParagraphsContainer,
  Separator,
  ProjectPage,
  P,
  MobileIntroWrapper,
} from "@/components/layouts";
import { MobilePreview } from "@/components/previews";

export default function Page() {
  return (
    <>
      <ProjectPage
        header="Butikksider for Merkelappen.no"
        subheader="Et moderne design for en moderne butikk."
        url={{
          type: "live",
          href: "https://merkelappen.no",
          label: "merkelappen.no",
        }}
        duration="NOV 2022 - NÅ"
      >
        <Separator>
          <MobileIntroWrapper
            intro={
              <>
                <H2>Om prosjektet</H2>
                <ParagraphsContainer>
                  <P>
                    Høsten 2022 kom merkelappen.no søkende etter hjelp i å fikse
                    en bug i programmet som lager trykkark. Det viste seg
                    imidlertid at løsningen de hadde fått av tidligere utvikler
                    ikke hadde den nødvendige funksjonaliteten som trengtes for
                    å generere estetisk og produksjonsklare trykkark.
                  </P>
                  <P>
                    Sidene var bygget med Wordpress og Woocommerce, men var både
                    trege og ikke-responsive. Når det ble klart at det måtte
                    lages et nytt og skreddersydd program så ble jeg også bedt
                    om å redesigne sidene. De er nå bygget med NextJS og er både
                    raske og responsive.
                  </P>
                </ParagraphsContainer>
              </>
            }
            mobilePreview={
              <MobilePreview
                type="StaticImage"
                src={mobil}
                alt="Sidene til merkelappen.no"
              />
            }
          />
        </Separator>
        <Separator>
          <H2>Kort teknisk.</H2>
          <ParagraphsContainer>
            <p className="leading-relaxed">
              På dette <BuzzWord>TypeScript</BuzzWord> prosjektet har jeg jobbet
              med <BuzzWord>design</BuzzWord>, <BuzzWord>UI</BuzzWord>,{" "}
              <BuzzWord>backend</BuzzWord>, <BuzzWord>ordrebehandling</BuzzWord>
              , <BuzzWord>integrasjoner</BuzzWord>, <BuzzWord>DevOps</BuzzWord>{" "}
              – ja, rett og slett alt det som må til for å lage et skreddersyd{" "}
              <BuzzWord>e-commerce</BuzzWord> løsning.
            </p>
            <p className="leading-relaxed">
              Løsningen er bygget på <BuzzWord>NextJS/React</BuzzWord> og{" "}
              <BuzzWord>TailwindCSS</BuzzWord> i frontend.{" "}
              <BuzzWord>MySQL</BuzzWord> databasen i backend er koblet til
              frontend med <BuzzWord>REST&nbsp;API</BuzzWord> bygget på NextJS
              sine API-ruter og <BuzzWord>Prisma</BuzzWord> som ORM.
            </p>
            <p className="leading-relaxed">
              <BuzzWord>Avarda Checkout</BuzzWord> er blitt integrert som
              betalingsløsning, og <BuzzWord>MailChimp</BuzzWord> for
              ordrebekreftelse og nyhetsbrev.
            </p>
          </ParagraphsContainer>
        </Separator>
      </ProjectPage>
    </>
  );
}
