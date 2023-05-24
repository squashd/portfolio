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
      className="group flex h-full w-full items-center justify-center rounded-lg bg-white/60 transition hover:bg-white/90 dark:bg-slate-300 dark:hover:bg-slate-400"
    >
      <Icon className="h-4 text-slate-800" />
      <span className="sr-only">{props.label}</span>
    </Link>
  );
}

export const ProjectCard = (props: ProjectCardProps) => {
  if (props.type === "Loading") return <Card className="animate-pulse" />;

  const Icon = Icons[props.project.icon];
  const { project } = props;
  const { links } = project;

  return (
    <SpotLightEffect>
      <Card className="group/card relative flex  h-full flex-col gap-2 space-y-4 px-6 py-4 transition-all ease-in-out hover:cursor-default">
        <CardHeader className="flex flex-row items-center gap-2 p-0 leading-tight group-hover/card:text-white">
          <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border-2 border-black p-2 group-hover/card:border-white group-hover/card:text-white dark:border-slate-200  dark:group-hover/card:border-sky-400 dark:group-hover/card:text-sky-400">
            <Icon className="h-8" />
          </div>

          <h2 className="">
            {project.title}{" "}
            <span className="font-medium dark:group-hover/card:text-sky-400">
              / {project.descriptiveLabel}
            </span>
          </h2>
        </CardHeader>
        <CardContent className="flex-1 p-0">
          <p className="">{project.description}</p>
        </CardContent>
        <CardFooter className="flex items-center p-0 font-medium group-hover/card:text-white dark:group-hover/card:text-sky-400">
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
          </div>
        </CardFooter>
      </Card>
    </SpotLightEffect>
  );
};
