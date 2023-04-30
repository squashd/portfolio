import { SimpleLayout } from "@/components/SimpleLayout";
import {
  CSS3Logo,
  HTML5Logo,
  NextJSLogo,
  ReactLogo,
  TailwindLogo,
  TypeScriptLogo,
} from "@/assets/logos/logos";

export default function ProjectPage() {
  return (
    <SimpleLayout
      title="Butikksider for Merkelappen.no"
      intro="Et moderne nettbutikk for en moderne bedrift som selger skreddersydde merkelapper."
    >
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <HTML5Logo className="w-16 text-white " />
          <span className="text-6xl font-thin">|</span>
          <div className="flex items-center gap-2">
            <CSS3Logo className="w-16 text-white " />
            <span className="text-6xl font-thin">+</span>
            <TailwindLogo className="w-16 text-white " />
          </div>
          <span className="text-6xl font-thin">|</span>
          <div className="flex items-center gap-2">
            <TypeScriptLogo className="w-16 text-white " />
            <ReactLogo className="w-16 text-white " />
            <span className="text-6xl font-thin">+</span>
            <NextJSLogo className="w-16 text-white " />
          </div>
        </div>
        <p className="text-zinc-400">
          Høsten 2022 kom merkelappen.no på Gokstad Akademiet søkende etter
          hjelp i å fikse en bug i programmet som lager trykkark. Det viste seg
          imidlertid at løsningen de hadde fått av tidligere utvikler ikke hadde
          det nødvendige funksjonaliteten som trengtes for å generere estetisk
          og produksjonsklare trykkark.
        </p>
        <p className="text-zinc-400">
          Når det ble klart at det måtte lages et skreddersydd program så ble
          jeg også bedt om å redesigne sidene. Sidene var bygget med Wordpress
          og Woocommerce, men var både treg og ikke-responsiv.
        </p>
        <p className="text-zinc-400">
          De nye sidene er butikksidene er laget med NextJS, TailwindCSS og
          kjærlighet, og er integrert med Avarda Checkout som betalingsløsning.
        </p>
      </div>
    </SimpleLayout>
  );
}
