import {
  H3,
  P,
  PageHeader,
  ParagraphsContainer,
  Separator,
} from "@/components/layouts";
import { WidthWrapperMargins } from "@/components/layouts";
import { FancyLink } from "@/components/formatting";

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
export default function ProjectPage({
  header,
  subheader,
  children,
  url,
}: SimpleProjectPageProps) {
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
                  tooltip={`Se ${header.toLowerCase()} live`}
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
}
