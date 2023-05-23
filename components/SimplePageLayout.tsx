import PageWrapper from "./PageWrapper";
import PageHeader from "./PageHeader";

interface SimplePageLayoutProps {
  header: string;
  subheader: string;
  children: React.ReactNode;
}

export default function SimplePageLayout({
  header,
  subheader,
  children,
}: SimplePageLayoutProps) {
  return (
    <PageWrapper>
      <PageHeader header={header} subheader={subheader} />
      {children}
    </PageWrapper>
  );
}
