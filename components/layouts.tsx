import { LinkIcon } from "@/assets/Icons";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";
import { FancyLink } from "@/components/formatting";

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
        "pb-6 pt-16 sm:pt-24"
      )}
    >
      <h1 className="font-heading text-4xl sm:text-5xl">{props.header}</h1>
      <p className="mt-6 max-w-2xl text-base text-muted-foreground">
        {props.subheader}
      </p>
      {props.type === "Project" && props.duration && (
        <p className="text-light text-sm text-color">{props.duration}</p>
      )}
    </header>
  );
};

export const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mb-4 font-heading text-3xl">{children}</h2>
);

export const H3 = ({ children }: { children: React.ReactNode }) => (
  <h3 className="mb-4 font-heading text-2xl">{children}</h3>
);
export const H2Link = ({ header, href }: { header: string; href: string }) => (
  <Link
    href={href}
    className="group relative inline-block transition duration-300"
  >
    <H2>
      {header}{" "}
      <span>
        <LinkIcon className="inline-block w-6" />
      </span>{" "}
      <span className="relative bottom-1 block h-[1px] max-w-0 bg-current transition-all duration-500 group-hover:max-w-full"></span>
    </H2>
  </Link>
);

interface SimplePageLayoutProps {
  header: string;
  subheader: string;
  children: React.ReactNode;
}

interface Wrapper {
  children: React.ReactNode;
  className?: string;
}

export const WidthWrapperFlex = ({ children, className }: Wrapper) => {
  return (
    <div className={cn("flex w-full flex-col items-center")}>
      <div className={cn("w-full max-w-5xl px-6", className)}>{children}</div>
    </div>
  );
};
export const WidthWrapperMargins = ({ children, className }: Wrapper) => {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-6 pb-16", className)}>
      {children}
    </div>
  );
};

export const SimplePageLayout = ({
  header,
  subheader,
  children,
}: SimplePageLayoutProps) => {
  return (
    <WidthWrapperMargins>
      <PageHeader header={header} subheader={subheader} type="PageHeader" />
      {children}
    </WidthWrapperMargins>
  );
};

export const Separator = (props: Wrapper) => (
  <div className={cn("py-6", props.className)}>{props.children}</div>
);

export const CardGrid = (props: Wrapper) => (
  <div
    className={cn(
      "grid grid-cols-1 gap-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3",
      props.className
    )}
  >
    {props.children}
  </div>
);

export const LoadingSkeleton = () => (
  <WidthWrapperFlex>
    <div className={cn("max-w-xl", "pb-6 pt-24")}>
      <Skeleton className="h-16 w-full font-heading text-4xl sm:text-5xl" />
      <Skeleton className="mt-6 h-8 w-full max-w-2xl text-base" />
    </div>
    <Skeleton className="h-48 w-full" />
  </WidthWrapperFlex>
);

export const BuzzWord = (props: Wrapper) => (
  <span
    className={cn(
      "cursor-default font-medium text-black underline underline-offset-4 transition hover:text-color dark:text-slate-50 dark:hover:text-color",
      props.className
    )}
  >
    {props.children}
  </span>
);

export const ParagraphsContainer = (props: Wrapper) => (
  <div className={cn("space-y-2 text-muted-foreground", props.className)}>
    {props.children}
  </div>
);

export const P = ({ children }: Wrapper) => (
  <p className="leading-relaxed">{children}</p>
);

interface SimpleProjectPageProps {
  header: string;
  subheader: string;
  duration?: string;
  children: React.ReactNode;
  url:
    | { type: "live"; label: string; href: string }
    | {
        type: "private";
      };
}
export const ProjectPage = ({
  header,
  subheader,
  children,
  url,
}: SimpleProjectPageProps) => {
  return (
    <>
      <WidthWrapperMargins>
        <PageHeader type="Project" header={header} subheader={subheader} />
        {children}
        <Separator>
          <H3>Hvor kan jeg se siden?</H3>
          <ParagraphsContainer>
            {url.type === "live" ? (
              <P>
                Sidene er live på{" "}
                <FancyLink
                  type="external"
                  href={url.href}
                  tooltip={`Se live sidene på ${url.label}`}
                >
                  {url.label}
                </FancyLink>
                .
              </P>
            ) : (
              <P>
                Sidene er dessverre ikke tilgjengelige for offentlig visning,
                men om ønskelig kan jeg vise dem frem på et møte.
              </P>
            )}
          </ParagraphsContainer>
        </Separator>
      </WidthWrapperMargins>
    </>
  );
};

type MobileIntro = {
  intro: React.ReactNode;
  mobilePreview: React.ReactNode;
};
export const MobileIntroWrapper = (props: MobileIntro) => (
  <div className="mx-auto max-w-full lg:flex lg:items-center lg:gap-x-10">
    <div className="max-w-full lg:flex-auto">{props.intro}</div>
    {props.mobilePreview}
  </div>
);
