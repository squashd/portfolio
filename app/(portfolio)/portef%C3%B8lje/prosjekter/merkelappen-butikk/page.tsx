import Image from "next/image";

import mobile from "@/assets/images/merkelappen/merkelappen_(iPhone 12 Pro).jpg";
import sm from "@/assets/images/merkelappen/merkelappen(Tailwind sm).jpg";
import md from "@/assets/images/merkelappen/merkelappen(Tailwind md).jpg";
import lg from "@/assets/images/merkelappen/merkelappen_(Tailwind lg).jpg";
import {
  BuzzWord,
  H2,
  ParagraphsContainer,
  Separator,
  ProjectPage,
} from "@/components/layouts";

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
          <H2>Om prosjektet</H2>
          <ParagraphsContainer>
            <p className="leading-relaxed">
              Høsten 2022 kom merkelappen.no søkende etter hjelp i å fikse en
              bug i programmet som lager trykkark. Det viste seg imidlertid at
              løsningen de hadde fått av tidligere utvikler ikke hadde den
              nødvendige funksjonaliteten som trengtes for å generere estetisk
              og produksjonsklare trykkark.
            </p>
            <p className="leading-relaxed">
              Sidene var bygget med Wordpress og Woocommerce, men var både trege
              og ikke-responsive. Når det ble klart at det måtte lages et nytt
              og skreddersydd program så ble jeg også bedt om å redesigne
              sidene. De er nå bygget med NextJS og er både raske og responsive.
            </p>
          </ParagraphsContainer>
        </Separator>
        <Separator>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={mobile}
                alt="mobile view"
                className="w-auto max-w-xl"
                loading="eager"
                priority={true}
              />
            </div>
            <div className="flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={sm}
                alt="small view"
                className="w-auto max-w-xl"
                loading="eager"
                priority={true}
              />
            </div>
            <div className="flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={md}
                alt="medium view"
                className="w-auto max-w-xl"
                loading="eager"
                priority={true}
              />
            </div>
            <div className="flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={lg}
                alt="large view"
                className="w-auto max-w-xl"
                loading="eager"
                priority={true}
              />
            </div>
          </div>
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
