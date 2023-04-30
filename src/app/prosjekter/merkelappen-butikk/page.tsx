import Link from "next/link";
import Image from "next/image";
import forside from "@/assets/images/merkelappen/forside.webp";
import navnelapper from "@/assets/images/merkelappen/navnelapper.webp";
import checkout from "@/assets/images/merkelappen/checkout.webp";

export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-24 max-w-2xl pt-48">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            Butikksider for Merkelappen.no
          </h1>
          <p className="mt-6 text-base text-zinc-300">
            Et moderne design for en moderne butikk.
          </p>
          <p className="text-light text-sm text-sky-400">NOV 2022 - NÅ</p>
        </header>
        <section className="my-12">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="overflow-hidden rounded-lg">
              <Image src={forside} alt="forsiden til merkelappen.no" />
            </div>
            <div className="overflow-hidden rounded-lg">
              <Image src={navnelapper} alt="forhåndsvisning av navnelapper" />
            </div>
            <div className="hidden overflow-hidden rounded-lg sm:block">
              <Image src={checkout} alt="integrert checkout" />
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
              Når det ble klart at det måtte lages et skreddersydd program så
              ble jeg også bedt om å redesigne sidene. Sidene var bygget med
              Wordpress og Woocommerce, men var både treg og ikke-responsiv.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-zinc-100">
              Hvor kan jeg se siden?
            </h3>
            <p className="">
              Sidene er live på{" "}
              <Link
                href={"/prosjekter/merkelappen-butikk"}
                className="group relative inline-block text-sky-400 transition duration-300"
              >
                merkelappen.no
                <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
              </Link>
            </p>
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
                  admin delen
                  <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
                </Link>{" "}
                av merkelappen.no så er frontend laget med NextJS og
                TailwindCSS, og er koblet til backend med Prisma og API-rutene
                til NextJS. Avarda Checkout er brukt som betalingsløsning og var
                enkelt å integrere. Det er også integrert Mailchimp på backend –
                ordrebehandling – og på frontend – nyhetsbrev/markedsføring.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-zinc-100">
                Hvorfor valgte jeg denne teknologien?
              </h3>
              <p className="">
                Første mål med prosjektet var å få på plass forhåndsvisning av
                merkelapper til kunder. Litt undersøkelse ga flere muligheter,
                men første tanke var at bruk av React og hooks basert på input
                ville gi god respons og konsekvent resultat. Det viste seg å
                stemme.
              </p>
              <p className="">
                I tilegg til å være en god løsning for forhåndsvisning av
                merkelapper, så er NextJS en god løsning for å lage en rask og
                responsiv nettside. NextJS egner seg også utmerket til å lage
                statiske sider, og det er enkelt å legge til funksjonalitet som
                dynamiske sider og API-ruter. Ved å tenke litt fremover om
                ønsket om å kunne kontrollere innholdet på sidene selv og ha
                flere interaktive komponenter, så var det også enkelt å velge
                NextJS.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-zinc-100">
                Veien videre for prosjektet
              </h3>
              <p className="">
                Neste steg for prosjektet er å integrere et CMS for å kunne
                oppdatere innholdet på sidene. Produktsidene er allerede bygget
                med komponenter – så klart – så det blir spennende å se hva
                slags CMS som blir valgt.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
