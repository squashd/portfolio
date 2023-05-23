import Image from "next/image";

import mobile from "@/assets/images/merkelappen/merkelappen_(iPhone 12 Pro).jpg";
import sm from "@/assets/images/merkelappen/merkelappen(Tailwind sm).jpg";
import md from "@/assets/images/merkelappen/merkelappen(Tailwind md).jpg";
import lg from "@/assets/images/merkelappen/merkelappen_(Tailwind lg).jpg";
import ProjectPage from "@/components/project-page";

export default function Page() {
  return (
    <>
      <ProjectPage
        header="Butikksider for Merkelappen.no"
        subheader="Et moderne design for en moderne butikk."
        projectInfo={[
          "Høsten 2022 kom merkelappen.no søkende etter hjelp i å fikse en bug i programmet som lager trykkark. Det viste seg imidlertid at løsningen de hadde fått av tidligere utvikler ikke hadde detnødvendige funksjonaliteten som trengtes for å generere estetisk og produksjonsklare trykkark.",
          "Sidene var bygget med Wordpress og Woocommerce, men var både trege og ikke-responsive. Når det ble klart at det måtte lages et nytt og skreddersydd program så ble jeg også bedt om å redesigne sidene. De er nå bygget med NextJS og er både raske og responsive.",
        ]}
        liveUrl={{
          isLive: true,
          url: "https://merkelappen.no",
          label: "merkelappen.no",
        }}
        duration="NOV 2022 - NÅ"
      >
        <section className="py-12">
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
        </section>
      </ProjectPage>
    </>
  );
}
