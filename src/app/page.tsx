'use client';

import Intro from '@/components/landing-page/Intro';
import ResponsiveDesign from '@/components/landing-page/ResponsiveDesign';
import ScrollDownIndicator from '@/components/UI/ScrollDownIndicator';
import LightningFast from '@/components/landing-page/LightningFast';
import MyStack from '@/components/landing-page/MyStack';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <main className="h-screen w-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden scroll-smooth">
        <Intro />
        <MyStack />
        <ResponsiveDesign />
        <LightningFast />
        <div className="snap-start">
          <Contact />
        </div>
        <ScrollDownIndicator />
      </main>
    </>
  );
}
