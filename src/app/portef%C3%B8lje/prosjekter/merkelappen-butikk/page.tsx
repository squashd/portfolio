import Image from "next/image";

import mobile from "@/assets/images/merkelappen/merkelappen_(iPhone 12 Pro).jpg";
import sm from "@/assets/images/merkelappen/merkelappen(Tailwind sm).jpg";
import md from "@/assets/images/merkelappen/merkelappen(Tailwind md).jpg";
import lg from "@/assets/images/merkelappen/merkelappen_(Tailwind lg).jpg";

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6">
        <header className="max-w-2xl pt-48">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Butikksider for Merkelappen.no
          </h1>
          <p className="mt-6 text-base text-zinc-300">
            Et moderne design for en moderne butikk.
          </p>
          <p className="text-light text-sm text-sky-400">NOV 2022 - NÅ</p>
        </header>
        <section className="py-12">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex-shrink-0 overflow-hidden rounded-lg">
              <Image
                src={mobile}
                alt="mobile view"
                className="w-auto max-w-xl"
              />
            </div>
            <div className="flex-shrink-0 overflow-hidden rounded-lg">
              <Image src={sm} alt="small view" className="w-auto max-w-xl" />
            </div>
            <div className="flex-shrink-0 overflow-hidden rounded-lg">
              <Image src={md} alt="medium view" className="w-auto max-w-xl" />
            </div>
            <div className="flex-shrink-0 overflow-hidden rounded-lg">
              <Image src={lg} alt="large view" className="w-auto max-w-xl" />
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-12 pb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-100">Om prosjektet</h2>
            <p className="">
              Høsten 2022 kom merkelappen.no søkende etter hjelp i å fikse en
              bug i programmet som lager trykkark. Det viste seg imidlertid at
              løsningen de hadde fått av tidligere utvikler ikke hadde det
              nødvendige funksjonaliteten som trengtes for å generere estetisk
              og produksjonsklare trykkark.
            </p>
            <p className="">
              Sidene var bygget med Wordpress og Woocommerce, men var både trege
              og ikke-responsive. Når det ble klart at det måtte lages et nytt
              og skreddersydd program så ble jeg også bedt om å redesigne
              sidene. De er nå bygget med NextJS og er både raske og responsive.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-zinc-100">
              Hvor kan jeg se siden?
            </h3>
            <p className="">
              Sidene er live på{" "}
              <a
                href={"https://www.merkelappen.no"}
                className="group relative inline-block text-sky-400 transition duration-300"
                rel="noreferrer noopener"
                target="_blank"
              >
                merkelappen.no
                <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
              </a>
              .
            </p>
          </div>
          {/*<div className="flex flex-col gap-8">*/}
          {/*  <h2 className="text-2xl font-bold text-zinc-100">*/}
          {/*    Mer teknisk info*/}
          {/*  </h2>*/}
          {/*  <div className="flex flex-col gap-4">*/}
          {/*    <h3 className="text-lg font-semibold text-zinc-100">*/}
          {/*      Hva er siden laget med?*/}
          {/*    </h3>*/}
          {/*    <p className="">*/}
          {/*      I likhet med{" "}*/}
          {/*      <Link*/}
          {/*        href={"/portef%C3%B8lje/prosjekter/merkelappen-admin"}*/}
          {/*        className="group relative inline-block text-sky-400 transition duration-300"*/}
          {/*      >*/}
          {/*        adminsidene*/}
          {/*        <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>*/}
          {/*      </Link>{" "}*/}
          {/*      til merkelappen.no så er butikksidene laget med NextJS og*/}
          {/*      TailwindCSS, og er koblet til backend med Prisma og API-rutene*/}
          {/*      til NextJS.{" "}*/}
          {/*      <a*/}
          {/*        href={"https://docs.avarda.com/"}*/}
          {/*        className="group relative inline-block text-sky-400 transition duration-300"*/}
          {/*        rel="noreferrer noopener"*/}
          {/*        target="_blank"*/}
          {/*      >*/}
          {/*        Avarda checkout*/}
          {/*        <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>*/}
          {/*      </a>{" "}*/}
          {/*      er brukt som betalingsløsning og var enkelt å integrere. Det er*/}
          {/*      også integrert{" "}*/}
          {/*      <a*/}
          {/*        href={"https://mailchimp.com/"}*/}
          {/*        className="group relative inline-block text-sky-400 transition duration-300"*/}
          {/*        rel="noreferrer noopener"*/}
          {/*        target="_blank"*/}
          {/*      >*/}
          {/*        Mailchimp*/}
          {/*        <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>*/}
          {/*      </a>{" "}*/}
          {/*      for ordrebekreftelse på adminsidene og for å sende ut*/}
          {/*      nyhetsbrev/markedsføring.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*  <div className="flex flex-col gap-4">*/}
          {/*    <h3 className="text-lg font-semibold text-zinc-100">*/}
          {/*      Hvorfor valgte jeg denne teknologien?*/}
          {/*    </h3>*/}
          {/*    <p className="">*/}
          {/*      Essensielt for prosjektet var å få på plass forhåndsvisning av*/}
          {/*      merkelapper til kunder. Litt undersøkelse ga flere muligheter,*/}
          {/*      men første tanke var at bruk av React og hooks basert på input*/}
          {/*      ville gi god respons og konsekvent resultat. Det viste seg å*/}
          {/*      stemme.*/}
          {/*    </p>*/}
          {/*    <p className="">*/}
          {/*      I tilegg til å være en god løsning for forhåndsvisning av*/}
          {/*      merkelapper, så er NextJS (et React rammeverk) en god løsning*/}
          {/*      for å lage en rask og responsiv nettside. Det egner seg også*/}
          {/*      utmerket til å lage statiske sider, og det er enkelt å legge til*/}
          {/*      funksjonalitet som dynamiske sider og API-ruter. Ved å tenke*/}
          {/*      litt fremover om ønsket om å kunne kontrollere innholdet på*/}
          {/*      sidene selv og ha flere interaktive komponenter, så var det*/}
          {/*      enkelt å velge NextJS.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*  <div className="flex flex-col gap-4">*/}
          {/*    <h3 className="text-lg font-semibold text-zinc-100">*/}
          {/*      Veien videre for prosjektet*/}
          {/*    </h3>*/}
          {/*    <p className="">*/}
          {/*      Neste steg for prosjektet er å integrere et CMS for å kunne*/}
          {/*      oppdatere innholdet på sidene. Produktsidene er allerede bygget*/}
          {/*      med komponenter – så klart – så det blir spennende å se hva*/}
          {/*      slags CMS som blir valgt og koble det opp mot sidene.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </section>
      </div>
    </>
  );
}
