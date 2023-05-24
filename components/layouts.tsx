import { PageHeader } from "./page-header";
import { cn } from "@/lib/utils";

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
    <div className={cn("mx-auto w-full max-w-5xl px-6", className)}>
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

export const Separator = ({ children }: { children: React.ReactNode }) => (
  <section className="py-6">{children}</section>
);

export const CardGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 gap-4 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
    {children}
  </div>
);
