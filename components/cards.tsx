import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Icon } from "@/components/icons";

export type Project = {
  title: string;
  descriptiveLabel: string;
  description: string;
  icon: Icon;
  link: {
    href: string;
    label: string;
    descriptiveIcon: Icon;
  };
  external: boolean;
};

export type ProjectCardProps =
  | { type: "Loading" }
  | {
      type: "ProjectCard";
      title: string;
      descriptiveLabel: string;
      description: string;
      icon: Icon;
      link: {
        href: string;
        label: string;
        descriptiveIcon: Icon;
      };
      external: boolean;
    };

export default function ProjectCard(props: ProjectCardProps) {
  if (props.type === "Loading") return <Card className="animate-pulse" />;
  return (
    <Card className="group relative flex flex-col gap-2 space-y-4 rounded-xl  p-6 transition ease-in-out hover:cursor-pointer">
      <CardHeader className="flex flex-row items-center gap-2 p-0 leading-tight">
        <div className="flex aspect-square h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-700  p-2">
          <props.icon className="h-8" />
        </div>

        <h2 className="">
          {props.title}{" "}
          <span className="font-medium group-hover:text-color">
            / {props.descriptiveLabel}
          </span>
        </h2>
      </CardHeader>
      <CardContent className="p-0">
        <p className="">{props.description}</p>
        <div className="absolute -inset-1 flex items-center">
          {props.external ? (
            <Link href={props.link.href} target="_blank">
              <span className="absolute -inset-1">
                <span className="sr-only">{props.link.label}</span>
              </span>
            </Link>
          ) : (
            <Link href={props.link.href}>
              <span className="absolute -inset-1">
                <span className="sr-only">{props.link.label}</span>
              </span>
            </Link>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex items-center p-0 font-medium group-hover:text-color">
        <props.link.descriptiveIcon className="mr-2 h-4 w-4" />
        <span>{props.link.label}</span>
      </CardFooter>
    </Card>
  );
}
