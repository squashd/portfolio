import { H2Link, PageHeader } from "@/components/layouts";
import { Separator, WidthWrapperMargins } from "@/components/layouts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icons } from "@/components/icons";
import * as React from "react";

export const metadata = {
  title: "Portefølje",
  description: "Ting og tang jeg har laget.",
};

const SymbolLegend = () => {
  return (
    <Accordion type="single" collapsible className="w-64">
      <AccordionItem value="item-1" className="mb-0 border-b-0">
        <AccordionTrigger>
          <h4 className="text-sm font-semibold">Hva betyr symbolene?</h4>
        </AccordionTrigger>
        <AccordionContent>
          <div className="my-1 flex items-center gap-2 rounded-md border px-4 py-3 text-sm">
            <Icons.link className="h-4" /> <span>Lenke til live-side</span>
          </div>
          <div className="my-1 flex items-center gap-2 rounded-md border px-4 py-3 text-sm">
            <Icons.github className="h-4" /> <span>Se koden på GitHub</span>
          </div>
          <div className="my-1 flex items-center gap-2 rounded-md border px-4 py-3 text-sm">
            <Icons.book className="h-4" /> <span>Les mer om prosjektet</span>
          </div>
          <div className="my-1 flex items-center gap-2 rounded-md border px-4 py-3 text-sm">
            <Icons.eye className="h-4" /> <span>Se animasjonen/effekten</span>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default async function Projects() {
  return (
    <>
      <WidthWrapperMargins>
        <PageHeader
          type="PageHeader"
          header="Stuff I've made I guess"
          subheader="Stuff and shit"
        />
        <SymbolLegend />
        <Separator>
          <H2Link header="Projects" href="/projects" />
        </Separator>
      </WidthWrapperMargins>
    </>
  );
}
