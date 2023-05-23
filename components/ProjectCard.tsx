import { cloneElement, ReactElement } from "react";
import Link from "next/link";

export interface ProjectCardProps {
  title: string;
  descriptiveLabel: string;
  description: string;
  icon: ReactElement<SVGSVGElement>;
  link: {
    href: string;
    label: string;
    descriptiveIcon: ReactElement<SVGSVGElement>;
  };
}

export default function ProjectCard(Project: ProjectCardProps) {
  return (
    <div className="group relative flex flex-col gap-2 rounded-xl bg-zinc-800/40 p-6 transition ease-in-out hover:cursor-pointer hover:bg-zinc-800/80">
      <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-700 bg-zinc-800 p-2">
        {cloneElement(Project.icon, {
          className: "h-8",
        })}
      </div>
      <h2 className="font-light">
        {Project.title}{" "}
        <span className="text-zinc-400 group-hover:text-sky-400">
          / {Project.descriptiveLabel}
        </span>
      </h2>
      <p className="text-sm leading-tight text-zinc-300">
        {Project.description}
      </p>
      <div className="absolute -inset-1 flex items-center">
        <Link href={Project.link.href} target="_blank">
          <span className="absolute -inset-1">
            <span className="sr-only">{Project.link.label}</span>
          </span>
        </Link>
      </div>
      <div className="flex items-center group-hover:text-sky-400">
        {cloneElement(Project.link.descriptiveIcon, {
          className: "h-4 w-4 mr-2",
        })}
        <span>{Project.link.label}</span>
      </div>
    </div>
  );
}
