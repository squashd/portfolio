import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Project } from "@/types";
import { TooltipServer } from "@/components/tooltip";
import { Icon, Icons } from "@/components/icons";
import { SpotLightEffect } from "@/components/spotlight";
import { Tags } from "@/data/projects";
import { TagManager } from "@/components/tags";
import { Suspense } from "react";

export type ProjectCardProps =
  | { type: "Loading" }
  | {
      type: "ProjectCard";
      project: Project;
    };

type ButtonLinkProps = {
  type: "internal" | "external";
  href: string;
  label: string;
  icon: keyof typeof Icons;
};
function ButtonLink(props: ButtonLinkProps) {
  const Icon = Icons[props.icon];
  let target: string;
  props.type === "external" ? (target = "_blank") : (target = "_self");
  return (
    <Link
      href={props.href}
      target={target}
      className="group flex h-full w-full items-center justify-center rounded-lg bg-white/60 transition hover:bg-white/90 dark:bg-slate-400 dark:hover:bg-slate-200"
    >
      <Icon className="h-4 text-slate-800" />
      <span className="sr-only">{props.label}</span>
    </Link>
  );
}

export const Tag = ({ tag }: { tag: keyof typeof Tags }) => {
  const tagValue = Tags[tag];
  return (
    <div className="cursor-default rounded-full bg-slate-50/50 px-2 py-1 text-xs text-slate-950 dark:bg-slate-400/50 dark:text-slate-50">
      {tagValue}
    </div>
  );
};
export const TagContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap items-center justify-center gap-2">
    {children}
  </div>
);

export const ProjectCard = (props: ProjectCardProps) => {
  if (props.type === "Loading") return <Card className="animate-pulse" />;

  const Icon = Icons[props.project.icon];
  const { project } = props;
  const { links } = project;

  const tagsOrderedByWeight = project.tags.sort((a, b) => b.weight - a.weight);

  return (
    <SpotLightEffect>
      <Card className="group/card relative flex  h-full flex-col gap-2 px-4 pt-6 transition-all ease-in-out hover:cursor-default">
        <CardHeader className="flex w-full flex-col p-0">
          <div className="flex flex-row items-center gap-2 leading-tight text-black dark:text-slate-50">
            <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border-2 border-black p-2 dark:border-slate-200">
              <Icon className="h-8 text-black dark:text-slate-50" />
            </div>

            <h2>
              {project.title}
              <span className="font-medium">/ {project.descriptiveLabel}</span>
            </h2>
          </div>
          <p className="">{project.description}</p>
        </CardHeader>
        <CardContent className="m-0 flex items-center justify-center p-0">
          <div className="grid h-7 w-full grid-cols-3 gap-x-4">
            {links?.external && (
              <TooltipServer tooltip={links.external.label}>
                <ButtonLink
                  type="external"
                  href={links.external.href}
                  label={links.external.label}
                  icon={links.external.icon}
                />
              </TooltipServer>
            )}
            {links?.internal && (
              <TooltipServer tooltip={links.internal.label}>
                <ButtonLink
                  type="internal"
                  href={links.internal.href}
                  label={links.internal.label}
                  icon={links.internal.icon}
                />
              </TooltipServer>
            )}
            {links?.readMore && (
              <TooltipServer tooltip={links.readMore.label}>
                <ButtonLink
                  type="internal"
                  href={links.readMore.href}
                  label={links.readMore.label}
                  icon={links.readMore.icon}
                />
              </TooltipServer>
            )}
            {links?.github && (
              <TooltipServer tooltip={links.github.label}>
                <ButtonLink
                  type="external"
                  href={links.github.href}
                  label={links.github.label}
                  icon={links.github.icon}
                />
              </TooltipServer>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex w-full items-center justify-center border-t border-black/50 py-2 font-medium group-hover/card:text-white dark:border-slate-50/40 dark:group-hover/card:text-sky-400">
          <Suspense fallback="">
            <TagManager tags={tagsOrderedByWeight} />
          </Suspense>
        </CardFooter>
      </Card>
    </SpotLightEffect>
  );
};
