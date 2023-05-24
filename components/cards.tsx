import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Project } from "@/types";

export type ProjectCardProps =
  | { type: "Loading" }
  | {
      type: "ProjectCard";
      project: Project;
    };

export default function ProjectCard(props: ProjectCardProps) {
  if (props.type === "Loading") return <Card className="animate-pulse" />;

  const { project } = props;
  const { links } = project;

  return (
    <Card className="group/card relative flex flex-col gap-2 space-y-4 rounded-xl  p-6 transition ease-in-out hover:cursor-pointer">
      <CardHeader className="flex flex-row items-center gap-2 p-0 leading-tight">
        <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-700 p-2 group-hover/card:border-color  group-hover/card:text-color">
          <project.icon className="h-8" />
        </div>

        <h2 className="">
          {project.title}{" "}
          <span className="font-medium group-hover/card:text-color">
            / {project.descriptiveLabel}
          </span>
        </h2>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <p className="">{project.description}</p>
      </CardContent>
      <CardFooter className="flex items-center p-0 font-medium group-hover/card:text-color">
        <div className="grid h-7 w-full grid-cols-3 gap-2">
          {links?.external && (
            <Link
              href={links.external.href}
              target="_blank"
              className="group flex h-full w-full items-center justify-center rounded-lg bg-slate-400 transition hover:bg-slate-500 dark:bg-slate-300 dark:hover:bg-slate-400"
            >
              <links.external.icon className="h-4 text-slate-800" />
              <span className="sr-only">{links.external.label}</span>
            </Link>
          )}
          {links?.internal && (
            <Link
              href={links.internal.href}
              className="group flex h-full w-full items-center justify-center rounded-lg bg-slate-400 transition hover:bg-slate-500 dark:bg-slate-300 dark:hover:bg-slate-400"
            >
              <links.internal.icon className="h-4 text-slate-800" />
              <span className="sr-only">{links.internal.label}</span>
            </Link>
          )}
          {links?.github && (
            <Link
              href={links.github.href}
              target="_blank"
              className="group flex h-full w-full items-center justify-center rounded-lg bg-slate-400 transition hover:bg-slate-500 dark:bg-slate-300 dark:hover:bg-slate-400"
            >
              <links.github.icon className="h-4 text-slate-800" />
              <span className="sr-only">{links.github.label}</span>
            </Link>
          )}
          {links?.readMore && (
            <Link
              href={links.readMore.href}
              className="group flex h-full w-full items-center justify-center rounded-lg bg-slate-400 transition hover:bg-slate-500 dark:bg-slate-300 dark:hover:bg-slate-400"
            >
              <links.readMore.icon className="h-4 text-slate-800" />
              <span className="sr-only">{links.readMore.label}</span>
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
