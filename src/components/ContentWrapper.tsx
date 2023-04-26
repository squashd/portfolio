export default function ContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
      {children}
    </main>
  );
}
