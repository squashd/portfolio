import { LinkIcon } from "@/assets/Icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

type PageHeaderProps =
  | {
      type: "PageHeader";
      header: string;
      subheader: string;
    }
  | {
      type: "Project";
      header: string;
      subheader: string;
      duration?: string;
    };
export const PageHeader = (props: PageHeaderProps) => {
  return (
    <header
      className={cn(
        props.type === "PageHeader" && "max-w-2xl",
        props.type === "Project" && "max-w-xl",
        "pb-12 pt-24"
      )}
    >
      <h1 className="font-heading text-4xl font-bold sm:text-5xl">
        {props.header}
      </h1>
      <p className="mt-6 max-w-2xl text-base">{props.subheader}</p>
      {props.type === "Project" && props.duration && (
        <p className="text-light text-sm text-color">{props.duration}</p>
      )}
    </header>
  );
};

export const H2 = ({ header }: { header: string }) => (
  <h2 className="mb-4 font-heading text-3xl">{header}</h2>
);
export const H2Link = ({ header, href }: { header: string; href: string }) => (
  <Link
    href={href}
    className="group relative inline-block transition duration-300"
  >
    <h2 className="mb-4 font-heading text-3xl">
      {header}{" "}
      <span>
        <LinkIcon className="inline-block w-6" />
      </span>{" "}
      <span className="relative bottom-1 block h-[1px] max-w-0 bg-current transition-all duration-500 group-hover:max-w-full"></span>
    </h2>
  </Link>
);
