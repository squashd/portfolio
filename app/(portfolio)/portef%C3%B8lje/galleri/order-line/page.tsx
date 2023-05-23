import Link from "next/link";
import OrderExample from "@/components/project-components";

export default function OrderLinePage() {
  return (
    <>
      <div className="mx-auto max-w-5xl px-6">
        <header className="max-w-2xl pt-48">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Ordrelinje
          </h1>
          <p className="mt-6 text-base">
            Ordrelinje komponent som er tatt i bruk i{" "}
            <Link
              href={"/portef%C3%B8lje/prosjekter/merkelappen-admin"}
              className="group relative inline-block text-color transition duration-300"
            >
              adminsidene
              <span className="relative bottom-1 block h-[1px] max-w-0 bg-color transition-all duration-500 group-hover:max-w-full"></span>
            </Link>{" "}
            til merkelappen.no.
          </p>
        </header>
        <section className="py-12">
          <div className="mx-auto max-w-5xl">
            <OrderExample />
          </div>
        </section>
      </div>
    </>
  );
}
