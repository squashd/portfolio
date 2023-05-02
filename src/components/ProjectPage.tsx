interface SimpleProjectPageProps {
  header: string;
  subheader: string;
  duration?: string;
  children: React.ReactNode;
  projectInfo: string[];
  liveUrl: {
    isLive: boolean;
    url?: string;
    label?: string;
  };
}
export default function ProjectPage({
  header,
  subheader,
  duration,
  children,
  projectInfo,
  liveUrl,
}: SimpleProjectPageProps) {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6">
        <header className="max-w-2xl pt-48">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
            {header}
          </h1>
          <p className="mt-6 text-base text-zinc-300">{subheader}</p>
          {duration && (
            <p className="text-light text-sm text-sky-400">{duration}</p>
          )}
        </header>
        {children}
        <section className="flex flex-col gap-12 pb-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-zinc-100">Om prosjektet</h2>
            {projectInfo.map((paragraph, index) => (
              <p key={index} className="">
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-zinc-100">
              Hvor kan jeg se siden?
            </h3>
            {liveUrl.isLive ? (
              <p className="">
                Sidene er live på{" "}
                <a
                  href={liveUrl.url}
                  className="group relative inline-block text-sky-400 transition duration-300"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {liveUrl.label}
                  <span className="relative bottom-1 block h-[1px] max-w-0 bg-sky-400 transition-all duration-500 group-hover:max-w-full"></span>
                </a>
                .
              </p>
            ) : (
              <p className="">
                Sidene er dessverre ikke tilgjengelige for offentlig visning,
                men om ønskelig kan jeg vise dem frem på et møte.
              </p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
