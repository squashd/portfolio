import { PageHeader } from "@/components/page-header";
import { WidthWrapperMargins } from "@/components/layouts";

interface SimpleProjectPageProps {
  header: string;
  subheader: string;
  duration?: string;
  children: React.ReactNode;
  projectInfo: string[];
  url:
    | { type: "live"; label: string; href: string }
    | {
        type: "private";
      };
}
export default function ProjectPage({
  header,
  subheader,
  children,
  projectInfo,
  url,
}: SimpleProjectPageProps) {
  return (
    <>
      <WidthWrapperMargins>
        <PageHeader type="Project" header={header} subheader={subheader} />
        {children}
        <section className="flex flex-col gap-12 pb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold">Om prosjektet</h2>
            {projectInfo.map((paragraph, index) => (
              <p key={index} className="">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">Hvor kan jeg se siden?</h3>
            {url.type === "live" ? (
              <p className="">
                Sidene er live på{" "}
                <a
                  href={url.href}
                  className="group relative inline-block text-color transition duration-300"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {url.label}
                  <span className="relative bottom-1 block h-[1px] max-w-0 bg-color transition-all duration-500 group-hover:max-w-full"></span>
                </a>
                .
              </p>
            ) : (
              <p className="">
                Sidene er dessverre ikke tilgjengelige for offentlig visning,
                men om ønskelig kan jeg vise dem frem på et møte.
              </p>
            )}
          </div>
        </section>
      </WidthWrapperMargins>
    </>
  );
}
