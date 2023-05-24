"use client";
import { LightningFast } from "@/components/landing-page";
import { SimplePageLayout } from "@/components/layouts";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Icons } from "@/components/icons";

export default function LightningAnimationPage() {
  const [show, setShow] = useState(true);

  const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const handleClick = async () => {
    setShow(false);
    await sleep(100);
    setShow(true);
  };

  return (
    <SimplePageLayout
      header="Lightning Fast"
      subheader="Leken liten animasjon av tekst som løper over skjermen"
    >
      <div className="flex items-center gap-2">
        <span>Gikk det for fort?</span>
        <Button onClick={() => handleClick()} size="sm" className="px-2">
          <Icons.repeat className="aspect-square h-4" />
        </Button>
      </div>
      {show && <LightningFast />}
    </SimplePageLayout>
  );
}
