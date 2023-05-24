"use client";
import { LightningFast } from "@/components/landing-page";
import { PageHeader } from "@/components/layouts";
import { WidthWrapperMargins } from "@/components/layouts";

export default function LightningAnimationPage() {
  return (
    <WidthWrapperMargins>
      <PageHeader
        header="Lightning Fast"
        subheader="Leken liten animasjon av tekst som løper over skjermen"
        type="PageHeader"
      />
      <LightningFast />
    </WidthWrapperMargins>
  );
}
