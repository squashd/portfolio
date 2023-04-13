'use client';

import Intro from '@/components/page-elements/Intro';
import ResponsiveDesign from '@/components/page-elements/ResponsiveDesign';
import NavBar from '@/components/NavBar';
import ScrollDownIndicator from '@/components/UI/ScrollDownIndicator';
import { useEffect, useState } from 'react';
import LightningFast from '@/components/page-elements/LightningFast';
import MyStack from '@/components/page-elements/MyStack';

export default function Home() {
  return (
    <>
      <main className="snap-y snap-mandatory h-screen overflow-scroll overflow-x-hidden scroll-smooth">
        <Intro />
        <MyStack />
        <ResponsiveDesign />
        <LightningFast />
        <ScrollDownIndicator />
      </main>
    </>
  );
}
