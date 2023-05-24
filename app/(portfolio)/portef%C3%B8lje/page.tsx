import { featuredGallery } from "./galleri/page";
import { featuredProjects } from "./prosjekter/page";
import { ProjectCard } from "@/components/cards";
import { H2Link, PageHeader } from "@/components/layouts";
import { CardGrid, Separator, WidthWrapperMargins } from "@/components/layouts";
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
          header="Ting jeg har laget"
          subheader="Som freelancer og student – samt ellers i fritiden – har jeg har
            jobbet på en rekke prosjekter. Her er noen av de."
        />
        <SymbolLegend />
        <Separator>
          <H2Link header="Prosjekter" href="/portef%C3%B8lje/prosjekter" />
          <CardGrid>
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} type="ProjectCard" />
            ))}
          </CardGrid>
        </Separator>
        <Separator>
          <H2Link header="Galleri" href="/portef%C3%B8lje/galleri" />
          <CardGrid>
            {featuredGallery.map((galleryItem, index) => (
              <ProjectCard
                type="ProjectCard"
                key={index}
                project={galleryItem}
              />
            ))}
          </CardGrid>
        </Separator>
      </WidthWrapperMargins>
    </>
  );
}
