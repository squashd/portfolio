"use client";
import { LightningFast } from "@/components/landing-page";
import { PageHeader } from "@/components/page-header";
import { WidthWrapperMargins } from "@/components/layouts";
import CodeBlock from "./CodeBlock.mdx";

export default function LightningAnimationPage() {
  return (
    <WidthWrapperMargins>
      <PageHeader
        header="Lightning Fast"
        subheader="Leken liten animasjon av tekst som løper over skjermen"
        type="PageHeader"
      />
      <LightningFast />
      <article className="prose pb-12">
        <CodeBlock />
      </article>
    </WidthWrapperMargins>
  );
}
