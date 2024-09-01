import Link from "next/link";

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
    <Link
      href={props.href}
      target={target}
      className="group relative inline-block font-bold text-rose-400 transition duration-300 hover:text-rose-500"
    >
      {props.children && <>{props.children} </>}
      {props.text !== undefined && <>{props.text} </>}
      <span className="relative bottom-1 block h-[2px] max-w-0 bg-rose-500 transition-all duration-500 group-hover:max-w-full"></span>
    </Link>
  );
};
