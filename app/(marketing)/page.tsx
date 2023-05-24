"use client";
import {
  AboutMe,
  Intro,
  Kontakt,
  Projects,
  Tools,
} from "@/components/landing-page";
import { useSectionJumper } from "@/components/section-jumper";

export default function LandingPage() {
  // A custom hook that uses section IDs to jump to sections
  // NextJS's link component does not work with scroll-snapping / overflow-scroll
  useSectionJumper();
  return (
    <>
      <div className="h-full snap-y snap-mandatory overflow-scroll scroll-smooth">
        <Intro />
        <AboutMe />
        <Projects />
        <Tools />
        <Kontakt />
      </div>
    </>
  );
}
