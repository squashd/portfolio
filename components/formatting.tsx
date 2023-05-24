import Link from "next/link";
import { TooltipServer } from "@/components/tooltip";

type FancyLinkProps = {
  type: "internal" | "external";
  href: string;
  text?: string;
  children?: React.ReactNode;
  tooltip?: string;
};

export const FancyLink = (props: FancyLinkProps) => {
  let target: string;
  let tooltip: string;

  props.tooltip ? (tooltip = props.tooltip) : (tooltip = decodeURI(props.href));

  props.type === "external" ? (target = "_blank") : (target = "_self");
  return (
    <TooltipServer tooltip={tooltip}>
      <Link
        href={props.href}
        target={target}
        className="group relative inline-block text-color transition duration-300"
      >
        {props.children && <>{props.children} </>}
        {props.text && <>{props.text} </>}
        <span className="relative bottom-1 block h-[1px] max-w-0 bg-color transition-all duration-500 group-hover:max-w-full"></span>
      </Link>
    </TooltipServer>
  );
};
