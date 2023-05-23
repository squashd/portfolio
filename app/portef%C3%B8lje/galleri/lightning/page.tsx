"use client";
import LightningFast from "../../../../components/LandingPage/LightningFast";
import PageHeader from "../../../../components/PageHeader";
import PageWrapper from "../../../../components/PageWrapper";
import CodeBlock from "./CodeBlock.mdx";

export default function LightningAnimationPage() {
  return (
    <PageWrapper>
      <PageHeader
        header="Lightning Fast"
        subheader="Leken liten animasjon av tekst som løper over skjermen"
      />
      <LightningFast />
      <article className="prose pb-12">
        <CodeBlock />
      </article>
    </PageWrapper>
  );
}
