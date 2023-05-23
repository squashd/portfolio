import Link from "next/link";

type FancyLinkProps = {
  type: "internal" | "external";
  href: string;
  text: string;
};

export const FancyLink = (props: FancyLinkProps) => {
  if (props.type === "internal")
    return (
      <Link
        href={props.href}
        className="group relative inline-block text-color transition duration-300"
      >
        {props.text}
        <span className="relative bottom-1 block h-[1px] max-w-0 bg-color transition-all duration-500 group-hover:max-w-full"></span>
      </Link>
    );

  return (
    <Link
      href={props.href}
      target="_blank"
      className="group relative inline-block text-color transition duration-300"
    >
      {props.text}
      <span className="relative bottom-1 block h-[1px] max-w-0 bg-color transition-all duration-500 group-hover:max-w-full"></span>
    </Link>
  );
};
