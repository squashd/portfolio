interface PageHeaderProps {
  header: string;
  subheader: string;
}
export default function PageHeader({ header, subheader }: PageHeaderProps) {
  return (
    <header className="mb-24 max-w-2xl pt-48">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
        {header}
      </h1>
      <p className="mt-6 max-w-2xl text-base text-zinc-300">{subheader}</p>
    </header>
  );
}
