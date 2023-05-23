import {
  AboutMe,
  Intro,
  Kontakt,
  Projects,
  Tools,
} from "@/components/landing-page";

export default function LandingPage() {
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
