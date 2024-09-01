import { FancyLink } from "@/components/formatting";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icons";

export default function LandingPage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex max-w-4xl flex-col">
        <p className="font-sans text-xl leading-none tracking-tight">
          Hi, my name&apos;s
        </p>
        <h1 className="p-0 font-heading text-7xl font-bold leading-none">
          Dan Hjartland
        </h1>
        <p className="pt-2 text-xl tracking-tight">
          and I&apos;m a Software Engineer at{" "}
          <FancyLink
            type={"external"}
            href={"https://boot.dev"}
            tooltip="I work here!"
          >
            Boot.dev
          </FancyLink>
        </p>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/squashd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon className="aspect-square w-10 transition hover:text-rose-500" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-hjartland/"
            className="group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="aspect-square w-10 transition hover:text-rose-500" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
