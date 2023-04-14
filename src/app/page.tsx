'use client';

import Intro from '@/features/landing-page/Intro';
import ResponsiveDesign from '@/features/landing-page/ResponsiveDesign';
import ScrollDownIndicator from '@/components/UI/ScrollDownIndicator';
import LightningFast from '@/features/landing-page/LightningFast';
import MyStack from '@/features/landing-page/MyStack';
import Squashd from '@/features/landing-page/Squashd';
import Kontakt from '@/features/landing-page/Kontakt';

export default function Home() {
  return (
    <>
      <main className="h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden scroll-smooth">
        <Intro />
        <MyStack />
        <ResponsiveDesign />
        <LightningFast />
        {/* <Squashd /> */}
        <Kontakt />
        <ScrollDownIndicator />
      </main>
    </>
  );
}
